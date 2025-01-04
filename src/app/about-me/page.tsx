import CommingSoon from "@/components/CommingSoon"
import HeadingTitle from "@/components/HeadingTitle"
import WrapperSections from "@/components/WrapperSections"

const page = () => {
    return (
        <>
            <WrapperSections isFull>
                <HeadingTitle title="about_me" />
            </WrapperSections>
            <CommingSoon />
        </>
    )
}

export default page