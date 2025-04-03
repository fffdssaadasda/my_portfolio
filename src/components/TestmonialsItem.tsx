import { FaStar } from "react-icons/fa"; import { FaUserCircle } from "react-icons/fa";
import type { Testmonials, testmonials } from "@/constants/testmonials";
import WrapperSections from "./WrapperSections";
const TestmonialsItem = ({ comment, personName, rating }: Testmonials) => {
    return (
        <WrapperSections isFull isPadding={false}>
            {/* border-b-[3px] */}
            <section >
                <div className="flex flex-col gap-2">
                    <div className="flex items-centec flex-col">
                        <div className="flex items-center gap-2 border-b-[3px] border-b-black border-b-solid w-full pb-3 px-[15px] ">
                            <span className="flex items-center justify-center">
                                <FaUserCircle className="text-3xl" />
                            </span>
                            <h3 className="text-3xl"> {personName} </h3>
                        </div>
                        <h3 className="font-semibold my-4 text-xl max-sm:text-lg px-[15px]"> {comment} </h3>
                    </div>
                    <span className="text-yellow-500 text-2xl flex items-center gap-3 px-[15px]"> <FaStar /> {rating} </span>
                </div>
            </section>
        </WrapperSections>
    )
}

export default TestmonialsItem