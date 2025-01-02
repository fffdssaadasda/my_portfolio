import styles from "@/components/home/home.module.css"

const WhoMe = () => {
    return (
        <div>
            {/* <h3 className="max-md:text-[80px] text-[4vw]  text-center">Hey There <span className={`${styles.greet}`}>👋</span> </h3> */}
            <section className="flex flex-col items-center">
                {/* <div className="max-sm:text-[50px] text-[5vw]">My Name Is Yosef</div> */}
                <div className="min-h-s py-[40px]  px-[15px]  bg-black text-white rounded-[33px] w-full">
                    <h1 className="w-full font-[900] leading-[1] pt-[20px] text-[22vw] text-center ">Dev.Yosef</h1>
                    <div className="flex flex-col  max-sm:justify-center  gap-2 mt-[15px]">
                        <h2 className="font-bold max-sm:text-center  text-[30px] sm:text-[5vw] leading-[1]">What makes my work unique <br /> is the utmost precision and <br /> efficiency.</h2>
                    </div>
                    <section className="flex sm:justify-end max-sm:justify-center mt-[20px]">
                        <div className="flex flex-col gap-2 mt-[15px]">
                            <h2 className="font-bold max-sm:text-center  text-[30px] sm:text-[5vw] leading-[1]">With two years <br /> of  <span className="p-[10px] bg-white text-black skew-x-[-10deg] inline-flex ">mern stack</span>   development <br /> experiance.</h2>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default WhoMe