const express = require('express');
const { sendingMessageTemplate } = require('../sendingMessageTemplate');
const router = express.Router();
const {Resend} = require('resend');

const resend = new Resend(process.env.RESEND_TOKEN);



router.get("/", async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: "Skylence Designs <onboarding@resend.dev>",
    to: ["mdshakib1902@gmail.com"],
    subject: "hello world",
    html: `${sendingMessageTemplate({ otp: '123456', username: 'Irfan Pathan' })}`,
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
});


module.exports = router;