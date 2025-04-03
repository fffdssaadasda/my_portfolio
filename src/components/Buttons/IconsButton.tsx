"use client"
import { MouseEventHandler, ReactElement, ReactNode } from "react"
import { IconType } from "react-icons";

interface icon {
    icon: ReactElement<IconType>;
    link?: string,
}
const IconsButton = ({ icon, link }: icon) => {
    console.log(icon);

    const gotToLink = (): void => {
        if (link) location.assign(link!)
    }
    return (
        <button onClick={gotToLink} className={`size-[50px] border-[3px] border-solid border-black rounded-md flex items-center justify-center text-2xl transition-all duration-[300ms]  ${!link ? "cursor-not-allowed opacity-[0.2]" : "hover:bg-black hover:text-white"}`}>
            {icon}
        </button>
    )
}

export default IconsButton