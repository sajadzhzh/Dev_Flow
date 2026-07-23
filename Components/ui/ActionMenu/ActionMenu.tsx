"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

export default function ActionMenu({ children }: Props) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          w-9 h-9
          rounded-lg
          flex
          items-center
          justify-center
          hover:bg-white/10
          transition
          cursor-pointer
          ms-auto
        "
      >
        ⋮
      </button>

      <div
        className={`
        absolute
        left-0
        top-11
        w-max
        rounded-xl
        border
        border-gray-700
        bg-[#18181B]
        shadow-xl
        overflow-hidden
        transition-all
        duration-200
        origin-top
        z-10
        ${
          open
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }
        `}
      >
        {children}
      </div>
    </div>
  );
}