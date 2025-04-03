"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { ReactElement, useRef } from "react";
import { FaStar } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);
interface Props { classname?: string, isStar?: boolean, title: string, id?: string }
const HeadingTitle = ({ id, title, isStar = true, classname }: Props) => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  useGSAP(() => {

    gsap.from(titleRef?.current?.children!, {
      visibility: "hidden",
      stagger: {
        each: 0.1,
        from: "random",
      },
      scrollTrigger: {
        trigger: titleRef?.current,
        start: "-80px 90%",
        end: "bottom bottom",
      }
    });
  }, []);
  return (
    <>
      <section id={id} className={`flex items-center gap-2 ${classname}`}>
        {isStar &&
          <span
            style={{ animationDuration: "3s" }}
            className="bg-[#ffee32] animate-spin flex items-center justify-center text-[3vw] max-sm:!text-[24px] max-sm:size-[50px] rounded-[50%] size-[8vw]">
            <FaStar />
          </span>}
        <h2 ref={titleRef} className="text-[12vw] flex page font-bold leading-[1] tracking-[1px]">
          {title.split("").map((el) => (
            <div key={el + Math.random() * 10}>{el}</div>
          ))}
        </h2>
      </section>
    </>
  );
};

export default HeadingTitle;
