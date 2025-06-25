"use client"
import useFileContentStore from "@/stores/fileContentStore"
import React, { Dispatch, memo, SetStateAction, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Project } from '@/types/projectType'
import axios, { AxiosResponse } from 'axios'
import { GitHubFile } from '@/types/general'
import { ChevronRight, File, Folder, X } from 'lucide-react'
import Loader from './Loader'
import FileTabItem from './FileTabItem'
import Highlight from "react-highlight"
import 'highlight.js/styles/atom-one-dark.css';

const CodeAreaItem = ({ project, setIsOpenCodeArea }: { project: Project, setIsOpenCodeArea: Dispatch<SetStateAction<boolean>> }) => {
    const { fileName, content } = useFileContentStore((s) => s)
    const [t, setT] = useState(() => localStorage.getItem("token") || "")

    const handelFetchInitalFiles = async () => {
        try {
            const response: AxiosResponse<GitHubFile[]> = await axios.get(`https://api.github.com/repos/yosefarafa103/${project.githubRepo}/contents`, {
                headers: {
                    Authorization: `Bearer ${t}`
                }
            })
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
    const { data, isLoading } = useQuery({
        queryKey: [`project_${project.title}_files`],
        queryFn: handelFetchInitalFiles
    });

    console.log(t);

    const [expandedFolders, setExpandedFolders] = useState<{ [path: string]: GitHubFile[] | null }>({})

    const fetchFolderContents = async (path: string) => {
        try {
            const response: AxiosResponse<GitHubFile[]> = await axios.get(
                `https://api.github.com/repos/yosefarafa103/${project.githubRepo}/contents/${path}`,
                {
                    headers: {
                        Authorization: `Bearer ${t}`
                    }
                }
            )
            return response.data
        } catch (error) {
            console.log(error)
            return []
        }
    }

    const handleFolderClick = async (path: string) => {
        if (expandedFolders[path]) {
            setExpandedFolders(prev => ({ ...prev, [path]: null })) // collapse
        } else {
            const contents = await fetchFolderContents(path)
            setExpandedFolders(prev => ({ ...prev, [path]: contents }))
        }
    }

    const renderFiles = (files: GitHubFile[], parentPath = '') => {
        return <ul className='my-2' >
            {
                files.map((e) => (
                    <>
                        <li key={e.path} className='relative before:absolute  before:w-[12px] before:h-[2px] before:bg-black before:-left-[20px] before:top-[21px]  '>
                            <span className='relative before:absolute flex before:w-[12px] before:h-[2px] before:bg-black before:-left-[20px] before:top-[21px] ' />
                            {e.type === 'dir' && (
                                <>
                                    <div
                                        onClick={() => {
                                            handleFolderClick(e.path)
                                            if (e.type === "file") {
                                                console.log(e.name);
                                            }
                                        }}
                                        className="flex items-center gap-1 p-1.5 cursor-pointer hover:bg-[#fff] rounded-md justify-between">
                                        <div className='flex items-center gap-1'>
                                            {e.type === "file" ?
                                                <File />
                                                :
                                                <Folder />
                                            }
                                            {e.name}
                                        </div>
                                        {e.type === "dir" &&
                                            <ChevronRight className={`${expandedFolders[e.path] ? "rotate-90" : ""}`} />
                                        }
                                    </div>
                                    {expandedFolders[e.path] && expandedFolders[e.path]?.length > 0 && (
                                        <div className="ml-4 relative after:absolute after:w-[2px] after:h-full after:bg-black after:-left-1.5 after:top-0">
                                            {renderFiles(expandedFolders[e.path]!, e.path)}
                                        </div>
                                    )}
                                </>
                            )}
                            {e.type !== 'dir' &&
                                <FileTabItem
                                    repoName={project.githubRepo!}
                                    name={e.name}
                                    type={e.type}
                                    content={e.download_url}
                                    relativePath={e.path} // Pass full file path here
                                />
                            }
                        </li >
                    </>
                ))
            }
        </ul >
    }

    return (
        <>
            <section className='flex gap-3 h-[85vh] bg-[#eee] rounded-md p-3'>
                <span onClick={() => setIsOpenCodeArea(false)} className={`absolute cursor-pointer size-[35px] right-0 top-[-18px] bg-white isolate z-10 flex items-center justify-center border-2 border-solid border-black rounded-lg`}>
                    <X />
                </span>
                {isLoading ? <Loader height='20px' width='20px' /> :
                    <>
                        <div className='min-w-[200px] resize-x overflow-y-scroll p-2 border-l-2 border-l-solid border-l-black'>
                            {data && renderFiles(data)}
                        </div>
                        <div className='flex-grow overflow-y-scroll'>
                            <small className="text-2xl my-2 p-2 block sticky top-0 left-0 z-[10000] bg-[#eee] ">{fileName}</small>
                            <Highlight className={`${fileName.split(".")[1]} relative rounded-lg`}>
                                {(content)}
                            </Highlight>
                            <button
                                className={`absolute ${project.projectType !== "FrontEnd" ? "top-[110px]" : "top-3"} right-10 z-[10001] bg-white rounded-lg w-[80px] p-2`}
                                onClick={() => navigator.clipboard.writeText(content)}
                            >
                                Copy
                            </button>
                        </div>
                    </>
                }
            </section>
        </>
    )
}

export default memo(CodeAreaItem)