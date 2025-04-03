import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  isFull?: boolean;
  isPadding?: boolean
}
const WrapperSections = ({
  children,
  isFull,
  isPadding = true
}: Props) => {
  return (
    <>
      <section
        className={`border-solid mb-[10px] overflow-hidden relative mt-3 after:w-full after:h-full after:top-[7px] after:left-[7px] after:border-solid after:border-[2px] after:rounded-[inherit] after:absolute after:border-black bg-white after:z-[-1] ${isPadding && "p-[20px]"
          } py-[15px] border-[4px] rounded-[12px] border-[#000] ${isFull ? "w-full" : "w-[50%] max-md:w-[80%] mx-auto px-[4vw]"
          }`}
      >
        {children}
      </section>
    </>
  );
};

export default WrapperSections;
