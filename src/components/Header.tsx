"use client"
import Link from "next/link";
import { links } from "@/data";
import { memo, useState } from "react";
import dynamic from "next/dynamic";
import DownloadCv from "./Buttons/DownloadCv";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const HeaderMobile = dynamic(() => import('@/components/HeaderMobile'), { ssr: false })
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(theme === "dark");
  return (
    <section className="sticky rounded-[20px] max-sm:top-[5px] top-0 z-[9999] bg-card h-[85px]">
      <HeaderMobile setMenu={setToggleMenu} toggleMenu={toggleMenu} />
      <section className="border-solid flex items-center justify-between p-[25px] py-[15px] border-[3px] rounded-[inherit] border-primary dark:border-accent font-semibold">
        <Link href={`/`} className="bg-foreground block rounded-md size-[50px]" />

        <section className="flex items-center gap-[10px]"
        >
          <div onClick={() => setToggleMenu(prev => !prev)} className="text-[20px] cursor-pointer sm:hidden border-[1px] border-accent text-accent-foreground bg-background border-b-[3px] border-solid p-[15px] rounded-[50px] py-[5px]">
            menu
          </div>
          {links?.map((link) => (
            <section key={link + Math.random()} className="max-sm:hidden">
              <Button asChild variant="navButton">
                <a href={`#${link}`}
                >
                  {link}
                </a>
              </Button>

            </section>
          ))}
          <DownloadCv file={"Yosef-Arafa.pdf"} />
          <Button size="icon" className="bg-primary text-white border-2 border-accent" onClick={() => {
            setIsDark(!isDark)
            setTheme(isDark ? "light" : "dark")
          }} aria-label="Toggle Theme">
            {isDark ?
              <Moon className="text-black" /> :
              <Sun className="text-white" />
            }
          </Button>

        </section>
      </section>
    </section >
  );
};

export default memo(Header);
