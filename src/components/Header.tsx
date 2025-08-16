"use client"
import Link from "next/link";
import { links } from "@/data";
import { memo, useState } from "react";
import dynamic from "next/dynamic";
import DownloadCv from "./Buttons/DownloadCv";
import { Toggle } from "./ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const HeaderMobile = dynamic(() => import('@/components/HeaderMobile'), { ssr: false })
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(theme === "dark");
  return (
    <section className="fixed rounded-[20px] top-[15px] z-[9999] bg-card -translate-x-1/2 left-1/2 w-[95%] h-[85px]">
      <HeaderMobile setMenu={setToggleMenu} toggleMenu={toggleMenu} />
      <section className="border-solid flex items-center justify-between p-[25px] py-[15px] border-[3px] rounded-[inherit] border-foreground  font-semibold">
        <Link href={`/`} className="bg-foreground block rounded-md size-[50px]" >
        </Link>
        <section className="flex items-center gap-[10px]"
        >
          <div onClick={() => setToggleMenu(prev => !prev)} className="text-[20px] cursor-pointer sm:hidden border-[1px] border-accent text-accent-foreground bg-background border-b-[3px] border-solid p-[15px] rounded-[50px] py-[5px]">
            menu
          </div>
          {links?.map((link) => (
            <section key={link + Math.random()} className="max-sm:hidden">
              <a href={`#${link}`}
                className="text-[18px] bg-accent-foreground text-accent hover:shadow-xl shadow-[#444] flex transition-all duration-[200ms]  hover:-translate-y-[5px] border-[1px] border-[#000] border-b-[3px] border-solid px-[15px] py-[5px] rounded-[50px]"
              >
                {link}
              </a>
            </section>
          ))}

          <DownloadCv file={"Yosef-Arafa.pdf"} />
          <Toggle className="bg-white" onClick={() => {
            setIsDark(!isDark)
            setTheme(isDark ? "light" : "dark")
          }} aria-label="Toggle Theme">
            {isDark ?
              <Moon className="text-black" /> :
              <Sun className="text-black" />
            }
          </Toggle>

        </section>
      </section>
    </section >
  );
};

export default memo(Header);
