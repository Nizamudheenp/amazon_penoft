const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

module.exports = async (email, otp) => {
  await transporter.sendMail({
    from: `"Amazon Clone" <${process.env.MAIL_USER}>`,
    to: email,
    subject: "Verify your email",
    html: `
      <h2>Your OTP</h2>
      <h1>${otp}</h1>
      <p>Valid for 10 minutes</p>
    `
  });
};
