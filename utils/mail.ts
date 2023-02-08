import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const sendMail = (name: string, email: string, msg: string) => {
  const mail = {
    to: "raveenanbarasan@gmail.com", // Change to your recipient
    from: "raveenanbarasan@gmail.com", // Change to your verified sender
    subject: "Message from portfolio",
    text: msg,
    templateId: process.env.SENDGRID_TEMPLATE_ID,
    dynamicTemplateData: {
      name,
      email,
      msg,
    },
  };
  sgMail
    .send(mail)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error.body);
    });
};
