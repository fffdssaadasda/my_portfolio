import styles from "@/components/home/home.module.css"
import HeadingTitle from "../atoms/HeadingTitle"
import BackgroundMeteors from "../ui/backgroundmeteors"

const WhoMe = () => {
    return (
        <>
            <BackgroundMeteors>
                <section className="flex flex-col items-center">
                    <div className="sm:py-[40px]  px-[15px]  rounded-[33px] w-full">
                        <h1 className="w-full font-[900] leading-[1] text-[22vw] text-center ">
                            <HeadingTitle classname="justify-center" isStar={false} title="ًHi There!" />
                            <HeadingTitle classname="justify-center" isStar={false} title="My Name Is Yosef" />
                            <span className="p-[10px] skew-x-[-10deg] inline-flex border-indigo-500 border-2">
                                <HeadingTitle classname="justify-center text-primary" isStar={false} title="Mid Senior" />
                            </span>
                            <HeadingTitle classname="justify-center" isStar={false} title="Software Engineer" />
                        </h1>
                        <div className="flex flex-col  max-sm:justify-center gap-2 mt-[15px] pl-4">
                            <h2 className="font-bold max-sm:text-center  text-[30px] sm:text-[5vw] leading-[1]">
                                What makes my work unique
                                <br /> is the utmost precision and <br /> efficiency.</h2>
                        </div>
                        <section className="flex sm:justify-end max-sm:justify-center mt-[20px]">
                            <div className="flex flex-col gap-2 mt-[15px] pr-4">
                                <h2 className="font-bold max-sm:text-center  text-[30px] sm:text-[5vw] leading-[1]">With Over 3 years <br /> of  <span className="p-[10px] bg-white text-black skew-x-[-10deg] inline-flex ">Full Stack</span>   development <br /> experiance.</h2>
                            </div>
                        </section>
                    </div>
                </section>
            </BackgroundMeteors>
        </>
    )
}

export default WhoMe