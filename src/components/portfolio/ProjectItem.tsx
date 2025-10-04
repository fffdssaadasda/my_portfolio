"use client";
import WrapperSections from "../atoms/WrapperSections";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Project } from "@/types/projectType";
import IconsButton from "../Buttons/IconsButton";
import { FiGithub } from "react-icons/fi";
import Tag from "../atoms/Tag";
import { Code, Images } from "lucide-react"
import ScreenShotsContainer from "../atoms/ScreenShotsContainer";
import { AnimatePresence } from "framer-motion";
import CodeAreaItem from "../CodeAreaItem";
import WrapperResources from "../atoms/WrapperResources";
const ProjectItem = ({
  images,
  title,
  date,
  description,
  technologies, _id, link,
  previewImage,
  github,
  githubRepo,
  frontEndGithubRepo, backEndGithubRepo, projectType
}: Project) => {
  const imgsContainer = useRef(null);
  const [tabs, setTabs] = useState(0);
  const [isOpenScreensShot, setIsOpenScreensShot] = useState(false);
  const [isOpenCodeArea, setIsOpenCodeArea] = useState(false);
  const [techs] = technologies;
  return (
    <>
      <WrapperSections isPadding={false} isFull >
        <div className="flex flex-col justify-between h-full ">
          <section>
            <section className="border-b-[3px] overflow-hidden justify-between flex flex-col gap-3  border-b-black dark:border-b-indigo-500/50 border-b-solid py-[15px]">
              <div className="gap-[2vw] flex justify-between md:flex-col max-md:items-center">
                <div className="flex gap-3 justify-between items-center">
                  <h2 className="font-semibold text-4xl leading-[1] px-[20px] ">
                    {title}
                  </h2>
                </div>
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

              <section className="flex items-center gap-2 mt-5">
                <IconsButton link={github} icon={<FiGithub />} />
                {link &&
                  <a href={link} target="_blank" className="transition-all duration-[300ms] p-[10px] text-xl block  border-solid border-[#000] rounded-[6px] border-[3px] text-center cursor-pointer sm:hover:text-white sm:hover:bg-black shadow-lg dark:shadow-none shadow-accent-foreground flex-grow">Live Preview</a>
                }
                {<section className="flex items-center gap-3">
                  {images?.length &&
                    <span onClick={() => setIsOpenScreensShot(true)} title="Screen Shots" className="size-[40px] bg-accent-foreground cursor-pointer p-1 flex items-center justify-center text-sm rounded-md">
                      <Images className="text-accent" />
                    </span>
                  }
                </section>}
                {(frontEndGithubRepo || backEndGithubRepo) &&
                  <span onClick={() => setIsOpenCodeArea(true)} title="source code" className="size-[40px] bg-accent-foreground cursor-pointer p-1 flex items-center justify-center text-sm rounded-md">
                    <Code className="text-accent" />
                  </span>
                }
              </section>
              <AnimatePresence>
                {isOpenCodeArea ?
                  <>
                    {/* <section className="w-full absolute -top-[95px] bg-whtie"> */}
                    {/* </section> */}
                    <WrapperResources>
                      {projectType === "fullStack" &&
                        <WrapperSections isFull>
                          <button
                            onClick={() => setTabs(0)}
                            className={`${tabs !== 0 ? "bg-white text-black" : "bg-black text-white"} rounded-lg px-5 p-2`}
                          >
                            Frontend
                          </button>
                          <button
                            onClick={() => setTabs(1)}
                            className={`${tabs == 0 ? "bg-white text-black" : "bg-black text-white"} rounded-lg px-5 ml-2 p-2`}
                          >
                            Backend
                          </button>
                        </WrapperSections>
                      }
                      {tabs == 0 ?
                        <CodeAreaItem
                          key="frontend"
                          setIsOpenCodeArea={setIsOpenCodeArea}
                          project={{
                            images,
                            title,
                            date,
                            description,
                            technologies, _id, link,
                            previewImage,
                            github,
                            githubRepo: frontEndGithubRepo,
                            projectType,
                            frontEndGithubRepo
                          }} /> : tabs == 1 ?
                          <CodeAreaItem
                            key="backend"
                            setIsOpenCodeArea={setIsOpenCodeArea}
                            project={{
                              images,
                              title,
                              date,
                              description,
                              technologies, _id, link,
                              previewImage,
                              github,
                              githubRepo: backEndGithubRepo,
                              backEndGithubRepo
                            }} />
                          : <CodeAreaItem
                            key="default"
                            setIsOpenCodeArea={setIsOpenCodeArea}
                            project={{
                              images,
                              title,
                              date,
                              description,
                              technologies, _id, link,
                              previewImage,
                              github,
                              githubRepo
                            }} />
                      }
                    </WrapperResources>
                  </>
                  : ""}

              </AnimatePresence>
              <AnimatePresence>

                {isOpenScreensShot ? <ScreenShotsContainer images={images} toggleShow={setIsOpenScreensShot} /> : ""}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </WrapperSections>
    </>
  );
};

export default ProjectItem;
