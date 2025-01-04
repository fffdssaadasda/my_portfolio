"use client"
import { auth } from "@/app/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Loader from "./Loader";
export function AuthHeaderLinks() {
    const { data, status, } = useSession()
    return (
        <div className="flex items-center gap-2">
            {/* {data?.user?.email === "jooyosef173@gmail.com" &&
                <Link href={`/dashboard`}
                    // href={`/${link.split(" ").join("-")}`}
                    className="text-[18px] hover:shadow-xl shadow-[#444] flex transition-all duration-[200ms]  hover:-translate-y-[5px] border-[1px] border-[#000] border-b-[3px] border-solid px-[15px] py-[5px] rounded-[50px]"
                >
                    Dashboard
                </Link>
            } */}
            {status === "authenticated" ? <div className="text-[18px] border-[1px] border-[#000] border-b-[3px] border-solid p-[15px] rounded-[50px] py-[5px]">
                {data?.user?.name}</div> : status === "loading" ? <Loader width="30px" height="30px" /> : <Link
                    href={`/login`}
                    className="text-[20px] border-[1px]  bg-[#ffee32] border-[#000] border-b-[3px] border-solid p-[15px] rounded-[50px] py-[5px]"
                >
                    signin
                </Link>}
        </div>
    )
}

export default AuthHeaderLinks