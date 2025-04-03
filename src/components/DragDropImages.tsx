// "use client"
// import img from "@/imgs/1976052_gallery_image_images_photo_picture_icon.png"
// import { ChangeEvent, createContext, HTMLAttributes, useRef, useState } from "react"
// import Loader from "./Loader"
// import download from "@/imgs/2849815_download_multimedia_file_document_icon.png"
// function DragDropImages({ props }: { props: HTMLAttributes<any> }) {
//     const [files, setFiles] = useState<FileList | []>([])
//     const [isLoading, setIsLoading] = useState<boolean | null>(null)
//     const handelDropFiles = async (e: DragEvent | ChangeEvent) => {
//         setFiles(e.target?.files);
//         setIsLoading(true);
//         await new Promise((resolve) => setTimeout(resolve, 1500));
//         setIsLoading(false)
//     }
//     return (
//         <>
//             <div className="min-h-[200px] relative  text-5xl flex items-center justify-center  border-dashed border-[#000] border-[2px]">
//                 drag and drop images here
//                 <input  multiple={true} type="file" {...props} onDrop={handelDropFiles} onChange={handelDropFiles} className="absolute w-full h-full opacity-0  left-0 top-0" />
//             </div>
//             {isLoading ? <Loader isMargin={true} /> : isLoading === false &&
//                 Object.values(files).map(e => <div className="mt-[15px] flex gap-1">
//                     <img src={img.src} className="size-[25px] pointer-events-none select-none " alt="" />
//                     <div className="flex flex-col ">
//                         <h3 className="md:text-2xl text-lg">{e.name}</h3>
//                         <p className="flex items-center gap-1">
//                             <img src={download.src} className="size-[15px]" alt="" />
//                             {(e.size / 1048576).toFixed(2)} mb</p>
//                     </div>
//                 </div>)
//             }
//         </>
//     )
// }

// export default DragDropImages