import Button from "./utility/Button";
import { TbExternalLink } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { ProjectsItem } from "../ts/type/ProjectDataTypes";

import ImageSlider from "./ImageSlider";

import dynamic from "next/dynamic";
import { Suspense } from "react";
const DynamicImageSlider = dynamic(() => import("./ImageSlider"), {
  suspense: true,
});

export type ProjectsItemProps = {
  data: ProjectsItem;
};

const ProjectItem = ({ data }: ProjectsItemProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="400"
      className="grid grid-cols-2 mt-10 gap-2 mb-10 xmd:grid-cols-1 xmd:justify-center xmd:items-center"
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-4xl font-bold md:text-2xl __className_f6433a">
            {data.name}
          </h3>
          <p>{data.description}</p>
          <div className="mt-5 flex text-sm gap-4 text-gray-500 flex-wrap __className_f6433a">
            {data.tools.map((tool) => (
              <span key={tool}>#{tool}</span>
            ))}
          </div>
        </div>
        <div className="mt-10 flex gap-4 __className_f6433a">
          <a
            href={data.demo}
            target="_blank"
            rel="noopener noreferrer "
            aria-label="demo"
          >
            <Button>
              Live demo <TbExternalLink />
            </Button>
          </a>
          <a
            href={data.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="code repository"
          >
            <Button>
              Code repo
              <AiFillGithub />
            </Button>
          </a>
        </div>
      </div>
      <div>
        <Suspense fallback={`Loading...`}>
          <DynamicImageSlider images={data.imgSrc} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProjectItem;
