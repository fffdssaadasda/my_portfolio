"use client"
import { links } from "@/data"
import WrapperSections from "./WrapperSections"
import { IoIosClose } from "react-icons/io";
import gsap from "gsap";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const HeaderMobile = ({ toggleMenu = false, setMenu }: {
    toggleMenu: boolean,
    setMenu: Dispatch<SetStateAction<boolean>>
}) => {
    const mouseEnter = () => {
        gsap.from('.lnk h4', {
            y: 50,
            stagger: 0.1
        })
    }
    return (
        <>
            {toggleMenu &&
                <section className="fixed sm:hidden w-[99%] top-[1vw] z-[100] left-1/2 -translate-x-1/2 ">
                    <span onClick={() => setMenu(toggleMenu => !toggleMenu)} className="size-[30px] text-black absolute cursor-pointer hover:bg-[#eee] rounded-[8px] top-[27px] z-[10] right-[12px] flex items-center justify-center text-[25px] ">
                        <IoIosClose className="text-[30px] border-[2px] border-solid border-black rounded-[8px]" />
                    </span>
                    <section className="nav-links origin-top ">
                        <WrapperSections isFull>
                            <AnimatePresence mode="wait">
                                {toggleMenu ?
                                    <motion.section
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        exit={{ height: 0 }}
                                        className="pt-[10px] border-t-solid border-t-[1px] border-black mt-[40px]">
                                        {links?.map((link, i) => (
                                            <section key={link + i + Math.random()} onClick={() => setMenu(toggleMenu => !toggleMenu)}>
                                                <div className="text-[26px] overflow-hidden flex items-center gap-[2px] transition-all duration-[200ms] hover:text-[#444] cursor-pointer lnk text-black font-bold">
                                                    {/* {links.map((el) => (
                                                    ))} */}
                                                    <a href={`#${link}`} >{link}</a>
                                                </div>
                                            </section>
                                        ))}
                                    </motion.section> : ""
                                }
                            </AnimatePresence>
                        </WrapperSections>
                    </section >
                </section >
            }
        </>
    )
}

export default HeaderMobile;