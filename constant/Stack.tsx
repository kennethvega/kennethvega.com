import { FaReact } from "react-icons/fa";
import {
  IoLogoJavascript,
  IoLogoFirebase,
  IoLogoSass,
  IoLogoNodejs,
} from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
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
        name: "Node.js",
        logo: <IoLogoNodejs />,
      },
    ],
    second: [
      {
        name: "React",
        logo: <FaReact />,
      },
      {
        name: "Scss",
        logo: <IoLogoSass />,
      },
      {
        name: "Express.js",
        logo: <SiExpress />,
      },
    ],
    third: [
      {
        name: "Next.js",
        logo: <SiNextdotjs />,
      },
      {
        name: "Tailwindcss",
        logo: <SiTailwindcss />,
      },

      {
        name: "MongoDB",
        logo: <SiMongodb />,
      },

      {
        name: "Redux Toolkit",
        logo: <SiRedux />,
      },

      {
        name: "Firebase",
        logo: <IoLogoFirebase />,
      },
    ],
  },
];
