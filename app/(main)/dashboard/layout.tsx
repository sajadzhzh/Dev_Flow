import Header from "@/Containers/Header";
import HiddenMenu from "@/Containers/Menu/Hidden";
import MenuItems from "@/Containers/Menu/Items";
import MenuStatics from "@/Containers/Menu/Statics";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-svh bg-auth">
      <div className="overlay">
        <HiddenMenu />
        <div className="flex flex-col gap-3 h-svh p-2">
          <div className="container mx-auto bg-black/75 border border-gray-800 rounded-xl">
            <Header />
          </div>
          <div className="container mx-auto flex gap-3 grow">
            <div className="hidden lg:block min-w-1/5 bg-black/75 rounded-xl border border-gray-800 p-3 grow">
              <MenuItems />
              <MenuStatics />
            </div>
            <div className="grow bg-black/75 rounded-xl border border-gray-800 overflow-y-scroll scrollbar-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
