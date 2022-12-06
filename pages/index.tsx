import Hero from "../components/Hero";
import Container from "../components/utility/Container";
import { AnimatePresence } from "framer-motion";
import { ProjectsDataProps } from "../ts/type/ProjectDataTypes";
import { useModalContext } from "../context/ModalContext";
import dynamic from "next/dynamic";
import Modal from "../components/utility/Modal";
import ContactForm from "../components/ContactForm";
import { project } from "../asset/project";
// dynamic imports
const ProjectItem = dynamic(() => import("../components/ProjectItem"));
const About = dynamic(() => import("../components/About"));
const CallToAction = dynamic(() => import("../components/CallToAction"));

export default function Home({ projectData }: ProjectsDataProps) {
  const { openModal, setOpenModal } = useModalContext();
  return (
    <Container>
      <>
        <Hero />
        <section>
          <h3 id="projects" className="text-xl font-semibold mb-3">
            Projects
          </h3>
          <hr />
          <div className="flex flex-col gap-8">
            {projectData &&
              projectData?.map((data) => (
                <ProjectItem data={data} key={data.name} />
              ))}
          </div>
          <p>
            <strong> MERN stack project coming soon....</strong>
          </p>
        </section>
        <div id="about" className="mb-20" />
        <section>
          <h3 className="text-xl font-semibold mb-3 mt-10">About me</h3>
          <hr />
          <About />
        </section>
        <section className="mt-10">
          <hr />
          <CallToAction />
        </section>
        <AnimatePresence>
          {openModal && (
            <Modal openModal onClose={() => setOpenModal(false)}>
              <ContactForm />
            </Modal>
          )}
        </AnimatePresence>
      </>
    </Container>
  );
}

export const getStaticProps = async () => {
  return {
    props: { projectData: project },
  };
};
