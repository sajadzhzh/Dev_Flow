import { MouseEventHandler, ReactNode } from "react";

export default function Button({
  children,
  style,
  type = "button",
  onClick,
}: {
  children: ReactNode;
  style: string;
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={style} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
