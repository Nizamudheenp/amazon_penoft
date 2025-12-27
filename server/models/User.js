const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isBusiness: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  googleId: String
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
