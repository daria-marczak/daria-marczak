const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("views"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.render("/index.html");
});

app.post("/userform", (req, res) => {

  const output = `
    <p>New contact request</p>
    <h3>Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>${req.body.message}</h3>
    <p>${req.body.message}</p>
  `;
  
  let transporter = nodemailer.createTransport({
    host: "mail-serwer21504.lh.pl",
    port: 587,
    auth: {
      user: "USER",
      pass: "PASS$"
    },
    tls: {
      rejectUnauthorized: false,
    }
  });


  let mailOptions = {
    from: '"Nodemailer contact" <dariamarczak@mail-serwer21504.lh.pl>',
    to: 'marczak.ria@gmail.com',
    subject: 'Node contact request',
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
})

const server = app.listen(3000, () => {
  console.log("Server is now up");
});