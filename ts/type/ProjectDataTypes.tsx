export type ProjectsDataProps = {
  projectData: ProjectsItem[];
};

export type ProjectsItem = {
  name: string;
  description: string;
  code: string;
  demo: string;
  figma: string;
  tools: string[];
  images: string[];
};
