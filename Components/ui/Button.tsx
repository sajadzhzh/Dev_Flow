import { ReactNode } from "react";

export default function Button({
  children,
  style,
  type = "button",
}: {
  children: ReactNode;
  style: string;
  type?: "submit" | "reset" | "button";
}) {
  return (
    <button className={style} type={type}>
      {children}
    </button>
  );
}
