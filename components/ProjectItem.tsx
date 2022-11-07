import React from "react";
import Button from "./utility/Button";
import { TbExternalLink } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { ProjectsItem } from "../ts/type/ProjectDataTypes";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";

export type ProjectsItemProps = {
  data: ProjectsItem;
};

const ProjectItem = ({ data }: ProjectsItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
      className="grid grid-cols-2 mt-10 gap-2 mb-10 xmd:grid-cols-1 xmd:justify-center xmd:items-center"
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-4xl font-bold md:text-2xl">{data.name}</h3>
          <p>{data.description}</p>
          <div className="mt-5 flex text-sm gap-4 text-gray-500 flex-wrap">
            {data.tools.map((tool) => (
              <span key={tool}>#{tool}</span>
            ))}
          </div>
        </div>
        <div className="mt-10 flex gap-4">
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
        <ImageSlider images={data.images} />
      </div>
    </motion.div>
  );
};

export default ProjectItem;
