"use client"
import { useRouter, usePathname } from "next/navigation";

export default function PageTransition({ href, children }: { href: string, children: React.ReactNode }) {

    const router = useRouter()
    const wait = async () => {
        return new Promise((res) => setTimeout(res, 500)
        );
    }
    const path = usePathname()

    const handlingClick = async () => {
        if (path.split('/')[1] !== href.split('/')[1]) {
            document.querySelector('.top')?.classList.remove("top-[-50%]")
            document.querySelector('.top')?.classList.add("top-0")
            document.querySelector('.bottom')?.classList.remove("bottom-[-50%]")
            document.querySelector('.bottom')?.classList.add("bottom-0")
            // await wait();
            router.push(href)
            // updatePathName(path)


            document.querySelector('.top')?.classList.add("top-[-50%]")
            document.querySelector('.top')?.classList.remove("top-0")
            document.querySelector('.bottom')?.classList.add("bottom-[-50%]")
            document.querySelector('.bottom')?.classList.remove("bottom-0")
            // }
        }

    };
    // console.log(path);

    return (
        <>
            {/* <div className="top z-[1000] fixed transition-all duration-[300ms] bg-[#000] w-full h-[50vh] top-[-50%] left-0"></div> */}
            {/* <div className="bottom z-[1000] fixed transition-all duration-[300ms] bg-[#000] w-full h-[50vh] bottom-[-50%] left-0"></div> */}
            <div className="children-container overflow-x-clip" onClick={handlingClick}>
                {children}
            </div>
        </>
    )

}