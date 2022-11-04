import React, { useRef, useState } from "react";
import Button from "./utility/Button";
import emailjs from "@emailjs/browser";
import { useModalContext } from "../context/ModalContext";
import { runFireWorks } from "../lib/confetti";
import LoadingButton from "./utility/LoadingButton";
import { SiMinutemailer } from "react-icons/si";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState<string | null>();
  const { setOpenModal } = useModalContext();
  const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;
  const handleClose = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpenModal(false);
    document.body.style.overflow = "unset";
  };
  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        "template_s9jcvpc",
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
          setIsEmailSent(true);
          runFireWorks();
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
        }
      );
  };

  return (
    <>
      {!isEmailSent ? (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
              autoComplete="on"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              placeholder="Your email"
              name="user_email"
              required
            />
          </label>
          <label className="mb-1">
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Your message"
              required
              autoComplete="on"
            />
          </label>
          {loading ? (
            <LoadingButton />
          ) : (
            <Button type="submit">
              Send <SiMinutemailer />
            </Button>
          )}
          {error && <p className="text-red-600">{error}</p>}
          <p>
            Or use gmail &rarr;{" "}
            <a
              className="underline cursor-pointer"
              href="mailto:kenneth.trinidad.vega@gmail.com"
            >
              kenneth.trinidad.vega@gmail.com
            </a>
          </p>
        </form>
      ) : (
        <div>
          <h2 className="text-title font-medium">Email successfully sent ✔️</h2>
          <p className="text-base mt-5">
            Thank you for getting in touch! I will respond to you as soon as
            possible.
          </p>
          <p className="text-center mt-10">
            <Button onClick={handleClose}>Close</Button>
          </p>
        </div>
      )}
    </>
  );
};

export default ContactForm;
