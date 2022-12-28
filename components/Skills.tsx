import React from "react";
import { Stack } from "../constant/Stack";
const Skills = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-none gap-3 justify-items-start text-sm text-gray-500 items-start mt-5">
      {Stack[0].first.map((tool) => (
        <div key={tool.name} className="flex justify-center gap-2 items-center __className_f6433a">
          <span className="text-black">{tool.logo}</span>
          <span>{tool.name}</span>
        </div>
      ))}

      {Stack[0].second.map((tool) => (
        <div key={tool.name} className="flex justify-center gap-2 items-center __className_f6433a">
          <span className="text-black">{tool.logo}</span>
          <span>{tool.name}</span>
        </div>
      ))}

      {Stack[0].third.map((tool) => (
        <div key={tool.name} className="flex justify-center gap-2 items-center __className_f6433a">
          <span className="text-black">{tool.logo}</span>
          <span>{tool.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
