import { Button } from "../ui/button"

function DownloadCv({ file }: { file: string }) {
    return (
        <Button asChild variant="purple">
            <a href={file} download className="">Download My Cv</a>
        </Button>
    )
}

export default DownloadCv