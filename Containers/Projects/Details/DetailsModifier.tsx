"use client";

import { useSearchParams } from "next/navigation";
import ProjectDetailsOverView from "./OverView/Details";
import ProjectDetailsTasks from "./Tasks/Tasks";
import ProjectDetailsUsers from "./Users/Users";
import ProjectDetailsFiles from "./Files/Files";
import ProjectDetailsActivity from "./Activities/Activities";

export default function ProjectDetailsModifier() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  switch (view) {
    case "tasks":
      return <ProjectDetailsTasks />;
    case "users":
      return <ProjectDetailsUsers />;
    case "files":
      return <ProjectDetailsFiles />;
    case "activities":
      return <ProjectDetailsActivity />;

    default:
      return <ProjectDetailsOverView />;
  }
}
