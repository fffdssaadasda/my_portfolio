"use server";

import { api, mainUrl } from "@/utils/vas";
export async function deleteProject(id: string) {
  await fetch(`${api}/projects/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
