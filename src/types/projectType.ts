import { StaticImageData } from "next/image";
export interface Img {
  imgDescription?: string;
  Image?: StaticImageData;
}
export interface Project {
  title: string;
  technologies: string[];
  images?: undefined | Img[];
  date?: Date;
  description?: string;
  _id?: string;
  link?: string;
  projectType?: "FrontEnd" | "Backend" | "fullStack";
  previewImage?: StaticImageData;
  github?: string;
  githubRepo?: string;
  frontEndGithubRepo?: string;
  backEndGithubRepo?: string;
}
