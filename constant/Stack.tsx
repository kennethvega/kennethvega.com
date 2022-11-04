import { FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase, IoLogoSass } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

export const Stack = [
  {
    first: [
      {
        name: "JavaScript",
        logo: <IoLogoJavascript />,
      },

      {
        name: "TypeScript",
        logo: <SiTypescript />,
      },
      {
        name: "Tailwindcss",
        logo: <SiTailwindcss />,
      },
    ],
    second: [
      {
        name: "React",
        logo: <FaReact />,
      },

      {
        name: "Redux",
        logo: <SiRedux />,
      },

      {
        name: "Scss",
        logo: <IoLogoSass />,
      },
    ],
    third: [
      {
        name: "Nextjs",
        logo: <SiNextdotjs />,
      },

      {
        name: "Firebase",
        logo: <IoLogoFirebase />,
      },
    ],
  },
];
