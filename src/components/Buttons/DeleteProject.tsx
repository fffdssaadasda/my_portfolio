"use client"
import { useFormStatus } from "react-dom"
import { deleteProject } from "@/actions/deleteProject"
import Loader from "../Loader"
import { useMutation, useQueryClient } from "@tanstack/react-query"
const DeleteProject = ({ id }: { id: string }) => {
    const queryClient = useQueryClient()
    const { isPending, mutate, } = useMutation({
        mutationFn: deleteProject,
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ["projects"],
        }),
        
    })
    return (
        <button disabled={isPending} onClick={() => mutate(id)} type="submit" className={`p-[10px] text-xl disabled:opacity-[0.5] justify-center gap-3 flex w-full  border-solid border-red-300  rounded-[6px] border-[1px] text-center cursor-pointer sm:hover:text-white hover:bg-red-500 mt-[15px] text-red-500 transition-all duration-[200ms] ${isPending ? "cursor-not-allowed" : "cursor-pointer"}`}>
            {isPending &&
                <Loader color="#f00" height="30px" width="30px" />
            }
            Delete This Project
        </button>
    )
}

export default DeleteProject