import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  technologies: string[];
  images?: [] | string[] | any;
  date?: Date;
  description?: string;
  _id?: string;
  link?: string;
  projectType?: string;
  previewImage?: StaticImageData;
  github?: string
}
