"use client"

import Button from "@/Components/ui/Button";
import { hiddenMenu } from "@/Lib/Helper/Events";
import { X } from "lucide-react";

export default function HiddenMenu() {
  return (
    <div
      className="absolute hidden h-svh bg-black/45 backdrop-blur-[2px] z-40"
      id="hidden_menu_con"
    >
      <div
        className="w-0 h-full bg-[#0F0F14] z-50"
        id="hidden_menu"
      >
        <Button style="" onClick={hiddenMenu}>
            <X />
        </Button>
      </div>
    </div>
  );
}
