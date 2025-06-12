import { motion } from "framer-motion"
import WrapperSections from "./WrapperSections"
import { Dispatch, SetStateAction } from "react"
import { StaticImageData } from "next/image";
import WrapperResources from "./WrapperResources";

interface Props {
    toggleShow: Dispatch<SetStateAction<boolean>>;
    images?: StaticImageData[]
}
const ScreenShotsContainer = ({ toggleShow, images }: Props) => {
    console.log(images);

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
                    <section className="flex gap-2 p-3 max-sm:flex-col h-full overflow-y-scroll">
                        {images?.map((e) => (
                            <img src={e.src} className="sm:size-[150px] p-2 border-solid border-2 border-black rounded-md w-[200px] max-sm:w-full object-cover" alt={`Img_${e.src}`} />
                        ))}
                    </section>
                </section>
            </WrapperSections>
        </WrapperResources>

    )
}

export default ScreenShotsContainer