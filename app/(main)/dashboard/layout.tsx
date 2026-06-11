import Header from "@/Containers/Header";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-svh bg-auth">
      <div className="overlay">
        <div className="flex flex-col gap-5 h-svh py-2">
          <div className="container mx-auto bg-black/75 border border-gray-800 rounded-xl">
            <Header />
          </div>
          <div className="container mx-auto flex gap-5 grow">
            <div className="hidden lg:block w-1/5 bg-black/75 rounded-xl border border-gray-400">
              Menu
            </div>
            <div className="grow bg-black/75 rounded-xl border border-gray-400">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
