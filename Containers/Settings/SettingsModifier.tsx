"use client";

import { useSearchParams } from "next/navigation";
import AccountSettings from "./Views/Account";
import AccountSecurity from "./Views/Security";
import SettingsInfo from "./Views/Info";

export default function SettingsModifier() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  switch (view) {
    case "security":
      return <AccountSecurity />;
    case "info":
      return <SettingsInfo />;
    default:
      return <AccountSettings />;
  }
}
