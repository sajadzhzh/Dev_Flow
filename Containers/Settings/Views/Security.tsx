import Button from "@/Components/ui/Input/Button";
import OtherSessions from "../OtherSessions";
import { LogOut } from "lucide-react";

export default function AccountSecurity() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl">امنیت</h3>
        <p className="text-[13px] text-gray-500">
          مدیریت رمز عبور و امنیت حساب کاربری شما
        </p>
      </div>

      <form className="w-full flex flex-col gap-2">
        <div className="w-full">
          <label htmlFor="oldPassword">رمز عبور فعلی</label>
          <input
            type="password"
            name="oldPassword"
            id="oldPassword"
            className="w-full border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
          />
        </div>

        <div className="w-full">
          <label htmlFor="newPassword">رمز عبور جدید</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            className="w-full border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
          />
        </div>
        <div className="w-full">
          <label htmlFor="newPassword2">تکرار رمز عبور جدید</label>
          <input
            type="password"
            name="newPassword2"
            id="newPassword2"
            className="w-full border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
          />
        </div>

        <Button
          type="submit"
          style="lg:w-1/2 text-center py-2 bg-[#8a5cf65b] text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6] cursor-pointer rounded-xl"
        >
          تغییر رمز عبور
        </Button>
      </form>

      <div className="border-b border-gray-600"></div>

      <div className="w-full flex flex-col gap-4">
        <div>
          <h3 className="text-xl">جلسات فعال</h3>
          <p className="text-[13px] text-gray-500">
            دستگاه ها و مرورگرهایی که با حساب شما وارد شده اند
          </p>
        </div>

        <div className="w-full flex flex-col gap-2">
          <OtherSessions
            app="Chrome"
            platform="Windows"
            device="همین دستگاه"
            lastSeen="اکنون"
          />
        </div>

        <Button style="lg:w-1/2 flex items-center justify-center gap-2 py-2 bg-[#ef44444d] text-[#EF4444] hover:text-white hover:bg-[#EF4444] cursor-pointer rounded-xl">
          <LogOut />
          خروج از همه دستگاه های دیگر
        </Button>
      </div>
    </div>
  );
}
