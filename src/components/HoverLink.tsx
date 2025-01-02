"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { Ref, useRef } from "react"
const HoverLink = ({ link = '', title = 'Link Over' }: { link: string, title: string }) => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    useGSAP(() => {
        gsap.set('.ltr2', {
            y: '150%'
        })
    }, [])
    const tl = gsap.timeline()
    const handelOver = (): void => {
        // gsap.from('.tag .ltr', {
        //     yPercent: -130,
        //     stagger: 0.1,
        //     // duration: 0.5,
        // })
        gsap.to(ref1?.current, {
            top: 0
        })
        gsap.to(ref2?.current, {
            bottom: 0
        })

        gsap.to('.tag2 .ltr2', {
            y: 0,
            stagger: 0.1,
            // display: "none"
            color: "#fff"
        })

    }
    const handelLeave = (): void => {
        gsap.to('.tag .ltr', {
            yPercent: 0,

            stagger: 0.1
        })
        gsap.to(ref1?.current, {
            top: '-50%',
        })
        gsap.to(ref2?.current, {
            bottom: '-50%',
        })

        // tl
        gsap.to('.tag2 .ltr2', {
            y: '150%',
            stagger: 0.1,
        })
    }
    return (
        <Link href={link} className="overflow-hidden block w-fit group rounded-[50px] text-[30px] cursor-pointer" >
            <section onMouseEnter={handelOver} onMouseLeave={handelLeave} className="relative rounded-[50px]">
                <div className="px-[15px] py-[10px] border-solid border-[1px] border-[#000] rounded-[50px]  leading-[1] flex overflow-hidden items-center font-bold tag">{title.split('').map((el) => (
                    <>
                        <span ref={ref1} className="block one transition-all duration-[500ms] left-0 groupa-hover:top-0 top-[-50%] rounded-br-none rounded-bl-none rounded-[50px] absolute z-[-1] bg-[#000] w-full h-1/2 " />
                        <span ref={ref2} className="block two transition-all duration-[500ms] left-0 groupa-hover:bottom-0 bottom-[-50%] rounded-tr-none rounded-tl-none rounded-[50px] absolute z-[-1] bg-[#000] w-full h-1/2 " />
                        <div className="ltr ">{el}</div>
                        {/* <div>{el}</div> */}
                    </>
                ))}
                </div >
                <div className="flex w-full absolute h-full top-0 items-center leading-[1]  px-[1.7vw] py-[1vw] font-bold tag2">{title.split('').map((el) => (
                    <>
                        <div className="ltr2  transition-all relative translate-y-[150%] duration-[500ms] group-hover:text-white">{el}</div>
                    </>
                ))}</div>
            </section >
        </Link>
    )
}
export default HoverLink