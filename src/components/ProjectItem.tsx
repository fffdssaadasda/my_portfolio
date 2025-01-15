"use client";
import { FaArrowRight } from "react-icons/fa";
import WrapperSections from "./WrapperSections";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { StaticImageData } from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { Project } from "@/types/projectType";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Loader from "./Loader";
import DeleteProject from "./Buttons/DeleteProject";
import { api } from "@/utils/vas";

interface project {
  imgs?: StaticImageData[];
  projectName: string;
  date: string;
  projectDescription: string;
}
const ProjectItem = ({
  images,
  title,
  date,
  description,
  technologies, _id, link
}: Project) => {
  const imgsContainer = useRef(null);
  const [index, setIndex] = useState(0);
  const { data } = useSession()
  const hasPermession = data?.user?.email === "jooyosef173@gmail.com";
  useGSAP(() => {
    gsap.to(imgsContainer?.current, {
      x: index * 170,
      ease: "expo.out",
      duration: 1,
    });
  }, [index]);
  const [techs] = technologies;
  return (
    <>
      <WrapperSections isFull>
        <div className="flex flex-col justify-between h-full">
          <section>
            <section className="border-b-[1px] overflow-hidden justify-between flex flex-col gap-3 border-b-[#000] border-b-solid py-[15px]">
              <div className="gap-[2vw] flex justify-between md:flex-col max-md:items-center">
                <div className="flex gap-3 justify-between items-center">
                  <h2 className="font-semibold text-4xl leading-[1]">
                    {title}
                  </h2>
                  {hasPermession &&
                    <Link href={`/projects/${_id}`} className="size-[40px] flex items-center justify-center cursor-pointer hover:text-white hover:bg-green-300 border-green-300 text-green-300 border-solid border-[3px]">
                      <MdModeEdit className="text-xl" />
                    </Link>
                  }
                </div>
                {/* <h4 className="text-[4vw] max-sm:text-[25px]">{date}</h4> */}
              </div>
            </section>
            <section className="flex flex-col mt-[15px] overflow-hidden gap-3">
              {/* Images */}
              <div ref={imgsContainer} className="flex gap-2 ">
                {images?.length === 1 ?
                  <img
                    key={images[0]}
                    src={`${api}/images/${images[0]}`}
                    className="w-full object-cover  max-h-[200px]"
                    alt=""
                  /> :
                  images.map((el: HTMLImageElement) => (
                    <img
                      key={el.src}
                      src={`${api}/images/${el}` || ""}
                      className="min-w-[350px] max-h-[200px]"
                      alt="aaa"
                    />
                  ))
                }
                {/* {images?.length &&
              } */}
              </div>
              {/* Images */}
              <p>{description}</p>
              {images?.length > 1 &&
                <section className="flex gap-2 items-center">
                  <span
                    onClick={() => {
                      if (index > -images?.length) {
                        setIndex((prev) => (prev -= 1));
                      }
                    }}
                    className="size-[40px] text-[22px] cursor-pointer bg-black text-white flex items-center justify-center"
                  >
                    <IoIosArrowBack />
                  </span>
                  <span
                    onClick={() => {
                      if (index < 0) {
                        setIndex((prev) => (prev += 1));
                      }
                    }}
                    className="size-[40px] text-[22px] cursor-pointer bg-black text-white flex items-center justify-center"
                  >
                    <IoIosArrowForward />
                  </span>
                </section>
              }
            </section>
            <section className="flex items-center mt-[15px] flex-wrap gap-2">
              {techs?.split(" ").map((tech: string) => (
                <div key={tech + Math.random()} className="px-[15px] py-[2px] bg-white hover:border-[#444] hover:bg-[#444] transition-all duration-[300ms] hover:text-white cursor-pointer rounded-md border-2 border-[#eee] text-center" >
                  {tech}
                </div>
              ))}
            </section>
          </section>
          <section>
            {hasPermession &&
              <DeleteProject id={_id as string} />
            }
            <a href={link} target="_blank" className="transition-all duration-[200ms] p-[10px] text-xl block  border-solid border-[#bbb] rounded-[6px] border-[1px] text-center cursor-pointer sm:hover:text-white sm:hover:bg-black mt-[10px]">Live Preview</a>
          </section>
        </div>

      </WrapperSections>
    </>
  );
};

export default ProjectItem;
