const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
  const { recipient, subject, message } = req.body;

  // Replace these with your own Gmail credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jamal@adsomia.com',
      pass: 'jamal@adsomia123',
    },
  });

  const mailOptions = {
    from: 'jamal@adsomia.com',
    to: recipient,
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
