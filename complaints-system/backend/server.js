const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files (CSS, JS, etc.) from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve the complaints.html file from the frontend when accessing the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'complaints.html'));
});

app.post('/submit', async (req, res) => {
  const { complaint, email } = req.body;

  // Validate the request body
  if (!complaint || !email) {
    return res.status(400).send({ error: 'Complaint and email are required.' });
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'elzaycomplaints@gmail.com',
      pass: "zlia ibnd wfaz ndcn",
    },
  });

  try {
    let info = await transporter.sendMail({
      from: 'elzaycomplaints@gmail.com',
      to: "akram.markhieh@elzay.com , sonoqrut.adel@gmail.com, ralattar@elzay.com",
      subject: 'New Complaint Submitted',
      text: complaint,
    });

    if (info.accepted.length > 0) {
      return res.status(200).send({ message: 'Complaint submitted successfully!' });
    } else {
      return res.status(500).send({ error: 'Failed to send email.' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).send({ error: 'Failed to send email.', details: error.message });
  }
});
// Catch-all for any unmatched routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
