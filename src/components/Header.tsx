"use client"
import Link from "next/link";
import { links } from "@/data";
import { memo, useState } from "react";
import dynamic from "next/dynamic";
import DownloadCv from "./Buttons/DownloadCv";

const HeaderMobile = dynamic(() => import('@/components/HeaderMobile'), { ssr: false })
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <section className="fixed rounded-[20px] top-[5px] z-[9999] bg-white -translate-x-1/2 left-1/2 w-[95%] h-[60px]">
      <HeaderMobile setMenu={setToggleMenu} toggleMenu={toggleMenu} />
      <section className="border-solid flex items-center justify-between p-[20px] py-[5px] border-[3px] rounded-[inherit] border-[#000]  font-semibold">
        <Link href={`/`} className="bg-black block rounded-md size-[50px]" >
        </Link>
        <section className="flex items-center gap-[10px]"
        >
          <div onClick={() => setToggleMenu(prev => !prev)} className="text-[20px] cursor-pointer sm:hidden border-[1px] border-[#000] border-b-[3px] border-solid p-[15px] rounded-[50px] py-[5px]">
            menu
          </div>
          {links?.map((link) => (
            <section key={link + Math.random()} className="max-sm:hidden">
              <a href={`#${link}`}
                className="text-[18px] hover:shadow-xl shadow-[#444] flex transition-all duration-[200ms]  hover:-translate-y-[5px] border-[1px] border-[#000] border-b-[3px] border-solid px-[15px] py-[5px] rounded-[50px]"
              >
                {link}
              </a>
            </section>
          ))}
          <DownloadCv file={"Yosef-Arafa-frontend.pdf"} />
        </section>
      </section>
    </section >
  );
};

export default memo(Header);
