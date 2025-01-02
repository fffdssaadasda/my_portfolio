import { auth } from "@/app/auth"
import UpdateProject from "@/components/UpdateProject"

const page = async ({ params }: { params: any }) => {
    const loggedInUser = await auth();
    const allowedUsers = ["jooyosef173@gmail.com", "yosefarafa198@gmail.com"];
    // console.log(allowedUsers.includes(loggedInUser?.user?.email as string))
    if (!allowedUsers.includes(loggedInUser?.user?.email as string)) {
        throw new Error("You are not allowed to access this page")
    }
    const { id } = await params

    return (
        <>
            {/* <UpdateProject id={id} /> */}
            SOON
        </>
    )
}

export default page;
