// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SG_API_KEY!);

type Data = {
  success: boolean;
};
const send = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
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
      html: `<p><strong>Name:</strong>${name}</p> 
      <p><strong>Email:</strong>${email}</p> 
       <p><strong>Message:</strong>${message}</p>  `,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(200).json({ success: false });
    }
  }
};
export default send;
