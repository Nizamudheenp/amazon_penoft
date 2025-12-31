const User = require("../models/User");
const Otp = require("../models/Otp");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendOtp = require("../utils/sendOtp");

exports.register = async (req, res) => {
  const { name, email, password, isBusiness } = req.body;

  const exists = await User.findOne({ email });

  if (exists && exists.isVerified) {
    return res.status(400).json({ message: "User already exists" });
  }

  if (exists && !exists.isVerified) {
    await Otp.deleteMany({ email });
  }
  if (!exists) {
    const hashed = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashed,
      isBusiness,
      isVerified: false
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await Otp.create({
    email,
    otp,
    expiresAt: new Date(Date.now() + 10 * 60 * 1000)
  });

  try {
    await sendOtp(email, otp);
  } catch (err) {
    await Otp.deleteMany({ email });
    return res.status(500).json({ message: "Failed to send OTP email" });
  }

  res.json({ message: "OTP sent to email" });
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  const record = await Otp.findOne({
    email,
    otp,
    expiresAt: { $gt: new Date() }
  });

  if (!record) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  await User.updateOne({ email }, { isVerified: true });
  await Otp.deleteMany({ email });

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ message: "Email verified successfully", token, user });
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });
  if (!user.isVerified) return res.status(403).json({ message: "Verify email first" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

  res.json({ token, user });
};
