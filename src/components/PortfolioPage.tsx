"use client"
import HeadingTitle from "@/components/HeadingTitle";
import WrapperSections from "@/components/WrapperSections";
import Image from "next/image";
import ProjectItem from "@/components/ProjectItem";
import { Project } from "@/types/projectType";
import { getData } from "@/app/_services/crudApi";
import { api, mainUrl } from "@/utils/vas";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "@/components/Loader";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const PortfolioPage = () => {
    const projectType = useSearchParams();
    const router = useRouter()
    const pathname = usePathname();
    const cats = ["All", "Front end", "Back end"]
    const [idx, setidx] = useState(0);
    useEffect(() => {
        router.push(`${pathname}?type=${cats[idx].split(" ").join("_").toLowerCase() || "all"}`)
    }, [])
    let { data, isLoading, } = useQuery({
        queryKey: ["projects"],
        queryFn: () => getData(`${api}/projects`),
    });
    const projects = useQueryClient().getQueryData<Project[]>(["projects"]);
    if (projectType.get("type") !== "all") {
        data = data?.filter((e: Project) => e.projectType === "all" ? e : e.projectType === projectType.get("type"))
    }
    const front = (projects?.filter((e: Project) => e.projectType === "front_end"))
    const back = (projects?.filter((e: Project) => e.projectType === "back_end"))
    console.log(projects);
    // const data: Project[] = await
    return (
        <>
            {/* <PageTransition> */}
            <WrapperSections isFull>
                <HeadingTitle title="PORTFOLIO" />
            </WrapperSections>
            <section className="flex items-center my-[25px]  gap-3">
                {cats.map((e, i) => (
                    <div key={i + e} onClick={() => {
                        setidx(i)
                        // projectType.
                        router.push(`${pathname}?type=${e.split(" ").join("_").toLowerCase()}`)
                        // .set("type", type.type)
                    }} className={`p-[10px] px-[25px] flex items-center gap-1 transition-all duration-[200ms] font-semibold text-[22px] cursor-pointer hover:bg-[#eee] ${idx === i ? "bg-[#000] text-white hover:!bg-[#000]" : ""}`}>{e}
                        <span className={`size-[30px] flex text-black  items-center justify-center rounded-[50%] ${i === idx ? "bg-white" : "bg-black text-white"} `}>
                            {i === 0 ? projects?.length : i === 1 ? front?.length : i === 2 && back?.length}
                            {!front || !back ? <Loader color={i !== idx ? "#fff" : "#000"} height="20px" width="20px" /> : ""}
                        </span>
                    </div>
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
        </>
    );
};

export default PortfolioPage;
