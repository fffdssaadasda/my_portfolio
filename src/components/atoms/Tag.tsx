import { cn } from "@/lib/utils"
import { IconType } from "react-icons"
interface Props { tag: string, icon?: any, color?: string, textColor?: string }

const Tag = ({ tag, color, icon, textColor }: Props) => {
    return (
        <div style={{ color: textColor ? textColor : color, borderColor: color }} className={cn("px-[10px] flex items-center gap-2 py-[2px] bg-accent hover:text-primary hover:bg-primary-foreground max-sm:text-sm transition-all dark:border-[1px] dark:border-white duration-[300ms] cursor-pointer rounded-md border-2 border-black text-center text-xl w-fit",)} >
            {icon}
            {tag}
        </div>
    )
}

export default Tag