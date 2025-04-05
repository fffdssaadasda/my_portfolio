"use client"
import HeadingTitle from "@/components/HeadingTitle";
import WrapperSections from "@/components/WrapperSections";
import ProjectItem from "@/components/ProjectItem";
import { Project } from "@/types/projectType";
import { useState } from "react";

const PortfolioPage = ({ projects }: { projects: Project[] | undefined }) => {

    const [idx, setidx] = useState(0);
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
                    />
                ))
                }
            </section>

        </>
    );
};

export default PortfolioPage;
