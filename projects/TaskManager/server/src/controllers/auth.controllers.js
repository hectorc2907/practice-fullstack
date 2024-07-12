import User from "../models/user.mode.js";

export const register = (req, res) => {
  const { email, username, password } = req.body;
  new User({ username, email, password });
};
export const login = (req, res) => {
  res.send("login");
};
