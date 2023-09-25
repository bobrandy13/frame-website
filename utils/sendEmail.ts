import emailjs, { send } from "@emailjs/browser";
import "dotenv/config";

const sendEmail = (email_contents: string) => {
  console.log("hello world");
  console.log(process.env);
  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_YOUR_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID as string,
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
