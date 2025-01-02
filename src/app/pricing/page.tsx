import FeaturesItem from "@/components/FeaturesItem";
import HeadingTitle from "@/components/HeadingTitle"
import WrapperSections from "@/components/WrapperSections"
import { Plan, plans } from "@/data"

const page = () => {
    return (
        <>
            <WrapperSections isFull>
                <HeadingTitle title="Pricing" />
            </WrapperSections>
            <section className="grid grid-cols-3 max-[600px]:grid-cols-1 max-md:grid-cols-2 gap-[15px] mt-[15px]">
                {plans.map(el => (
                    <section className="min-h-[450px]">
                        <WrapperSections isFull>
                            {/* {el.} */}
                            <span className="w-1/2 z-[0] h-[50px] bg-[#fff] left-1 border-solid border-[2px] border-black absolute block top-[22px]">
                            </span>
                            <section className="bg-black shadow-xl shadow-[#6c757d] tracking-[1px] text-white absolute w-[50%] text-[22px] py-[10px] text-center left-0 font-bold overflow-y-clip after:absolute after:h-[100%] after:w-[50px] after:bg-black after:right-[-10px] after:top-0 after:rotate-[69deg] after:rounded-[6px] before:z-[-20] after:z-[-1] z-[1]">
                                {el.planName}

                                {/* before: before:   before: before: before: before:border-[2px] before:border-black */}
                            </section>
                            <section className="pt-[85px]">
                                <div>
                                    <h4 className="text-[3vw] max-sm:text-[22px] leading-[1] text-[#343a40] font-[900]">
                                        {el.field}
                                    </h4>
                                </div>
                                <ul className="mt-[15px]">
                                    {el.features?.active?.map(item => (
                                        <FeaturesItem text={item} />
                                    ))}
                                </ul>
                                {el.features?.unActive &&
                                    <ul className="mt-[15px] border-t-solid pt-[15px] border-t-[#eee] border-t-[1px]">
                                        {el.features?.unActive?.map(item => (
                                            <FeaturesItem isActive={false} text={item} />
                                        ))}
                                    </ul>
                                }
                            </section>
                        </WrapperSections>
                    </section >
                ))}
            </section >
        </>
    )
}

export default page