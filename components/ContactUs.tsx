import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import sendEmail from "@/utils/sendEmail";

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
      sendEmail(form.current);
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
          <h1 className="text-3xl font-bold font-serif relative top-9 text-center">
            Get in touch to find out more.
          </h1>
          <h2 className="text-xl font-serif m-2 relative top-20">
            Feel free to submit a query here.
          </h2>
        </div>
        <div className="h-1/2 p-5 sm:m-5 mt-2 text-sm sm:text-md">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="m-4" ref={form}>
              <div className="form-control w-full max-w-md">
                <label className="label">
                  <span className="label-text">Enter your email here.</span>
                </label>
                <input
                  type="text"
                  placeholder="Email..."
                  className="input input-bordered input-md w-full bg-white"
                />
                <label className="label">
                  <span className="label-text">Enter your phone number.</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone..."
                  className="input input-bordered input-md w-full bg-white"
                />
                <label className="label">
                  <span className="label-text">Enter your name here.</span>
                </label>
                <input
                  type="text"
                  placeholder="Name..."
                  className="input input-bordered input-md w-full bg-white mb-5"
                />
                <textarea
                  placeholder="Enter query..."
                  className="textarea textarea-bordered textarea-sm h-40 w-full bg-white mb-5"
                />

                <button className="btn bg-white" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

let backup_form = `<div className="hero min-h-screen bg-base-200">
<div className="hero-content text-center">
  <div className="max-w-md">
    <h1 className="text-5xl font-bold">Hello there</h1>
    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    <button className="btn btn-primary">Get Started</button>
  </div>
</div>
</div>`;
