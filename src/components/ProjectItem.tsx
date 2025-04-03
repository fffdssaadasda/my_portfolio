"use client";
import WrapperSections from "./WrapperSections";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { Project } from "@/types/projectType";
import { useSession } from "next-auth/react";
import Link from "next/link";
import IconsButton from "./Buttons/IconsButton";
import { FiGithub } from "react-icons/fi";
import Tag from "./Tag";

const ProjectItem = ({
  images,
  title,
  date,
  description,
  technologies, _id, link,
  previewImage,
  github
}: Project) => {
  const imgsContainer = useRef(null);
  const [index, setIndex] = useState(0);
  const { data } = useSession()
  const hasPermession = data?.user?.email === "jooyosef173@gmail.com";
  useGSAP(() => {
    gsap.to(imgsContainer?.current, {
      x: index * 300,
      ease: "expo.out",
      duration: 1,
    });
  }, [index]);
  const [techs] = technologies;
  return (
    <>
      <WrapperSections isPadding={false} isFull>
        <div className="flex flex-col justify-between h-full">
          <section>
            <section className="border-b-[3px] overflow-hidden justify-between flex flex-col gap-3 border-b-[#000] border-b-solid py-[15px]">
              <div className="gap-[2vw] flex justify-between md:flex-col max-md:items-center">
                <div className="flex gap-3 justify-between items-center">
                  <h2 className="font-semibold text-4xl leading-[1] px-[20px] ">
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
            <div className="px-[20px]">
              <section className="flex flex-col mt-[15px] overflow-hidden gap-3 ">
                {/* Images */}
                <div ref={imgsContainer} className="flex gap-2 ">
                  <div className="min-h-[300px] text-[30px] w-full flex items-center justify-center relative">
                    {previewImage ? <>
                      <Image
                        className="rounded-[10px] object-cover"
                        fill
                        alt={previewImage?.src.toString()!}
                        src={previewImage?.src!} />
                    </> : "Image Will Provide Soon"}
                  </div>

                </div>

              </section>
              <section className="flex items-center mt-[15px] gap-2 whitespace-nowrap overflow-x-scroll scroll pb-3">
                {techs?.split(" ").map((tech: string) => (
                  <Tag key={Math.random() * 10} tag={tech} />
                ))}
              </section>
              {/* {hasPermession &&
                <DeleteProject id={_id as string} />
              } */}
              <section className="flex items-center gap-2 mt-5">
                <IconsButton link={github} icon={<FiGithub />} />
                <a href={link} target="_blank" className="transition-all duration-[300ms] p-[10px] text-xl block  border-solid border-[#000] rounded-[6px] border-[3px] text-center cursor-pointer sm:hover:text-white sm:hover:bg-black shadow-lg shadow-[#838383] flex-grow">Live Preview</a>
              </section>
            </div>
          </section>
        </div>
      </WrapperSections>
    </>
  );
};

export default ProjectItem;
