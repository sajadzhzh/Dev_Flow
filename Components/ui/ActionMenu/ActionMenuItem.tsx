import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;

  href?: string;

  danger?: boolean;

  onClick?: () => void;
}

export default function ActionMenuItem({
  children,
  href,
  danger,
  onClick,
}: Props) {
  const className = `
    flex
    items-center
    gap-3
    px-4
    py-3
    text-sm
    cursor-pointer
    transition

    ${
      danger
        ? "text-red-500 hover:bg-red-500/10"
        : "hover:bg-white/5"
    }
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${className} w-full text-right`}
    >
      {children}
    </button>
  );
}