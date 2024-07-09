const { jsonResponse } = require("../lib/jsonResponse");
const router = require("express").Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json(
      jsonResponse(400, {
        error: "Fields are required",
      })
    );
  }

  const accessToken = "access_token";
  const resfreshToken = "refresh_token";
  const user = {
    id: "1",
    name: "John Doe",
    username: "XXXXXXX",
  };
  res.status(200).json(jsonResponse(200, { user, accessToken, resfreshToken }));
});

module.exports = router;
