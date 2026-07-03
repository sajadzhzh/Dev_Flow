"use client";

import Button from "@/Components/ui/Button";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export interface DropdownItem {
  title: string;

  href?: string;

  onClick?: () => void;

  icon?: ReactNode;

  danger?: boolean;

  disabled?: boolean;

  hidden?: boolean;

  dividerBefore?: boolean;

  dividerAfter?: boolean;

  badge?: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];

  trigger?: ReactNode;

  menuClassName?: string;

  buttonClassName?: string;
}

export default function DropdownMenu({
  items,
  trigger,
  menuClassName = "",
  buttonClassName = "",
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative inline-block"
    >
      <Button
        onClick={() => setOpen((prev) => !prev)}
        style={`cursor-pointer rounded-xl border border-gray-600 bg-[#28282B] p-1 hover:bg-[#18181B] ${buttonClassName}`}
      >
        {trigger ?? <EllipsisVertical />}
      </Button>

      <div
        className={`absolute left-0 top-full mt-2 z-50 min-w-35 overflow-hidden rounded-xl border border-gray-700 bg-[#18181B] shadow-xl transition-all duration-150 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        } ${menuClassName}`}
      >
        {items.map((item) => {
          if (item.hidden) return null;

          const classes = `
            flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors
            ${
              item.disabled
                ? "cursor-not-allowed opacity-50"
                : item.danger
                  ? "text-red-500 hover:bg-red-500/10"
                  : "text-gray-300 hover:bg-[#28282B] hover:text-white"
            }
          `;

          return (
            <div key={item.title}>
              {item.dividerBefore && (
                <div className="border-t border-gray-700" />
              )}

              {item.href ? (
                <Link href={item.href} className={classes}>
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </div>

                  {item.badge && (
                    <span className="rounded bg-blue-500/20 px-2 py-0.5 text-xs text-blue-400">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ) : (
                <button
                  disabled={item.disabled}
                  onClick={() => {
                    item.onClick?.();
                    setOpen(false);
                  }}
                  className={`${classes} w-full`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </div>

                  {item.badge && (
                    <span className="rounded bg-blue-500/20 px-2 py-0.5 text-xs text-blue-400">
                      {item.badge}
                    </span>
                  )}
                </button>
              )}

              {item.dividerAfter && (
                <div className="border-t border-gray-700" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}