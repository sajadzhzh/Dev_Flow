"use client"

import { useSearchParams } from "next/navigation";
import AccountSettings from "./Views/Account";
import AccountSecurity from "./Views/Security";

export default function SettingsModifier(){
    const searchParams = useSearchParams();
      const view = searchParams.get("view");
    
      switch (view) {
        case "security":
          return <AccountSecurity />
        case "notifications":
          return "<ProjectDetailsFiles />;"
        case "info":
          return "<ProjectDetailsActivity />;"
    
        default:
          return <AccountSettings />
      }
}