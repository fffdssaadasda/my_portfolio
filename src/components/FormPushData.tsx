import { Project } from "@/types/projectType"
import WrapperSections from "./WrapperSections"
import { deleteProject } from "@/app/_services/crudApi"
import ButtonSubmition from "./Buttons/ButtonSubmition"
function FormPushData({ subject = "Add Project", children, projectId, submition, action, mode = "add", id }: { mode: string, id: string, action: any, subject: string, children: React.ReactNode, projectId?: string, submition?: () => any }) {
    // const project = await fetch(`http://localhost:5000/project/${projectId}`).then((data) => data.json())
    // console.log(project);
    return (
        <WrapperSections >
            <h3 className="text-[25px] text-center font-semibold mb-[15px]">{subject}</h3>
            <form action={action} >
                {/* <WrapperSections isFull>
                    <input type={`${"text"}`} placeholder={"Project Title"} className="p-[10px] outline-none absolute top-0 left-0 w-full h-full" />
                </WrapperSections> */}
                {children}
                {mode === "add" &&
                    <button type="submit" className="block mt-3.5 w-full bg-green-400 p-[10px] rounded-[10px] transition-all duration-[200ms] active:scale-[1.01] hover:shadow-lg text-white text-[22px]">{subject === "edit" ? "Save Changes" : "Upload Project"}</button>
                }
                {mode === "edit" && <ButtonSubmition id={id} />}
            </form>
        </WrapperSections>
    )
}

export default FormPushData