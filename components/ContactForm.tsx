import React, { useRef, useState } from "react";
import Button from "./utility/Button";

import { useModalContext } from "../context/ModalContext";
import { runFireWorks } from "../lib/confetti";
import LoadingButton from "./utility/LoadingButton";
import { SiMinutemailer } from "react-icons/si";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState<string | null>();
  const [name, setName] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [email, setEmail] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [message, setMessage] = useState<
    string | number | readonly string[] | undefined
  >("");
  const { setOpenModal } = useModalContext();

  const handleClose = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpenModal(false);
    document.body.style.overflow = "unset";
  };
  const sendEmail = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      {!isEmailSent ? (
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-5 xsm:items-center"
        >
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="mb-1">
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
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
            Or use this &rarr;{" "}
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
