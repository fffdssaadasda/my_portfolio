"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import { pathNametype } from "@/types/contextsTypes"
import { usePathname } from "next/navigation";
export const PathNameProv = createContext<pathNametype<string>>();
const PathNameContext = ({ children }: { children: ReactNode }) => {
    const [path, setPath] = useState(usePathname());

    return (
        <PathNameProv.Provider value={{
            pathname: usePathname(),
            setPath
        }}>

            {children}
        </PathNameProv.Provider>
    )
}

export default PathNameContext