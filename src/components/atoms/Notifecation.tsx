function Notifecation({ type, message }: { type: string; message: string }) {
    return (
        <div className={`${type === 'error' ? 'bg-red-400' : "bg-green-500"} mb-[15px] text-white text-center text-[22px] rounded-[8px] p-[5px]`}> {message || ''}</ div>
    )
}


export default Notifecation