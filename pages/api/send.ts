// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SG_API_KEY!);

type Data = {
  success: boolean;
};
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;
    const msg = {
      to: "kenneth.trinidad.vega@gmail.com",
      from: "kenneth.trinidad.vega@gmail.com",
      subject: `${name.toUpperCase()} sent you a message`,
      text: `Email => ${email}`,
      html: `<strong>${message}</strong>`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(200).json({ success: false });
    }
  }
};

// require("dotenv").config();
// const sgMail = require("@sendgrid/mail");

// const { SG_API_KEY, FORM_EMAIL, TO_EMAIL } = process.env
// sgMail.setApiKey(SG_API_KEY)

// // using Twilio SendGrid's v3 Node.js Library
// // https://github.com/sendgrid/sendgrid-nodejs
// javascript
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'test@example.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
