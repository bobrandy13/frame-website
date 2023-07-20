import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type Input = {
  name: string;
  email: string;
  number: string;
  query: string;
};

function ContactUs() {
  // const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>();
  const form = useRef(null);
  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    alert("Successfully submitted");

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_YOUR_SERCICE_ID,
          process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
          form.current,
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
    }
  };

  // TODO: when user submits, i want to send an email to my personal email containing all the data;
  // TODO: style the form so that it looks good and like an an actual customer service form and get help form
  return (
    <>
      <div
        className="grid sm:grid-cols-2 w-full text-center dark:text-slate-800"
        id="contactUs"
      >
        <div className="float-right w-45/100 m-10">
          <h1 className="text-5xl font-serif relative top-9 text-center">
            Contact us here.
          </h1>
          <h2 className="text-2xl font-serif m-2 relative top-20">
            If you have any questions or queries, please do not hesitate to
            contact by submitting a form here. We will try get back to you
            promptly.
          </h2>
        </div>
        <div className="w-[90%] h-1/2 p-5 sm:m-5 mt-2 text-sm sm:text-md">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="margin-4"
              ref={form}
            >
              <div className="grid grid-cols-3 gap-2">
                <input
                  placeholder="Contact email"
                  {...register("email")}
                  className=" flex m-4 w-full h-11 rounded p-2 dark:bg-white"
                />
                <input
                  placeholder="Contact number here"
                  {...register("number")}
                  className="flex m-4 w-full h-11 rounded p-2 bg-white"
                />
                <input
                  placeholder={"Name"}
                  {...register("name", { required: true })}
                  className="flex m-4 w-full h-11 rounded p-2 bg-white"
                />
              </div>
              <textarea
                placeholder={"Enter query"}
                {...register("query")}
                className="flex w-full h-64 m-4 rounded text-left align-top flex-start bg-white"
                style={{
                  textAlign: "left",
                  verticalAlign: "top",
                  padding: "12px",
                }}
              />
              <div className="flex items-center justify-center">
                <input
                  className="w-32 h-12 flex bg-slate-500 rounded-lg items-center justify-center dark: text-white"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
