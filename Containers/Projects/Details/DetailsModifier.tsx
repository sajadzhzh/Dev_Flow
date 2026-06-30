"use client";

import { useSearchParams } from "next/navigation";
import ProjectDetailsOverView from "./OverView/Details";
import ProjectDetailsTasks from "./Tasks/Tasks";

export default function ProjectDetailsModifier() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  switch (view) {
    case "tasks":
      return <ProjectDetailsTasks />;
    case "users":
      return <>users</>;
    case "files":
      return <>files</>;
    case "activities":
      return <>activities</>;

    default:
      return <ProjectDetailsOverView />;
  }
}
