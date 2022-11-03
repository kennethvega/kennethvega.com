import Hero from "../components/Hero";
import Container from "../components/utility/Container";
import { motion } from "framer-motion";
import ProjectItem from "../components/ProjectItem";
import { collection, getDocs, query } from "firebase/firestore";
import { db, postToJSON } from "../lib/firebase-config";
import { ProjectsDataProps } from "../ts/type/ProjectDataTypes";

export default function Home({ projectData }: ProjectsDataProps) {
  console.log(projectData);
  return (
    <Container>
      <>
        <Hero />
        <h3 className="text-xl font-semibold mb-3">Projects</h3>
        {/* <div className="w-full h-[2px]"></div> */}
        <hr id="projects" />
        {projectData?.map((data) => (
          <ProjectItem data={data} key={data.name} />
        ))}
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
