import React from "react";
import Button from "./utility/Button";
import { TbExternalLink } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { ProjectsItem } from "../ts/type/ProjectDataTypes";
import { spawn } from "child_process";
import ImageSlider from "./ImageSlider";

export type ProjectsItemProps = {
  data: ProjectsItem;
};

const ProjectItem = ({ data }: ProjectsItemProps) => {
  return (
    <div className="grid grid-cols-2 mt-10 gap-2 mb-10">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-4xl font-semibold">{data.name}</h3>
          <p>{data.description}</p>
          <div className="mt-5 flex text-sm gap-4 text-gray-500 flex-wrap">
            {data.tools.map((tool) => (
              <span key={tool}>#{tool}</span>
            ))}
          </div>
        </div>
        <div className="mt-10 flex gap-4">
          <Button>
            Live demo <TbExternalLink />
          </Button>
          <Button>
            Code repo
            <AiFillGithub />
          </Button>
        </div>
      </div>
      <div>
        <ImageSlider images={data.images} />
      </div>
    </div>
  );
};

export default ProjectItem;
