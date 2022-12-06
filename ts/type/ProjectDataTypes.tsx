export type ProjectsDataProps = {
  projectData: ProjectsItem[];
};

export type ProjectsItem = {
  name: string;
  description: string;
  code: string;
  demo: string;
  tools: string[];
  imgSrc: string[];
};
