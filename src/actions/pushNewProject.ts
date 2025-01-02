"use server";
import { mainUrl } from "@/utils/vas";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
interface proj {
  title: FormDataEntryValue | null;
  description?: FormDataEntryValue | null;
  project_img?: FormDataEntryValue | null;
  technologies: any;
}

export async function pushNewData(e: FormData) {
  const data = JSON.stringify({
    title: e.get("title"),
    // technologies: e.get("technologies")?.split(","),
  });
  try {
    await axios.post("http://localhost:5000/projects", data);
    console.log("project has created!");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export async function updateProject(id: string, e: FormData) {
  // const data = {
  //   title: e.get("title"),
  //   technologies: e.get("technologies"),
  // };
  const formD = new FormData();
  formD.append("title", e.get("title") as string);
  (e.get("technologies") as string)
    .split(",")
    .map((e) => formD.append("technologies", e));

  console.log(id);
  try {
    await axios.patch(`http://localhost:5000/projects/${id}`, {
      method: "PATCH",
      body: formD,
    });
    console.log("project has updated!");
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
  revalidatePath("portfolio");
  redirect("/portfolio");
}
export async function addNewProject(e: FormData) {
  const formD = new FormData();
  formD.append("title", e.get("title") as string);
  // formD.append("images",);
  e.getAll("images").map((e) => formD.append("images", e));
  (e.get("technologies") as string)
    .split(",")
    .map((e) => formD.append("technologies", e));
  console.log(formD);

  await axios.post(`http://localhost:5000/projects`, formD);
  revalidatePath("portfolio");
  redirect("/portfolio");
}
