
const ErrorPage = ({ message = "errr", statusCode }: { statusCode?: number, message: string }) => {
    return (
        <div className="w-full min-h-[50vh] bg-red-200 ">
            <h1 className="text-[100px] tracking-[2px]  font-bold text-red-500 text-center ">{statusCode || "500"}</h1>
            <div className="text-center text-3xl text-red-400">
                {message}
            </div>
        </div>
    )
}

export default ErrorPage