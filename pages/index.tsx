import Hero from "../components/Hero";
import Container from "../components/utility/Container";
import { ProjectsDataProps } from "../ts/type/ProjectDataTypes";
import { useModalContext } from "../context/ModalContext";
import ContactForm from "../components/ContactForm";
import data from "../asset/project.json";
import { getPlaiceholder } from "plaiceholder";
import ProjectItem from "../components/ProjectItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Modal = dynamic(() => import("../components/utility/Modal"));
const DynamicAbout = dynamic(() => import("../components/About"), {
  suspense: true,
});
const DynamicCallToAction = dynamic(
  () => import("../components/CallToAction"),
  {
    suspense: true,
  }
);

export default function Home({ projectData }: ProjectsDataProps) {
  const { openModal, setOpenModal } = useModalContext();

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <Container>
      <>
        <Hero />
        <section id="projects" className="__className_f6433a">
          <h3 className="text-xl font-semibold mb-3">Projects</h3>
          <hr />
          <div className="flex flex-col gap-8">
            {projectData &&
              projectData?.map((data) => (
                <ProjectItem data={data} key={data.name} />
              ))}
          </div>
        </section>
        <div id="about" className="mb-20" />
        <section data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
          <h3 className="text-xl font-semibold mb-3 mt-10 __className_f6433a">
            About me
          </h3>
          <hr />
          <Suspense fallback={`Loading...`}>
            <DynamicAbout />
          </Suspense>
        </section>
        <section className="mt-10">
          <hr />
          <Suspense fallback={`Loading...`}>
            <DynamicCallToAction />
          </Suspense>
        </section>
        {openModal && (
          <Modal openModal onClose={() => setOpenModal(false)}>
            <ContactForm />
          </Modal>
        )}
      </>
    </Container>
  );
}

export async function getStaticProps() {
  const images_data = await Promise.all(
    data.map(async (data) => {
      const images = data.imgSrc;

      const imagesData = await Promise.all(
        images.map(async (imgItem) => {
          const { base64, img } = await getPlaiceholder(imgItem);
          return {
            ...img,
            base64: base64,
          };
        })
      );

      return { ...data, imgSrc: imagesData };
    })
  );

  return {
    props: {
      projectData: images_data,
    },
  };
}
