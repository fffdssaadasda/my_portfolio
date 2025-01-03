"use client"
import HeadingTitle from "@/components/HeadingTitle";
import WrapperSections from "@/components/WrapperSections";
import Image from "next/image";
import img from "../../imgs/peter-thomas-ExzaIWpdulo-unsplash.jpg";
import img2 from "../../imgs/we-care-wild-_J95Ipg0dAI-unsplash.jpg";
import img3 from "../../imgs/zhen-yao-W_OWCTyLGHM-unsplash.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ProjectItem from "@/components/ProjectItem";
import PageTransition from "@/components/PageTransition";
import { useFetch } from "@/hooks/useFetch";
import { Project } from "@/types/projectType";
import { getData } from "../_services/crudApi";
import { api, mainUrl } from "@/utils/vas";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "@/components/Loader";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
const page = () => {
  const projectType = useSearchParams();
  const router = useRouter()
  const pathname = usePathname();
  console.log(projectType.get("type"));
  const cats = ["All", "Front end", "Back end"]
  const [idx, setidx] = useState(0);

  useEffect(() => {
    router.push(`${pathname}?type=${cats[idx].split(" ").join("_").toLowerCase() || "all"}`)
  }, [])
  let { data, isLoading, } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getData(`${api}/projects`),
  });

  if (projectType.get("type") !== "all") {
    data = data?.filter(e => e.projectType === "all" ? e : e.projectType === projectType.get("type"))
  }
  // console.log(data?.filter(e => e.projectType === "all" ? e : e.projectType === projectType.get("type")));
  console.log(data);

  // const data: Project[] = await
  return (
    <>
      <Suspense fallback={<Loader color="#f00" height="30px" width="30px" />}>

        {/* <PageTransition> */}
        <WrapperSections isFull>
          <HeadingTitle title="PORTFOLIO" />
        </WrapperSections>
        <section className="flex items-center my-[25px]  gap-3">
          {cats.map((e, i) => (
            <div onClick={() => {
              setidx(i)
              // projectType.
              router.push(`${pathname}?type=${e.split(" ").join("_").toLowerCase()}`)
              // .set("type", type.type)
            }} className={`p-[10px] px-[25px] transition-all duration-[200ms] font-semibold text-[22px] cursor-pointer hover:bg-[#eee] ${idx === i ? "bg-[#000] text-white hover:!bg-[#000]" : ""}`}>{e}</div>
          ))}
        </section>
        <section className="grid lg:grid-cols-3 max-sm:grid-cols-1 md:grid-cols-2 gap-3 mt-[15px] items-center">
          {isLoading && <Loader color="#f00" height="30px" width="30px" />}
          {data?.map((e: Project) => (
            <ProjectItem
              _id={e._id}
              date={e.date}
              key={e._id}
              description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro"
              title={e.title}
              images={e.images}
              technologies={e.technologies}
              link={e.link}
            />
          ))}
        </section>
        {/* </PageTransition> */}
      </Suspense>
    </>
  );
};

export default page;
