"use server";
import emailjs, { send } from "@emailjs/browser";

const sendEmail = (email_contents: string) => {
  console.log("hello world");
  emailjs
    .sendForm(
      process.env.YOUR_SERVICE_ID,
      process.env.YOUR_TEMPLATE_ID,
      email_contents,
      "E8ASQ536_BvjeeMc2"
    )
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        // TODO: swhow error when the email is no sucesfully submitted.
        console.error(error);
      }
    );
};
export default sendEmail;
