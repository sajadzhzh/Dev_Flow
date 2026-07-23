"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";
import { useModal } from "./Modal";

export default function ModalHeader({ children }: { children: ReactNode }) {
  const { onClose } = useModal();

  return (
    <div className="flex items-center justify-between border-b border-gray-700 px-6 py-5">
      <h2 className="text-lg font-semibold">{children}</h2>

      <button
        onClick={onClose}
        className="
          rounded-lg
          p-2
          text-gray-400
          transition
          hover:bg-white/10
          hover:text-white
        "
      >
        <X size={18} />
      </button>
    </div>
  );
}
