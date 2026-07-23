"use client";

import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { AlertTriangle, Trash2, Info } from "lucide-react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;

  title: string;
  description: string;

  confirmText?: string;
  cancelText?: string;

  variant?: "danger" | "warning" | "info";

  children?: ReactNode;
}

const variants = {
  danger: {
    icon: Trash2,
    iconBg: "bg-red-500/15",
    iconColor: "text-red-500",
    button: "bg-red-600 hover:bg-red-700",
  },

  warning: {
    icon: AlertTriangle,
    iconBg: "bg-yellow-500/15",
    iconColor: "text-yellow-500",
    button: "bg-yellow-600 hover:bg-yellow-700",
  },

  info: {
    icon: Info,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-500",
    button: "bg-blue-600 hover:bg-blue-700",
  },
};

export default function Dialog({
  open,
  onClose,
  onConfirm,

  title,
  description,

  confirmText = "تأیید",
  cancelText = "انصراف",

  variant = "danger",

  children,
}: DialogProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", esc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [open]);

  if (!open) return null;

  const CurrentIcon = variants[variant].icon;

  return createPortal(
    <div
      className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/60
      backdrop-blur-sm
      p-5
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        w-full
        max-w-md
        rounded-2xl
        border border-gray-700
        bg-[#18181B]
        shadow-2xl
        "
      >
        <div className="flex flex-col items-center px-8 pt-8">

          <div
            className={`
            w-16 h-16 rounded-full
            flex items-center justify-center
            ${variants[variant].iconBg}
            `}
          >
            <CurrentIcon
              className={variants[variant].iconColor}
              size={30}
            />
          </div>

          <h2 className="mt-5 text-xl font-bold">
            {title}
          </h2>

          <p className="mt-3 text-center text-gray-400 text-sm leading-7">
            {description}
          </p>

          {children}
        </div>

        <div className="flex justify-end gap-3 border-t border-gray-700 mt-8 p-5">

          <button
            onClick={onClose}
            className="
            px-5 py-2
            rounded-lg
            bg-gray-700
            hover:bg-gray-600
            transition
            "
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className={`
            px-5 py-2
            rounded-lg
            transition
            text-white
            ${variants[variant].button}
            `}
          >
            {confirmText}
          </button>

        </div>
      </div>
    </div>,
    document.body
  );
}