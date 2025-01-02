"use server";

import { api, mainUrl } from "@/utils/vas";
import { revalidatePath } from "next/cache";

export async function deleteProject(id: string) {
  await fetch(`${api}/projects/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
