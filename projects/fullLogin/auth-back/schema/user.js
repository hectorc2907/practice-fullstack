const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Mongoose.Schema({
  id: { type: Object },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

UserSchema.pre("save", function (next) {
  if (this.isModified("password") || this.isNew) {
    const document = this;
    bcrypt.hash(document.password, 10, (error, hash) => {
      if (error) {
        next(error);
      } else {
        document.password = hash;
        next();
      }
    });
  } else {
    next();
  }
});

UserSchema.methods.usernameExist = async function (username) {
  const result = await Mongoose.model("User").findOne({ username });
  return result.length > 0;
};

UserSchema.methods.isCorrectPassword = async function (password, hash) {
  console.log(password, hash);
  const same = await bcrypt.compare(password, hash);
  return same;
};

module.exports = Mongoose.model("User", UserSchema);
