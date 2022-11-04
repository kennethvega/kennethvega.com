import Hero from "../components/Hero";
import Container from "../components/utility/Container";
import { motion } from "framer-motion";
import ProjectItem from "../components/ProjectItem";
import { collection, getDocs, query } from "firebase/firestore";
import { db, postToJSON } from "../lib/firebase-config";
import { ProjectsDataProps } from "../ts/type/ProjectDataTypes";
import About from "../components/About";
import CallToAction from "../components/CallToAction";

export default function Home({ projectData }: ProjectsDataProps) {
  console.log(projectData);
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
        <section>
          <h3 id="about" className="text-xl font-semibold mb-3 mt-10">
            About me
          </h3>
          <hr />
          <About />
        </section>
        <section className="mt-10">
          <hr />
          <CallToAction />
        </section>
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
