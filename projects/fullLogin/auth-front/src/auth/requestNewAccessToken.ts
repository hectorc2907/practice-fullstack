import { AccessTokenResponse } from "../types/types";

const backend = import.meta.env.VITE_API_URL;

export default async function requestNewAccessToken(refreshToken: string) {
  const response = await fetch(`${backend}/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });
  if (response.ok) {
    const json = (await response.json()) as AccessTokenResponse;
    if (json.error) {
      throw new Error(json.error);
    }
    return json.body.accessToken;
  } else {
    throw new Error("Unable to refresh access token");
  }
}
