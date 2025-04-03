import CommingSoon from "@/components/CommingSoon"
import HeadingTitle from "@/components/HeadingTitle"
import WrapperSections from "@/components/WrapperSections"
import { FcBinoculars } from "react-icons/fc";
import { FcGrid } from "react-icons/fc";
const page = () => {
    return (
        <>
            <WrapperSections isFull>
                <HeadingTitle title="Services" />
            </WrapperSections>
            {/* <CommingSoon /> */}

            <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 md:grid-cols-2 gap-3">
                {[1, 2, 3].map(el => (
                    <WrapperSections isFull>
                        <span className="size-[50px] border-[3px] bg-gray-200 border-black flex rounded-[50%] items-center justify-center ">
                            <FcBinoculars className="text-2xl" />
                        </span>
                        <div className="relative z-[9] after:absolute after:w-full after:h-[3px] after:bg-[#eee] after:bottom-1/2 after:z-[10] ">
                            <span className="size-[50px] relative z-[99] bg-white flex rounded-[50%] items-center justify-center">3</span>
                        </div>
                        <section className="mt-4">
                            <h3 className="text-4xl">Website Development</h3>
                            <p className="mt-4 leading-[1.2] ">Frontend development service using Next.js, delivering high performance, seamless user experience, and enhanced SEO. We create modern, interactive, and fast-loading web applications tailored to your needs.</p>
                        </section>
                    </WrapperSections>
                ))}

            </div>


        </>
    )
}

export default page