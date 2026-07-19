import Image from "next/image";
import Logo from "@/public/logo.png";

export default function SettingsInfo() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        <Image
          src={Logo}
          alt="DevFlow"
          width={500}
          height={500}
          loading="eager"
          className="w-15 lg:w-20 h-10 lg:h-15"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-xl">هم‌افزا</h3>
          <p className="text-[13px] text-gray-500 lg:w-2/3 text-justify">
            هم‌افزا یک نرم‌افزار مدیریت پروژه و همکاری تیمی استکه به شما کمک
            می‌کند پروژه ها را ساده تر مدیریت کنید و بهره‌وری تیم خود را افزایش
            دهید.
          </p>
        </div>
      </div>
    </div>
  );
}
