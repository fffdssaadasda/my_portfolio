import { HTMLAttributes } from "react"
import WrapperSections from "./WrapperSections"

const Input = ({ type = "text", name, placeholder, label, def, props }: { def?: string | null, type: string, name: string, placeholder: string, label: string, props: HTMLAttributes<HTMLInputElement> }) => {
    return (
        <>
            <h3 className="text-[22px] mt-[20px] font-bold">{label}</h3>
            <WrapperSections isFull>
                <input defaultValue={def!} {...props}  required type={`${type}`} placeholder={placeholder} className="p-[10px] outline-none absolute top-0 left-0 w-full h-full" />
            </WrapperSections>
        </>
    )
}

export default Input