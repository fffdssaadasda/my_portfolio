"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export async function updateProject(id: string, e: FormData) {
  const formD = new FormData();
  formD.append("title", e.get("title") as string);
  (e.get("technologies") as string)
    .split(",")
    .map((e) => formD.append("technologies", e));

  const p = await axios.patch(`http://localhost:5000/projects/${id}`, formD);
  console.log("project has updated!");
}
