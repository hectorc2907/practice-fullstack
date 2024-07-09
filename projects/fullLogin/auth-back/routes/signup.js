const express = require("express");
const User = require("../schema/user");
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

router.post("/", async function (req, res) {
  const { username, password, name } = req.body;

  if (!username || !password || !name) {
    return res.status(409).json(
      jsonResponse(409, {
        error: "Fields are required",
      })
    );
  }
  try {
    const user = new User();
    const exists = await user.usernameExist(username);
    if (exists) {
      return res.status(409).json(
        jsonResponse(409, {
          error: "username already exists",
        })
      );
    } else {
      const user = new User({ username, password, name });
      await user.save();
      res.json(
        jsonResponse(200, {
          message: "User created successfully",
        })
      );
    }
  } catch (error) {
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error creating user",
      })
    );
  }
});

module.exports = router;
