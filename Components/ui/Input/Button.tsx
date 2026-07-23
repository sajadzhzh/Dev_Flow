import { MouseEventHandler, ReactNode } from "react";

export default function Button({
  children,
  className,
  type = "button",
  onClick,
}: {
  children: ReactNode;
  className: string;
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
