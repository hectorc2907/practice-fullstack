import axios from "axios";

const API = import.meta.env.VITE_API_BACKEND;

export const registerRequest = (user) => axios.post(`${API}/register`, user);
