import Image from "next/image"
import HeadingTitle from "./HeadingTitle"
import WrapperSections from "./WrapperSections"
import myImg from "@/imgs/4c3d75aa967003e4bee5b269ee3c6332.png"
import { FaWhatsapp } from "react-icons/fa"
import Tag from "./Tag"; import { FaLinkedin } from "react-icons/fa6"; import { IoIosMail } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { IconType } from "react-icons"
import IconsButton from "./Buttons/IconsButton"
import { ReactElement } from "react"
interface MySocailMedia<T = string> {
    [key: string]: { link: T, Icon: ReactElement<IconType> }
    linkedIn: { link: T, Icon: ReactElement<IconType> };
    whatsapp: { link: T, Icon: ReactElement<IconType> };
    email: { link: T, Icon: ReactElement<IconType> };
    github: { link: T, Icon: ReactElement<IconType> };
}
const AboutMeContent = () => {
    const techStack = [
        "Next.js",
        "Tailwind CSS",
        "React Query",
        "Redux Toolkit",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT Authentication"
    ];
    const socialMedia: MySocailMedia = { linkedIn: { link: "https://www.linkedin.com/in/yosef-arafa-452808283", Icon: <FaLinkedin /> }, email: { link: "jooyosef198@gmail.com", Icon: <IoIosMail /> }, whatsapp: { link: "https://wa.me/201113797735", Icon: <FaWhatsapp /> }, github: { Icon: <FiGithub />, link: "https://github.com/yosefarafa103?tab=repositories" } };
    return (
        <section className="py-4" id="about-me">
            <WrapperSections isFull>
                <HeadingTitle classname="mt-3" title="about_me" />
            </WrapperSections>
            <div className="flex gap-[2rem] max-md:flex-col ">
                <div className="md:min-h-[40vh]">
                    <Image priority width={300} height={500} className="rounded-[50%] object-cover max-md:mx-auto p-2 !size-[200px] " src={myImg.src} alt="YOSEF ARAFA"
                    />
                </div>
                <section className="text-[4vw] max-sm:text-[25px] w-full">
                    <WrapperSections isFull >
                        <i>My Name Is Yosef Arafa</i>
                    </WrapperSections>
                    {["MERN Stack Developer Next js Node Mongodb", "Hi, My Name Is Yossef", "I'm a front-end developer", "with 3 years experience in Website Development", "I can provide a service and attractive front-end user interfaces to you And Build your digital experience by", "creating a front-end website for your project or business exhibition where you put the works related to your field", " Allowing you to grow your professional personality through multiple means of sharing your projects it.", "I have worked on some successful projects known for their high quality and Detail"].map((letter: string, i: number) => (
                        <div className={`text-3xl mb-2 ${i === 4 && "mt-10"}`} key={letter}> {letter} </div>
                    ))}
                    <WrapperSections isFull>
                        <i>
                            My Skills :
                        </i>
                    </WrapperSections>
                    <section className="flex items-center gap-2 flex-wrap">
                        {techStack.map(tech => (
                            <Tag tag={tech} />
                        ))}
                    </section>
                    <WrapperSections isFull>
                        <i>
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