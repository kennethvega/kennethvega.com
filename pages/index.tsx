import Hero from "../components/Hero";
import Container from "../components/utility/Container";
import { AnimatePresence, motion } from "framer-motion";
import ProjectItem from "../components/ProjectItem";
import { collection, getDocs, query } from "firebase/firestore";
import { db, postToJSON } from "../lib/firebase-config";
import { ProjectsDataProps } from "../ts/type/ProjectDataTypes";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Modal from "../components/utility/Modal";
import { useModalContext } from "../context/ModalContext";
import ContactForm from "../components/ContactForm";

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
            {projectData?.map((data) => (
              <ProjectItem data={data} key={data.name} />
            ))}
          </div>
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

export const getServerSideProps = async () => {
  const projectQuery = query(collection(db, "projects"));
  const querySnapshot = await getDocs(projectQuery);
  const projectData = querySnapshot.docs.map(postToJSON);
  return {
    props: { projectData },
  };
};
