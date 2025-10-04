import Image from "next/image"
import HeadingTitle from "./atoms/HeadingTitle"
import WrapperSections from "./atoms/WrapperSections"
import { SiNestjs } from "react-icons/si";
import myImg from "@/imgs/4c3d75aa967003e4bee5b269ee3c6332.png"
import { FaWhatsapp } from "react-icons/fa"
import Tag from "./atoms/Tag"; import { FaLinkedin } from "react-icons/fa6"; import { IoIosMail } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { IconType } from "react-icons"
import IconsButton from "./Buttons/IconsButton"
import { ReactElement } from "react";
import { SiCodewars } from "react-icons/si";
import techStack from "@/constants/skills";
interface MySocailMedia<T = string> {
    [key: string]: { link: T, Icon: ReactElement<IconType> }
    linkedIn: { link: T, Icon: ReactElement<IconType> };
    whatsapp: { link: T, Icon: ReactElement<IconType> };
    email: { link: T, Icon: ReactElement<IconType> };
    github: { link: T, Icon: ReactElement<IconType> };
    codewars: { link: T, Icon: ReactElement<IconType> };
}
const AboutMeContent = () => {
    const socialMedia: MySocailMedia = {
        linkedIn: { link: "https://www.linkedin.com/in/yosef-arafa-452808283", Icon: <FaLinkedin /> }, email: { link: "jooyosef198@gmail.com", Icon: <IoIosMail /> }, whatsapp: { link: "https://wa.me/201113797735", Icon: <FaWhatsapp /> }, github: { Icon: <FiGithub />, link: "https://github.com/yosefarafa103?tab=repositories" }, codewars: {
            link: "https://www.codewars.com/users/yosef131",
            Icon: <SiCodewars />
        }
    };
    return (
        <section className="py-4" id="about-me">
            <WrapperSections isFull>
                <HeadingTitle classname="mt-3" title="about_me" />
            </WrapperSections>
            <div className="flex gap-[2rem] max-md:flex-col ">
                <section className="text-[4vw] max-sm:text-[25px] w-full">
                    <h3 className="text-[60px] " >
                        <i className="max-sm:text-3xl font-semibold">My Name Is Yosef Arafa</i>
                    </h3>
                    <section className="px-4">
                        {[
                            `I’m Yossef, a creative Full Stack Developer passionate about crafting seamless digital experiences.`,
                            `With 3+ years of experience in the MERN stack (Next.js, Node.js, MongoDB), I blend design and technology to build elegant, high-performing websites that help brands and individuals shine online.`
                        ].map((letter: string, i: number) => (
                            <div className={`text-3xl mb-2 ${i === 4 && "mt-10"}`} key={letter}> {letter} </div>
                        ))}
                    </section>
                    <WrapperSections isFull>
                        <i className="max-sm:text-3xl font-semibold">
                            My Skills :
                        </i>
                    </WrapperSections>
                    <section className="flex items-center gap-2 flex-wrap max-sm:justify-center">
                        {techStack.map((tech, i) => (
                            <Tag icon={<tech.icon />} textColor={[0, 13].includes(i) ? "white" : ""} color={tech.color} tag={tech.title} />
                        ))}
                    </section>
                    <WrapperSections isFull>
                        <i className="max-sm:text-3xl font-semibold">
                            Contact Me
                        </i>
                    </WrapperSections>
                    <section className="flex items-center gap-2 flex-wrap">
                        {Object.keys(socialMedia).map((k: string) => (
                            <IconsButton link={socialMedia[k].link} icon={socialMedia[k].Icon} />
                        ))}
                    </section>
                </section>
            </div>
        </section>
    )
}

export default AboutMeContent
