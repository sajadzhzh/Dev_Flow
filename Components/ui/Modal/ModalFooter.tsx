import { ReactNode } from "react";

export default function ModalFooter({ children }: { children: ReactNode }) {
  return (
    <div
      className="
      flex justify-end gap-3
      border-t border-gray-700
      px-6 py-5
    "
    >
      {children}
    </div>
  );
}
