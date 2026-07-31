"use client";

import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SearchHeader() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <form className="flex items-center relative" ref={wrapperRef}>
      <Search className="absolute right-2 text-gray-500" />
      <input
        onFocus={() => setOpen(true)}
        type="text"
        name="search"
        className="w-full border border-gray-800 py-1 ps-9 rounded focus:border-gray-400 placeholder:text-gray-500"
        placeholder="جستجو در پروژه ها ، تسک ها و ..."
      />

      <div
        className={`${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        } transition-all duration-150 absolute top-full mt-2 py-2 px-3 w-full rounded-xl border border-gray-800 bg-[#38383b] shadow-2xl overflow-hidden z-999`}
      >
        ...
      </div>
    </form>
  );
}
