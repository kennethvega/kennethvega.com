import Button from "./utility/Button";
import { SiMinutemailer } from "react-icons/si";
import { useModalContext } from "../context/ModalContext";

const CallToAction = () => {
  const { setOpenModal } = useModalContext();
  const handleModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      <h2
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="500"
        className="mt-24 text-6xl md:text-4xl font-bold text-center __className_f6433a"
      >
        Say hi to Kenneth.
      </h2>
      <p
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="600"
        className="text-center mt-3 __className_f6433a"
      >
        I would love to hear from you. Whether it’s a project, a job
        opportunity, <br /> or just a chat. Feel free to contact me.
      </p>
      <p
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="700"
        className="text-center arrow bounce"
      >
        &darr;
      </p>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="800"
        className="flex items-center justify-center mt-10 "
      >
        <Button onClick={handleModal}>
          <p className="px-2 py-1 flex items-center justify-center gap-2">
            Email <SiMinutemailer />
          </p>
        </Button>
      </div>
    </>
  );
};

export default CallToAction;

