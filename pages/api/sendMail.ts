// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "../../utils/mail";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const formData = JSON.parse(req.body);
  console.log("from api", formData);
  sendMail(formData.name, formData.mail, formData.msg);
  res.status(200).json("success");
}
