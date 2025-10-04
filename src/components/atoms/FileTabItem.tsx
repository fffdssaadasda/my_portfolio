"use client"
import useFileContentStore from "@/stores/fileContentStore"
import { GitHubFile } from "@/types/general"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import { ChevronRight, File, Folder } from "lucide-react"
import Loader from "./Loader"
import { memo, useCallback, useState } from "react"
type FileItem = Partial<GitHubFile> & { relativePath: string } & { repoName: string }
const FileTabItem = ({ type, name, relativePath, content, repoName }: FileItem) => {
    // const setFileContent = useFileContentStore((s) => s.setFileContent)
    const { fileName, setFileContent, setFileName } = useFileContentStore((s) => s)
    const handelFetchFiles = useCallback(async () => {
        try {
            const response: AxiosResponse<GitHubFile[]> = await axios.get(`${relativePath}/${name}`, {
                headers: {
                    Authorization: `Bearer ${process.env.GHToken}`
                }
            })
            return response.data
        } catch (error) {
            console.log(error);
        }
    }, [name, relativePath])
    // console.log(relativePath);

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    const { data, isLoading } = useQuery({
        queryKey: [`project_${relativePath + " " + name}_files`],
        queryFn: handelFetchFiles
    });
    return (
        <>
            <div onClick={async () => {
                setIsCollapsed((prev) => !prev);
                setFileName(name!)
                try {
                    // 
                    const response: AxiosResponse<GitHubFile> = await axios.get(`https://api.github.com/repos/yosefarafa103/${repoName}/contents/${relativePath}`)
                    setFileContent(atob(response.data.content));
                } catch (error) {
                    console.log(error);
                }
            }
            } className='flex items-center gap-1 p-1.5 cursor-pointer hover:bg-accent rounded-md justify-between ' >
                <div className="flex items-center gap-1 my-1">
                    {type === "file" ?
                        <File />
                        :
                        <Folder />
                    }
                    {name}
                </div>
                {
                    type === "dir" &&
                    <ChevronRight className={`${isCollapsed ? "rotate-90" : ""}`} />
                }
                {isLoading && <Loader height='20px' width='20px' />}
            </div >
            <section className="pl-5">

                {!isLoading && isCollapsed && data?.map((e) => (
                    <FileTabItem repoName={repoName} name={e.name} type={e.type} relativePath={`https://api.github.com/repos/yosefarafa103/${repoName}/contents/${name}`} />
                ))}
            </section>
        </>
    )
}

export default memo(FileTabItem)