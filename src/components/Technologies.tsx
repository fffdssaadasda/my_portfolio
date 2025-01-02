"use client";
import { useEffect, useRef, useState } from "react";
import WrapperSections from "./WrapperSections";
import { FaDeleteLeft } from "react-icons/fa6";

const Technologies = ({ def }: { def?: string }) => {
    const [technologies, setTechnologies] = useState<string[] | []>([])
    const ref = useRef(null);
    const handelBlur = async (e: EventTarget) => {
        if (e.target.value.length > 0) {
            setTechnologies([...technologies, e.target.value]);
        }
        e.target.value = ''
    }
    useEffect(() => {
    }, [technologies])
    return (
        <>
            <h3 className="text-[22px] mt-[20px] font-bold">{"technologies"}</h3>
            <WrapperSections isFull>
                <h3 ref={ref} onClick={() => {
                    technologies.pop()
                    setTechnologies(technologies)
                    console.log(technologies);
                }} className="absolute px-[15px] text-lg  w-full h-full left-0 flex items-center justify-end top-0 z-[999]">
                    <FaDeleteLeft className="w-[30px] h-[20px] cursor-pointer bg-[#] " />
                </h3>
                <input defaultValue={def} onBlur={handelBlur} type={`${"text"}`} placeholder={"technologies"} className="p-[10px] outline-none z-[9999] absolute top-0 left-0 w-[70%] h-full" />
            </WrapperSections>
            <section className="mt-[15px] flex items-center gap-1">
                {technologies?.map(tech => (
                    <div key={tech + Math.random()} className="px-[15px] py-[2px] bg-white hover:border-[#444] hover:bg-[#444] transition-all duration-[300ms] hover:text-white cursor-pointer rounded-md border-2 border-[#808080] text-center" >
                        {tech}
                    </div>
                ))}
                {!technologies.length && <h3 className="font-semibold text-[22px] mx-auto text-center">No Technologies Added Yet!</h3>}
            </section>
            <input name="technologies" type="text" className="opacity-0 select-none pointer-events-none" defaultValue={technologies} />
        </>)
}

export default Technologies
/* 
 <h3 className="text-[22px] mt-[20px] font-bold">{label}</h3>
<WrapperSections isFull>
    <input name={name} required type={`${type}`} placeholder={placeholder} className="p-[10px] outline-none absolute top-0 left-0 w-full h-full" />
</WrapperSections>

*/