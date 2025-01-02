import { Project } from "@/types/projectType";
import axios from "axios";
import { redirect } from "next/navigation";

export async function deleteProject(id: string) {
  try {
    await fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
    });
    console.log("deleted!");
    redirect("portfolio");
  } catch (err) {
    console.log(err);
  }
}
export async function getData(url: string) {
  try {
    const result = await fetch(url).then((data) => data.json());
    return result;
  } catch (err) {
    console.log(err);
  }
}
export async function getSingleProject(id: string) {
  try {
    const result = await axios.get(`http://localhost:5000/projects/`);
    console.log(result.data);

    return result;
  } catch (err) {
    console.log(err);
  }
}
export async function addProject(data: any) {
  try {
    const result = await axios.post("http://localhost:5000/projects", data);
    return result;
  } catch (err) {
    console.log(err);
  }
}
