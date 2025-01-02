"use client"
import { useFormStatus } from "react-dom"
import Loader from "../Loader";
const ButtonSubmition = ({ text, isSubmiting }: { text: string, isSubmiting?: boolean }) => {
    const { pending, data } = useFormStatus();
    return (
        <button disabled={isSubmiting || pending} type="submit" className="flex items-center gap-2 justify-center disabled:opacity-[0.5]  mt-3.5 w-full bg-green-600 p-[10px] rounded-[10px] transition-all duration-[200ms] active:scale-[1.01] hover:shadow-lg text-white text-[22px]">
            {pending && <Loader color="#fff" height="30px" width="30px" />}
            {pending ? `${text}ing...` : `${text.toUpperCase()} Project`}</button>
    )
}

export default ButtonSubmition