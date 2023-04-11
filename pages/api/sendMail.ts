// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "../../utils/mail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  try {
    const formData = JSON.parse(req.body);
    console.log("from api", formData);
    await sendMail(formData.name, formData.mail, formData.msg);
    console.log("mail sent");
    res.status(200).json("success");
  } catch (err) {
    console.error(err);
    res.status(500).json("error");
  }
}
