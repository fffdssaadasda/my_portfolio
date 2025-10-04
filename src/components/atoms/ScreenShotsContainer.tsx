import { motion } from "framer-motion"
import WrapperSections from "./WrapperSections"
import { Dispatch, SetStateAction } from "react"
import Image, { StaticImageData } from "next/image";
import WrapperResources from "./WrapperResources";
import { Img } from "@/types/projectType";

interface Props {
    toggleShow: Dispatch<SetStateAction<boolean>>;
    images?: Img[]
}
const ScreenShotsContainer = ({ toggleShow, images }: Props) => {
    return (
        <WrapperResources>

            <WrapperSections isPadding={false} isFull>
                <section className="border-b-[3px] overflow-hidden justify-between flex flex-col gap-3 border-b-[#000] border-b-solid py-[15px]">
                    <div className="gap-[2vw] flex justify-between md:flex-col max-md:items-center ">
                        <div className="flex gap-3 justify-between items-center w-full pr-2">
                            <div className="font-semibold text-2xl sm:text-4xl leading-[1] px-[20px] flex items-center justify-between w-full cursor-pointer">
                                ScreenShots Container
                            </div>
                            <span onClick={() => toggleShow(prev => !prev)} className="font-semibold text-2xl sm:text-4xl cursor-pointer">Close</span>
                        </div>
                    </div>
                </section>
                <section className="h-[calc(100svh-200px)] bg-[#fff] ">
                    <section className="flex gap-2 p-3 max-sm:flex-col h-full overflow-y-scroll sm:grid sm:grid-cols-4">
                        {images?.map((e) => (
                            <div className="max-sm:mt-4">
                                <h3 className="font-bold text-2xl mb-2"> {e.imgDescription} </h3>
                                <img src={e.Image?.src!} className="w-full p-2 border-solid border-2 border-black rounded-md sm:min-h-[200px] max-sm:w-full object-cover" alt={`Img_$}`} />
                            </div>
                        ))}
                    </section>
                </section>
            </WrapperSections>
        </WrapperResources>

    )
}

export default ScreenShotsContainer