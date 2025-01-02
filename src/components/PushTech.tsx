"use client"
import { useState } from "react"
import WrapperSections from "./WrapperSections"
import axios from "axios"
import { redirect } from "next/dist/server/api-utils"

const PushTech = ({ }: {}) => {
    const [technologies, setTechnologies] = useState<string[] | []>([])
    const handelBlur: any = async (e: EventTarget) => {
        if (e.target.value.length > 0) {
            setTechnologies([...technologies, e.target.value]);
        }
        new Promise(() => "changed!")
        e.target.value = ''
    }
    // const handelSubmit = async (e: SubmitEvent) => {
    //     e.preventDefault()
    //     if (technologies.length > 0 && title.length > 0) {
    //         await axios.post("http://localhost:5000/projects", {
    //             title,
    //             technologies,
    //         });
    //         redirect("/portfolio");
    //     }
    // }
    return (
        <>

            <WrapperSections isFull>
                <input onBlur={handelBlur} type={`${"text"}`} placeholder={"technologies"} className="p-[10px] outline-none absolute top-0 left-0 w-full h-full" {...props} />
            </WrapperSections>
            <section className="mt-[15px] flex items-center gap-1">
                {technologies.length ? technologies?.map(tech => (
                    <div className="px-[15px] py-[2px] bg-white hover:border-[#444] hover:bg-[#444] transition-all duration-[300ms] hover:text-white cursor-pointer rounded-md border-2 border-[#808080] text-center" >
                        {tech}
                    </div>
                )) : <h3 className="font-semibold text-[22px] mx-auto text-center">No Technologies Added Yet!</h3>}
            </section>
            <input type="text" name={"technologies"} className="opacity-0 select-none pointer-events-none" defaultValue={technologies} />
        </>
    )
}

export default PushTech