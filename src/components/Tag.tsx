const Tag = ({ tag }: { tag: string }) => {
    return (
        <div className="px-[15px] mb-2 py-[2px] bg-accent hover:border-[#444] hover:bg-[#444] transition-all duration-[300ms] hover:text-white cursor-pointer rounded-md border-2 dark:border-accent border-black text-center text-xl w-fit" >
            {tag}
        </div>
    )
}

export default Tag