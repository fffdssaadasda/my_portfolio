
function DownloadCv({ file }: { file: string }) {
    return (
        <a href={file} download className="text-[16px] px-[15px] rounded-lg transition-all duration-[300ms] hover:bg-zinc-900 flex gap-2 items-center bg-black py-[8px] w-fit text-white">Download My Cv</a>
    )
}

export default DownloadCv