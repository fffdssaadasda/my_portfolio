const Loader = ({ height = "50px", width = "50px", isMargin, color = "#000" }: { color?: string, isMargin?: boolean, width?: string, height?: string }) => {
    return (
        <div style={{ height, width, borderRightColor: color }} className={`loader  animate-spin ${isMargin ? "mx-auto mt-[15px]" : ""}`} ></div>
    )
}

export default Loader