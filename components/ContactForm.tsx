import React, { useRef, useState } from "react";
import Button from "./utility/Button";

import { useModalContext } from "../context/ModalContext";
import { runFireWorks } from "../lib/confetti";
import LoadingButton from "./utility/LoadingButton";
import { SiMinutemailer } from "react-icons/si";
import { validate } from "../utils/validate";

interface IValues {
  name: string;
  email: string;
  message: string;
}
interface IErrors extends Partial<IValues> {}
const ContactForm = () => {
  const [values, setValues] = useState<IValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const { setOpenModal } = useModalContext();

  const handleClose = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpenModal(false);
    document.body.style.overflow = "unset";
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setValues({ name: "", email: "", message: "" });
        setIsEmailSent(true);
        runFireWorks();
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {!isEmailSent ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 xsm:items-center"
        >
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <label htmlFor="name">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              id="name"
              value={values.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="message" className="mb-1">
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Your message"
              required
              value={values.message}
              onChange={handleChange}
              id="message"
            />
          </label>
          {loading ? (
            <LoadingButton />
          ) : (
            <Button type="submit">
              Send <SiMinutemailer />
            </Button>
          )}
          {/* {error && <p className="text-red-600">{error}</p>} */}
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
          <Button onClick={handleClose}>
            <p className="text-center mt-10">Okay✔️</p>
          </Button>
        </div>
      )}
    </>
  );
};

export default ContactForm;
