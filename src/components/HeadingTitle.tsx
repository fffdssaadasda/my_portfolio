"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { FaStar } from "react-icons/fa";
import WrapperSections from "./WrapperSections";

const HeadingTitle = ({ title }: { title: string }) => {
  useGSAP(() => {
    gsap.from(".page div", {
      visibility: "hidden",
      stagger: {
        each: 0.1,
        from: "random",
      },
      delay: 1
    });
  }, []);
  return (
    <>
      <section className="flex items-center gap-2">
        <span className="bg-[#ffee32] flex items-center justify-center text-[22px] max-sm:!text-[14px] rounded-[50%] size-[5vw]">
          <FaStar />
        </span>
        <h2 className="text-[12vw] flex page font-bold leading-[1] tracking-[1px]">
          {title.split("").map((el) => (
            <div key={el + Math.random()}>{el}</div>
          ))}
        </h2>
      </section>
    </>
  );
};

export default HeadingTitle;
