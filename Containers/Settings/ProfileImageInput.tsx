"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { useRef, useState } from "react";
import Profile from "@/public/Profile.png";

interface Props {
  defaultImage?: string;
}

export default function ProfileAvatarInput({ defaultImage }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(defaultImage ?? null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="group relative overflow-hidden rounded-full w-max cursor-pointer"
      >
        <div className="relative h-36 w-36 rounded-full border-4 border-gray-700 transition-all group-hover:border-[#8B5CF6]">
          {preview ? (
            <Image
              src={preview}
              alt="avatar"
              fill
              className="rounded-full object-cover"
            />
          ) : (
            <Image
              src={Profile}
              alt="avatar"
              className="rounded-full size-full object-cover"
            />
          )}

          <div
            className="
            absolute inset-0 rounded-full
            flex flex-col
            items-center
            justify-center
            gap-2

            bg-black/70

            opacity-0
            transition-all
            duration-200

            group-hover:opacity-100
          "
          >
            <Camera className="size-7" />

            <span className="text-xs">تغییر عکس</span>
          </div>
        </div>
      </button>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        name="newProfile"
        onChange={handleFile}
      />
    </div>
  );
}
