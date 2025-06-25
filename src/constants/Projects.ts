import { Project } from "@/types/projectType";
import img1 from "@/imgs/portfolio/Screenshot_4.png";
import img2 from "@/imgs/portfolio/Screenshot_6.png";
import img3 from "@/imgs/portfolio/Screenshot_1.png";
import img4 from "@/imgs/portfolio/dancing-sawine-9072e4.netlify.app_.png";
import img5 from "@/imgs/portfolio/www.clikgame.com_.png";
import img6 from "@/imgs/portfolio/shop0game.com_.png";
import img7 from "@/imgs/portfolio/mazady-task-iyiz.vercel.app_.png";
import img8 from "@/imgs/portfolio/facebook.png";
import img9 from "@/imgs/portfolio/e-learning.png";
import img10 from "@/imgs/portfolio/sidon-catering.vercel.app_.png";
import img11 from "@/imgs/portfolio/download_imgs_free.surge.sh_.png";
import img12 from "@/imgs/portfolio/hotflix.surge.sh_.png";
import img13 from "@/imgs/portfolio/bashful-tree-test.surge.sh_.png";
import img14 from "@/imgs/portfolio/quran-kareem-gules.vercel.app_quran_by-surahs.png";
// Cart App Images
import img15 from "@/imgs/portfolio/cartApp Images/localhost_5173_ (1).png";
import img16 from "@/imgs/portfolio/cartApp Images/localhost_5173_account (1).png";
import img17 from "@/imgs/portfolio/cartApp Images/localhost_5173_ (2).png";
import img18 from "@/imgs/portfolio/cartApp Images/localhost_5173_product_68517d34999be12496d70cd4.png";
// Quran App Images
import img19 from "@/imgs/portfolio/quranApp/quran-kareem-gules.vercel.app_quran_by-surahs (1).png";
import img20 from "@/imgs/portfolio/quranApp/quran-kareem-gules.vercel.app_quran_by-surahs (2).png";
import img21 from "@/imgs/portfolio/quranApp/quran-kareem-gules.vercel.app_quran_by-surahs.png";
import img22 from "@/imgs/portfolio/quranApp/quran-kareem-gules.vercel.app_quran_by-surahs_2_ayah=22 (1).png";
import img23 from "@/imgs/portfolio/quranApp/quran-kareem-gules.vercel.app_quran_by-surahs_2_ayah=22.png";

export const projects: any[] = [
  {
    title: "Cart-App",
    technologies: ["reactjs tailwindcss node.js Express multer cloudinary"],
    previewImage: img18,
    githubRepo: "chat-app",
    projectType: "fullStack",
    frontEndGithubRepo: "cart-app-ui",
    backEndGithubRepo: "cart-app-api",
    images: [
      { Image: img15, imgDescription: "Booking Popup" },
      { Image: img16, imgDescription: "Account Page" },
      { Image: img17, imgDescription: "Product Page" },
      { Image: img18, imgDescription: "Add Comment Featrue" },
    ],
  },
  ,
  {
    title: "Quran Kareem",
    link: "https://quran-kareem-gules.vercel.app/quran",
    technologies: ["React.js Context API Typescript Tailwindcss Dark Mode"],
    previewImage: img14,
    projectType: "FrontEnd",
    frontEndGithubRepo: "quran-kareem",
    github: "https://github.com/yosefarafa103/quran-kareem",
    images: [
      {
        Image: img19,
        imgDescription: "Dark/Light Mode Resize Font Auto Scrolling",
      },
      { Image: img20, imgDescription: "Search In Particular" },
      { Image: img21, imgDescription: "Surahs Page" },
      { Image: img22, imgDescription: "Sebha Page" },
      { Image: img23, imgDescription: "Last Ayah Was Readed Feature" },
    ],
  },
  {
    title: "Task For Company Interview",
    link: "https://mazady-task-iyiz.vercel.app",
    technologies: ["Next.js Zustand Typescript Tailwindcss"],
    previewImage: img7,
    projectType: "FrontEnd",
    frontEndGithubRepo: "mazady-task",
  },

  {
    title: "Ecommerce",
    link: "https://convenience-store-9f553.web.app/",
    technologies: ["html css js aos light/dark-mode"],
    previewImage: img1,
  },
  {
    title: "Hotflex",
    link: "https://hotflix.surge.sh/",
    technologies: ["React Tailwindcss Redux-toolkit"],
    previewImage: img12,
  },
  {
    title: "Food Website (German)",
    link: "https://sidon-catering.vercel.app",
    technologies: ["React Tailwindcss Framer-Motion"],
    github: "https://github.com/yosefarafa103/sidon-catering",
    previewImage: img10,
    frontEndGithubRepo: "sidon-catering",
  },
  {
    title: "Images/Videos Download",
    link: "https://download_imgs_free.surge.sh",
    technologies: ["React Tailwindcss Redux-toolkit Framer-Motion Api Redux"],
    previewImage: img11,
  },
  {
    title: "E-learning landing page",
    link: "https://sub-e-learning.surge.sh",
    technologies: ["React Tailwindcss"],
    previewImage: img9,
  },
  {
    title: "Product",
    link: "https://payed-app.vercel.app",
    technologies: ["Next.js Tailwindcss Redux-toolkit"],
    github: "https://github.com/yosefarafa103/payed_app",
    previewImage: img2,
    frontEndGithubRepo: "payed_app",
  },

  {
    title: "Dapos (SA) Markting Website",
    link: "https://dapos-eta.vercel.app/",
    technologies: ["next.js tailwindcss gsap framer-motion"],
    github: "https://github.com/yosefarafa103/da",
    previewImage: img3,
    frontEndGithubRepo: "da",
  },
  {
    title: "face book clone",
    link: "https://facelook.surge.sh/",
    technologies: ["React Tailwindcss Redux-toolkit"],
    previewImage: img8,
  },
  {
    title: "Fasla (Markting Website)",
    link: "https://bashful-tree-test.surge.sh",
    technologies: ["reactjs framer-motion"],
    previewImage: img13,
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
