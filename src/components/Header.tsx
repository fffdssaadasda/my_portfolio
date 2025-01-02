"use client"
import Link from "next/link";
// import HeaderMobile from "@/components/HeaderMobile"
import { links } from "@/data";
import { useState } from "react";
import dynamic from "next/dynamic";
import PageTransition from "./PageTransition";
import HoverLink from "./HoverLink";
import { signIn, signOut, useSession } from 'next-auth/react'
import AuthHeaderLinks from "./AuthHeaderLinks";
import DownloadCv from "./Buttons/DownloadCv";
const HeaderMobile = dynamic(() => import('@/components/HeaderMobile'), { ssr: false })
const Header = () => {
  const { data, status, } = useSession()
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <section className="relative">
      <HeaderMobile setMenu={setToggleMenu} toggleMenu={toggleMenu} />
      <section className="border-solid flex items-center justify-between p-[20px] py-[5px] border-[2px] rounded-[50px] border-[#000]  font-semibold">
        <PageTransition href={`/`}>
          <Link href={`/`} className="bg-black block rounded-md size-[50px]" >
          </Link>
        </PageTransition>
        <section className="flex items-center gap-[10px]"
        >
          <div onClick={() => setToggleMenu(prev => !prev)} className="text-[20px] cursor-pointer sm:hidden border-[1px] border-[#000] border-b-[3px] border-solid p-[15px] rounded-[50px] py-[5px]">
            menu
          </div>
          {links?.map((link) => (
            <section key={link + Math.random()} className="max-sm:hidden">
              <PageTransition href={`/${link.split(" ").join("-")}`}>
                <Link href={`/${link.split(" ").join("-")}`}
                  // href={`/${link.split(" ").join("-")}`}
                  className="text-[18px] hover:shadow-xl shadow-[#444] flex transition-all duration-[200ms]  hover:-translate-y-[5px] border-[1px] border-[#000] border-b-[3px] border-solid px-[15px] py-[5px] rounded-[50px]"
                >
                  {link}
                </Link>
              </PageTransition>
            </section>
          ))}
          <AuthHeaderLinks />
          {
            status === "authenticated" && <button onClick={() => signOut()} type='submit'
              className="text-[20px] cursor-pointer p-[15px] rounded-[50px] py-[5px] bg-red-500 text-white">
              Logout</button>
          }
          <DownloadCv />
        </section>

      </section>
    </section>
  );
};

export default Header;
