import google from "@/public/Google.png";
import gitHub from "@/public/GitHub.svg";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function AuthContent() {
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
          <form>
            <div className="mb-2 flex flex-col gap-1 focus-within:text-cyan-500">
              <label htmlFor="email">ایمیل</label>
              <input
                type="email"
                name="email"
                className="border rounded p-2 py-1"
              />
            </div>
            <div className="mb-2 flex flex-col gap-1 focus-within:text-cyan-500">
              <label htmlFor="password">رمز عبور</label>
              <input
                type="password"
                name="password"
                className="border rounded p-2 py-1"
              />
            </div>
            <button className="w-full py-1 bg-black/25 cursor-pointer rounded hover:bg-black/75">
              ورود
            </button>
          </form>

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
        </div>
      </div>
    </div>
  );
}
