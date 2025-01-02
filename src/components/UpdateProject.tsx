// "use client"
import React from 'react'
import Input from './Input'
import Technologies from './Technologies'
import ButtonSubmition from './Buttons/ButtonSubmition'
import { Project } from '@/types/projectType'
import axios from 'axios'
import { updateProject } from '@/actions/updateProject'
const UpdateProject = async ({ id, data }: { id: string, data?: { title: string, technologies: string[] } }) => {
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("title", data?.title);
    //     data?.technologies.forEach(e => formData.append("technologies", e))
    //     const updated = await axios.patch(`http://localhost:5000/projects/${project._id}`, formData);
    //     console.log(formData);
    //     console.log(updated);

    // }
    const update = updateProject.bind(null, project._id)
    return (
        <form action={update} method="patch" className="flex flex-col gap-3">
            <Input label="Project Title" name="title" type="text" placeholder="Project Title" def={project?.title} />
            <Technologies def={project?.technologies?.join("-")} />
            <ButtonSubmition text="update" />
        </form>
    )
}

export default UpdateProject