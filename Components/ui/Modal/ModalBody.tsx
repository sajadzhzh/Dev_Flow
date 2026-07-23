import { ReactNode } from "react";

export default function ModalBody({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="p-6">
      {children}
    </div>
  );
}