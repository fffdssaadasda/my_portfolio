import { Project } from "@/types/projectType";
import img1 from "@/imgs/portfolio/Screenshot_4.png";
import img2 from "@/imgs/portfolio/Screenshot_6.png";
import img3 from "@/imgs/portfolio/Screenshot_1.png";
import img4 from "@/imgs/portfolio/dancing-sawine-9072e4.netlify.app_.png";
import img5 from "@/imgs/portfolio/www.clikgame.com_.png";
import img6 from "@/imgs/portfolio/shop0game.com_.png";
export const projects: Project[] = [
  {
    title: "face book clone",
    link: "https://facelook.surge.sh/",
    technologies: ["React Tailwindcss Redux-toolkit"],
  },
  {
    title: "Ecommerce",
    link: "https://convenience-store-9f553.web.app/",
    technologies: ["html css js aos light/dark-mode"],
    previewImage: img1,
  },
  {
    title: "E-learning landing page",
    link: "https://sub-e-learning.surge.sh",
    technologies: ["React Tailwindcss"],
  },
  {
    title: "Food Website (German)",
    link: "https://sidon-catering.vercel.app",
    technologies: ["React Tailwindcss Framer-Motion"],
    github: "https://github.com/yosefarafa103/sidon-catering",
  },
  {
    title: "Images/Videos Download",
    link: "https://download_imgs_free.surge.sh",
    technologies: ["React Tailwindcss Redux-toolkit Framer-Motion Api Redux"],
  },
  {
    title: "Product",
    link: "https://payed-app.vercel.app",
    technologies: ["Next.js Tailwindcss Redux-toolkit"],
    github: "https://github.com/yosefarafa103/payed_app",
    previewImage: img2,
  },
  {
    title: "Hotflex",
    link: "https://hotflix.surge.sh/",
    technologies: ["React Tailwindcss Redux-toolkit"],
  },
  {
    title: "Dapos (SA) Markting Website",
    link: "https://dapos-eta.vercel.app/",
    technologies: ["next.js tailwindcss gsap framer-motion"],
    github: "https://github.com/yosefarafa103/da",
    previewImage: img3,
  },
  {
    title: "Fasla (Markting Website)",
    link: "https://bashful-tree-test.surge.sh",
    technologies: ["reactjs framer-motion"],
  },
  {
    title: "Khdamaty - خدماتي",
    link: "https://dancing-sawine-9072e4.netlify.app",
    technologies: ["reactjs framer-motion tailwindcss"],
    previewImage: img4,
  },
  {
    title: "Freefire Game (1)",
    link: "https://www.clikgame.com/",
    technologies: ["reactjs tailwindcss"],
    previewImage: img5,
  },
  {
    title: "Freefire Game (2)",
    link: "https://shop0game.com",
    technologies: ["reactjs tailwindcss"],
    previewImage: img6,
  },
];
