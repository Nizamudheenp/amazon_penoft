const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const {
  register,
  login,
  verifyOtp
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);

router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    res.redirect(
      `${process.env.CLIENT_URL}/google-success?token=${token}&user=${encodeURIComponent(
        JSON.stringify(req.user)
      )}`
    );

  }
);

module.exports = router;
