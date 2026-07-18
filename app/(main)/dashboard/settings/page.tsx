import SettingsModifier from "@/Containers/Settings/SettingsModifier";
import SettingsTabs from "@/Containers/Settings/Tabs";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="w-full flex flex-col gap-3 py-3 px-5">
      <div className="w-full flex items-center gap-2 h-[8svh]">
        <Settings size={28} />
        <div>
          <h1 className="text-2xl">تنظیمات</h1>
          <p className="text-[13px] text-gray-500">
            مدیریت حساب کاربری و تنظیمات برنامه
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-3 h-[75svh]">
        <div className="w-full lg:w-1/3 xl:w-1/4 py-3 px-4 bg-[#18181b] border border-gray-600 rounded-xl">
            <SettingsTabs />
        </div>
        <div className="w-full lg:w-2/3 xl:w-3/4 py-2 px-4 bg-[#18181b] border border-gray-600 rounded-xl">
            <SettingsModifier />
        </div>
      </div>
    </div>
  );
}
