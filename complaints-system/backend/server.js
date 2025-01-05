const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/submit', async (req, res) => {
  const { complaint, email } = req.body;
  
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'elzaycomplaints@gmail.com',
      pass: 'wtvv dtcz iyjt kaum',
    },
  });

  let info = await transporter.sendMail({
    from: 'elzaycomplaints@gmail.com',
    to: "akram.markhieh@elzay.com , sonoqrut.adel@gmail.com",
    subject: 'New Complaint Submitted',
    text: complaint,
  });

  if (info.accepted.length > 0) {
    return res.status(200).send({ message: 'Complaint submitted successfully!' });
  }
  return res.status(500).send({ error: 'Failed to send email.' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
