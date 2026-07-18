"use client"

import { useSearchParams } from "next/navigation";
import AccountSettings from "./Views/Account";

export default function SettingsModifier(){
    const searchParams = useSearchParams();
      const view = searchParams.get("view");
    
      switch (view) {
        case "security":
          return "<ProjectDetailsTasks />;"
        case "styles":
          return "<ProjectDetailsUsers />;"
        case "notifications":
          return "<ProjectDetailsFiles />;"
        case "info":
          return "<ProjectDetailsActivity />;"
    
        default:
          return <AccountSettings />
      }
}