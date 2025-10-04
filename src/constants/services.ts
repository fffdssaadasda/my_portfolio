import {
    FaCode,
    FaServer,
    FaDatabase,
    FaLock,
    FaRocket,
    FaTools,
    FaCogs,
} from "react-icons/fa";
import { RiDashboardFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
    SiNestjs,
    SiTypescript,
    SiReactquery,
    SiRedux,
    SiExpress,
    SiMongodb,
    SiJsonwebtokens,
    SiJest,
    SiSwagger,
    SiPassport,
    SiMongoose,
    SiRedis,
    SiDocker,
    SiGithubactions,
    SiNginx,
    SiLighthouse,
    SiTestinglibrary,
} from "react-icons/si";
import { LiaNodeJs } from "react-icons/lia";
import { MdSpeed } from "react-icons/md";

export const services = [
    {
        title: "Full Stack Web Development",
        Icon: FaCode,
        color: "#38BDF8",
        description:
            "Build complete, modern web applications using Next.js and NestJS with clean architecture, strong performance, and responsive design.",
        technologies: [
            { name: "Next.js", icon: RiNextjsFill, color: "#000000" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38BDF8" },
            { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
        ],
    },
    {
        title: "RESTful & GraphQL API Development",
        Icon: FaServer,
        color: "#22C55E",
        description:
            "Design and develop secure, scalable APIs with proper documentation, authentication, and optimized performance.",
        technologies: [
            { name: "Node.js", icon: LiaNodeJs, color: "#68A063" },
            { name: "Express", icon: SiExpress, color: "#808080" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
            { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
        ],
    },
    {
        title: "Dashboard & Admin Panel Development",
        Icon: RiDashboardFill,
        color: "#F59E0B",
        description:
            "Create dynamic and user-friendly admin dashboards for managing data, analytics, and user activity.",
        technologies: [
            { name: "React Query", icon: SiReactquery, color: "#FF4154" },
            { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
            { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38BDF8" },
        ],
    },
    {
        title: "Authentication & Authorization Systems",
        Icon: FaLock,
        color: "#E11D48",
        description:
            "Implement robust authentication systems with JWT, OAuth, and advanced user role management.",
        technologies: [
            { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
            { name: "Passport.js", icon: SiPassport, color: "#34A853" },
        ],
    },
    {
        title: "Backend Architecture & Database Design",
        Icon: FaDatabase,
        color: "#4DB33D",
        description:
            "Design reliable backend architectures and database schemas optimized for scalability and performance.",
        technologies: [
            { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
            { name: "Mongoose", icon: SiMongoose, color: "#800000" },
            { name: "Redis", icon: SiRedis, color: "#D82C20" },
        ],
    },
    {
        title: "Frontend-Backend Integration",
        Icon: FaCogs,
        color: "#6366F1",
        description:
            "Connect frontend and backend seamlessly to ensure fast, secure, and consistent user experiences.",
        technologies: [
            { name: "Next.js", icon: RiNextjsFill, color: "#000000" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "REST API", icon: FaServer, color: "#22C55E" },
            { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
        ],
    },
    {
        title: "Testing & Code Quality Assurance",
        Icon: SiJest,
        color: "#EF4444",
        description:
            "Write unit and integration tests to ensure code stability, reliability, and maintainability.",
        technologies: [
            { name: "Jest", icon: SiJest, color: "#99424F" },
            { name: "React Testing Library", icon: SiTestinglibrary, color: "#E11D48" },
        ],
    },
    {
        title: "Performance Optimization & SEO",
        Icon: MdSpeed,
        color: "#10B981",
        description:
            "Optimize page load speed, SEO ranking, and user experience with Next.js and Tailwind best practices.",
        technologies: [
            { name: "Next.js", icon: RiNextjsFill, color: "#000000" },
            { name: "Lighthouse", icon: SiLighthouse, color: "#FBBF24" },
            { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38BDF8" },
        ],
    },
    {
        title: "Deployment & DevOps Setup",
        Icon: FaRocket,
        color: "#3B82F6",
        description:
            "Deploy and maintain applications on cloud platforms like Vercel or Docker with CI/CD pipelines.",
        technologies: [
            { name: "Vercel", icon: RiNextjsFill, color: "#000000" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
            { name: "Nginx", icon: SiNginx, color: "#009639" },
        ],
    },
    {
        title: "Maintenance & Feature Upgrades",
        Icon: FaTools,
        color: "#A855F7",
        description:
            "Maintain existing projects, fix bugs, and add new features with clean, scalable code.",
        technologies: [
            { name: "Next.js", icon: RiNextjsFill, color: "#000000" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        ],
    },
];
