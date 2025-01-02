"use client";
import { Project } from "@/types/projectType";
import { useEffect, useState } from "react";
export function useFetch(url: string) {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      await fetch(url)
        .then((data) => data.json())
        .then((d) => setData(d));
    })();
  }, [url]);
  return {
    data,
  };
  // const projects: Project[] = await fetch(
  //   "http://localhost:5000/projects/"
  // ).then((d) => d.json());
  // return {
  //   projects,
  // };
}
