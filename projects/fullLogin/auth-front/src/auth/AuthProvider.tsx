import { useContext, createContext, useState, useEffect } from "react";
import type { AuthResponse, User } from "../types/types";
import requestNewAccessToken from "./requestNewAccessToken";

const backend = import.meta.env.VITE_API_URL;

const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => {},
  setAccessTokenAndRefreshToken: (
    _accessToken: string,
    _refreshToken: string
  ) => {},
  getRefreshToken: () => {},
  saveUser: (_userData: AuthResponse) => {},
  getUser: () => ({} as User | undefined),
  signout: () => {},
});
interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>();
  const [accessToken, setAccessToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function getAccessToken() {
    return accessToken;
  }

  function saveUser(userData: AuthResponse) {
    setAccessTokenAndRefreshToken(
      userData.body.accessToken,
      userData.body.refreshToken
    );
    setUser(userData.body.user);
    setIsAuthenticated(true);
  }

  function setAccessTokenAndRefreshToken(
    accessToken: string,
    refreshToken: string
  ) {
    console.log("setAccessTokenAndRefreshToken", accessToken, refreshToken);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    localStorage.setItem("token", JSON.stringify({ refreshToken }));
  }

  function getRefreshToken() {
    if (refreshToken) {
      return refreshToken;
    }
    const token = localStorage.getItem("token");
    if (token) {
      const { refreshToken } = JSON.parse(token);
      setRefreshToken(refreshToken);
      return refreshToken;
    }
    return null;
  }

  async function getNewAccessToken(refreshToken: string) {
    const token = await requestNewAccessToken(refreshToken);
    if (token) {
      return token;
    }
  }

  function getUser(): User | undefined {
    return user;
  }

  function signout() {
    localStorage.removeItem("token");
    setAccessToken("");
    setRefreshToken("");
    setUser(undefined);
    setIsAuthenticated(false);
  }

  async function checkAuth() {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const { refreshToken } = JSON.parse(token);
        const newAccessToken = await getNewAccessToken(refreshToken);
        if (newAccessToken) {
          const userInfo = await retrieveUserInfo(newAccessToken);
          setUser(userInfo);
          setAccessToken(newAccessToken);
          setIsAuthenticated(true);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        getAccessToken,
        setAccessTokenAndRefreshToken,
        getRefreshToken,
        saveUser,
        getUser,
        signout,
      }}
    >
      {isLoading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}

async function retrieveUserInfo(accessToken: string) {
  try {
    const response = await fetch(`${backend}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.ok) {
      const json = await response.json();
      console.log(json);
      return json.body;
    }
  } catch (error) {
    console.error(error);
  }
}

export const useAuth = () => useContext(AuthContext);
