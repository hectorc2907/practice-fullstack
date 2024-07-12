import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.send("registrando");
  } catch (error) {
    console.error(error);
  }
};
export const login = (req, res) => {
  res.send("login");
};
