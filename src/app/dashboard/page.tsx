"use client"
import { addNewProject } from "@/actions/pushNewProject"
import ButtonSubmition from "@/components/Buttons/ButtonSubmition"
import DragDropImages from "@/components/DragDropImages"
import Input from "@/components/Input"
import PushTech from "@/components/PushTech"
import WrapperSections from "@/components/WrapperSections"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ChangeEvent, useState } from "react"
import { useForm } from "react-hook-form"
import { addProject } from "../_services/crudApi"
import ErrorMessage from "@/components/ErrorMessage"

const page = () => {
    const queryClient = useQueryClient()
    const { handleSubmit, register, reset, getValues, formState: { errors } } = useForm();
    const [technologies, setTechnologies] = useState<string[] | []>([])
    const { isSuccess, mutate, isPending } = useMutation({
        mutationFn: addProject,
        onSuccess: async () => await queryClient.invalidateQueries({ queryKey: ["projects"] })
    })
    const handelBlur: any = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            setTechnologies([...technologies, e.target?.value]);
        }
        new Promise(() => "changed!")
        e.target.value = ''
    };
    return (
        <section className="md:w-[50%] mx-auto">
            <WrapperSections isFull>
                <h3 className="text-[25px] text-center font-semibold mb-[15px]">Add Project</h3>
                <form onSubmit={handleSubmit((data) => {
                    data.title = getValues().title
                    data.technologies = data.technologies?.split(',');
                    console.log(data);
                    mutate(getValues())
                })} encType="multipart/form-data">
                    <WrapperSections isFull >
                    <input type={`${"text"}`} placeholder={"enter project title"} {...register("title", {
                            required: {
                                value: true,
                                message: "Title Is Required To Add New Project."
                            }
                        })} className="p-[10px] outline-none absolute top-0 left-0  w-full h-full" />
                    {/* <Input  {...register("name")} label="Project Name" type="text" placeholder="Please Enter Project Name" /> */}
                    </WrapperSections>
                    {errors.title &&
                        <ErrorMessage msg={(errors.title.message) as string} />
                    }
                    <WrapperSections isFull>
                        <input onBlur={handelBlur} type={`${"text"}`} placeholder={"technologies"} className="p-[10px] outline-none absolute top-0 left-0 w-full h-full" />
                    </WrapperSections>
                    <section className="mt-[15px] flex items-center gap-1">
                        {technologies.length ? technologies?.map(tech => (
                            <div className="px-[15px] py-[2px] bg-white hover:border-[#444] hover:bg-[#444] transition-all duration-[300ms] hover:text-white cursor-pointer rounded-md border-2 border-[#808080] text-center" >
                                {tech}
                            </div>
                        )) : <h3 className="font-semibold text-[22px] mx-auto text-center">No Technologies Added Yet!</h3>}
                    </section>
                    <input type="text" {...register("technologies", {
                        required: true
                    })} value={technologies} className="opacity-0 select-none pointer-events-none" />
                    <DragDropImages props={{ ...register("images") }} />
                    <ButtonSubmition isSubmiting={isPending} text="Add" />
                </form>
            </WrapperSections>
        </section >
    )
}
export default page