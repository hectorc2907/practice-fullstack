const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3100;

app.use(cors());
app.use(express.json());

app.use("/api/signup", require("./routes/signup"));
app.use("/api/login", require("./routes/login"));
app.use("/api/user", require("./routes/user"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/refresh-token", require("./routes/refreshToken"));
app.use("/api/logout", require("./routes/logout"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
