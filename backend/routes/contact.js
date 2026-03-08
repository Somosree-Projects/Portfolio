const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Optional: fixes "self-signed certificate" issue
    },
  });

  const mailOptions = {
  from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  replyTo: email, // Reply to the sender's email
  subject: `✨ Message from ${name}`,
  html: `
    <div style="font-family: 'Segoe UI', sans-serif; color: #333; padding: 20px; border: 2px dashed #d19fff; border-radius: 10px;">
      <h2 style="color: #8e44ad;">📩 New Portfolio Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f5f5f5; padding: 10px 15px; border-left: 4px solid #8e44ad; margin-top: 5px;">
        ${message.replace(/\n/g, "<br>")}
      </div>
      <p style="margin-top: 20px; font-size: 0.9rem; color: #777;">Sent from your Artistic Quest portfolio 💜</p>
    </div>
  `
};

  // Auto-reply to the user
  const autoReply = {
    from: `"Somosree" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thanks for contacting me ✨`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; padding: 20px; background-color: #faf5ff; border: 1px solid #e0c7ff; border-radius: 8px;">
        <h2 style="color: #9b59b6;">Hi ${name},</h2>
        <p>Thank you for reaching out through my portfolio. I appreciate your message and will get back to you as soon as possible.</p>
        <p style="margin-top: 1rem;">Until then, feel free to explore more of my work!</p>
        <p style="margin-top: 2rem;">Warm regards,<br/><strong>Somosree</strong></p>
      </div>
    `,
  };

  try {
     // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReply),
    ]);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email failed:", err);
    res.status(500).json({ success: false, message: "Email could not be sent." });
  }
});

module.exports = router;
