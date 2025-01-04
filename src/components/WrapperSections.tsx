import { ReactNode } from "react";

const WrapperSections = ({
  children,
  isFull,
}: {
  children: ReactNode;
  isFull?: boolean;
}) => {
  return (
    <>
      <section
        className={`border-solid mb-[10px]  h-full overflow-hidden relative after:w-full after:h-full after:top-[7px] after:left-[7px] after:border-solid after:border-[2px] after:rounded-[inherit] after:absolute after:border-black bg-white after:z-[-1] ${
          isFull && "p-[20px]"
        } py-[15px] border-[3px] rounded-[12px] border-[#000] ${
          isFull ? "w-full" : "w-[50%] max-md:w-[80%] mx-auto px-[4vw]"
        }`}
      >
        {children}
      </section>
    </>
  );
};

export default WrapperSections;
