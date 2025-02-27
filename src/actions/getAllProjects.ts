"use server";

import { Project } from "@/types/projectType";
import { api } from "@/utils/vas";
import axios, { AxiosResponse } from "axios";

export async function getAllProjects() {
  try {
    const projects: AxiosResponse<Project[]> = await axios.get(
      `${api}/projects`
    );

    return projects.data;
  } catch (err) {
    console.log(err);
  }
}
