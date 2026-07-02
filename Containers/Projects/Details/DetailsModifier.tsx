"use client";

import { useSearchParams } from "next/navigation";
import ProjectDetailsOverView from "./OverView/Details";
import ProjectDetailsTasks from "./Tasks/Tasks";
import ProjectDetailsUsers from "./Users/Users";

export default function ProjectDetailsModifier() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  switch (view) {
    case "tasks":
      return <ProjectDetailsTasks />;
    case "users":
      return <ProjectDetailsUsers />;
    case "files":
      return <>files</>;
    case "activities":
      return <>activities</>;

    default:
      return <ProjectDetailsOverView />;
  }
}
