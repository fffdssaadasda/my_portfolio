"use client"
import HeadingTitle from "@/components/atoms/HeadingTitle";
import WrapperSections from "@/components/atoms/WrapperSections";
import Image from "next/image";
import ProjectItem from "@/components/portfolio/ProjectItem";
import { Project } from "@/types/projectType";
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

const PortfolioPage = ({ projects }: { projects: Project[] | undefined }) => {
    const [idx, setidx] = useState(0);
    useQuery({
        queryKey: [`GH_TOKEN`],
        queryFn: async () => {
            if (!localStorage.getItem("token")) {
                let t = (await axios.get("/api")).data.githubToken;
                localStorage.setItem("token", t);
                return t;
            }
            return localStorage.getItem("token")
        }
    });

    return (
        <>
            <WrapperSections isFull>
                <HeadingTitle title="PORTFOLIO" />
            </WrapperSections>
            <section id="portfolio" className="grid lg:grid-cols-3 max-sm:grid-cols-1 md:grid-cols-2 gap-3 mt-[15px] items-center">
                {projects?.map((e: Project) => (
                    <ProjectItem
                        _id={e._id}
                        date={e.date}
                        key={e._id || Math.random() * 3}
                        description="No Description!"
                        title={e.title}
                        images={e.images}
                        technologies={e.technologies}
                        link={e.link}
                        github={e.github}
                        previewImage={e.previewImage}
                        backEndGithubRepo={e.backEndGithubRepo}
                        projectType={e.projectType}
                        frontEndGithubRepo={e.frontEndGithubRepo}
                    />
                ))
                }
            </section>

        </>
    );
};

export default PortfolioPage;
