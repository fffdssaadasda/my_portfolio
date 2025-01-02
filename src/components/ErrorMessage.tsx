const ErrorMessage = ({ msg }: { msg: string }) => {
    return (
        <div className="text-red-500 font-bold">{msg}</div>
    )
}

export default ErrorMessage