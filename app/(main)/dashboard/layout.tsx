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
        <div className="flex flex-col gap-5 h-svh p-2">
          <div className="container mx-auto bg-black/75 border border-gray-800 rounded-xl">
            <Header />
          </div>
          <div className="container mx-auto flex gap-5 grow">
            <div className="hidden lg:block w-1/5 bg-black/75 rounded-xl border border-gray-800 p-3">
              <MenuItems />
              <MenuStatics />
            </div>
            <div className="grow bg-black/75 rounded-xl border border-gray-800">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
