import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
const FeaturesItem = ({ text, isActive = true }: { text: string, isActive?: Boolean }) => {
    return (
        <li className={`flex items-center gap-2 mb-[5px] ${!isActive && "italic line-through"}`}>{isActive ? <FaCheck className="text-[14px]" /> : <IoMdClose className="text-[14px]" />} {text}</li>
    )
}

export default FeaturesItem