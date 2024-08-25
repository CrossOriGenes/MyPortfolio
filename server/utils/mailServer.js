const nodemailer = require("nodemailer");
require("dotenv").config();

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "crossorigenes@gmail.com",
    pass: process.env.MAIL_PASSWORD,
  },
});

module.exports = mailTransporter