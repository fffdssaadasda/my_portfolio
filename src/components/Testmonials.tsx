import { testmonials } from "@/constants/testmonials"
import HeadingTitle from "./HeadingTitle"
import WrapperSections from "./WrapperSections"
import TestmonialsItem from "./TestmonialsItem"

const Testmonials = () => {
    return (
        <>
            <WrapperSections isFull>
                <HeadingTitle title="testmonials" />
            </WrapperSections>
            <section id="testmonials" className="grid lg:grid-cols-3 max-sm:grid-cols-1 md:grid-cols-2 gap-3 mt-[15px] items-center place-content-center">
                {testmonials?.map((el) => (
                    <TestmonialsItem comment={el.comment} personName={el.personName} rating={el.rating
                    } />
                    // <div> {el.personName} </div>
                ))}
            </section>
        </>
    )
}

export default Testmonials