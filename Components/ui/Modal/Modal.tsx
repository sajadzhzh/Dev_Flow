"use client";

import { createContext, ReactNode, useContext, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

const ModalContext = createContext<{
  onClose: () => void;
} | null>(null);

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal components must be inside Modal");
  }

  return context;
}

const sizes = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export default function Modal({
  open,
  onClose,
  children,
  size = "md",
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", listener);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", listener);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm
        p-5
        animate-in fade-in duration-200
      "
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            w-full
            ${sizes[size]}
            rounded-2xl
            border border-gray-700
            bg-[#18181B]
            shadow-2xl
            animate-in zoom-in-95 duration-200
          `}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.body,
  );
}
