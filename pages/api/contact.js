export default function (req, res) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "bot.baselpractioner@gmail.com",
      pass: "xbkdjcpcpjvmblva", //PASSWORD,
    },
    secure: true,
  });
  if (req.body.email != "" || req.body.name != "" || req.body.message != "") {
    const mailList = ["support@baselpractitioners.com", req.body.email];

    const mailData = {
      from: "bot.baselpractitioners@gmail.com",
      to: mailList,
      subject: `Contact Form | Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<br/><p>Sent from : ${req.body.email}</p>
                  <h1>Contact Form</h1><br/>
                  <div>Name - ${req.body.name}</div>
                  <div>Info/Message - ${req.body.message}</div>`,
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        return res.status(500).json({ status: "error" });
      } else {
        console.log(info.response);
        return res.status(200).json({ status: "Message Sent" });
      }
    });
  } else {
    return res.status(500).json({ status: "error" });
  }
}
