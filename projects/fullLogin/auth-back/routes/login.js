const express = require("express");
const User = require("../schema/user");
const { jsonResponse } = require("../lib/jsonResponse");
const getUserInfo = require("../lib/getUserInfo");
const router = express.Router();

router.post("/", async function (req, res, next) {
  const { username, password } = req.body;

  try {
    let user = new User();
    const userExists = await user.userExists(username);
    if (userExists) {
      user = await User.findOne({ username: username });
      const passwordCorrect = await user.isCorrectPassword(
        password,
        user.password
      );
      if (passwordCorrect) {
        const accessToken = user.createAccessToken();
        const refreshToken = user.createRefreshToken();
        console.log({ accessToken, refreshToken });
        return res.json(
          jsonResponse(200, {
            user: getUserInfo(user),
          })
        );
      } else {
        return res.status(401).json(
          jsonResponse(401, {
            error: "Username or Password incorrect",
          })
        );
      }
    } else {
      return res.status(401).json(
        jsonResponse(401, {
          error: " Username does not exist",
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
