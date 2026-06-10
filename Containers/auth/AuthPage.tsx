"use client";

import google from "@/public/Google.png";
import gitHub from "@/public/GitHub.svg";
import logo from "@/public/logo.png";
import Image from "next/image";
import LoginForm from "./loginForm";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RegisterForm from "./regiterForm";
import "./auth.css";

export default function AuthContent() {
  const path = usePathname();

  return (
    <div className="h-svh min-w-full flex items-center justify-center bg-auth">
      <div className="overlay flex justify-center items-center">
        <div className="border py-10 px-8 rounded-xl liquid w-full md:w-1/3">
          <div className="mx-auto w-max text-center flex flex-col gap-2 text-xl mb-8">
            <Image
              src={logo}
              alt="DevFlow"
              width={100}
              height={100}
              loading="eager"
              className="size-15"
            />
            هم‌افزا
          </div>

          {path === "/auth" ? <LoginForm /> : <RegisterForm />}

          {path !== "/auth/register" && (
            <>
              <div className="border-b my-4 border-black/50"></div>

              <button className="w-full py-1 flex justify-center items-center gap-2 bg-white/25 cursor-pointer rounded hover:bg-white/75 hover:text-black">
                <Image
                  src={google}
                  alt="Google"
                  width={100}
                  height={100}
                  loading="eager"
                  className="size-6"
                />
                ادامه با گوگل
              </button>
              <button className="w-full mt-2 py-1 flex justify-center items-center gap-2 bg-white/25 cursor-pointer rounded hover:bg-white/75 hover:text-black">
                <Image
                  src={gitHub}
                  alt="GitHub"
                  width={100}
                  height={100}
                  loading="eager"
                  className="size-6"
                />
                ادامه با گیت هاب
              </button>
            </>
          )}

          <div className="flex gap-1 justify-center mt-4">
            {path === "/auth" ? (
              <>
                حساب کاربری ندارید؟
                <Link
                  href="/auth/register"
                  className="underline hover:text-cyan-500"
                >
                  ثبت نام
                </Link>
                کنید.
              </>
            ) : (
              <>
                حساب کاربری دارید؟
                <Link href="/auth" className="underline hover:text-cyan-500">
                  وارد شوید
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
