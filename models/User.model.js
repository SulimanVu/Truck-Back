const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  phone: String,
  mail: String,
  login: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
