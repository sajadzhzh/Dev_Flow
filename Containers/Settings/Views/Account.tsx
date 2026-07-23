import Button from "@/Components/ui/Input/Button";
import ProfileImageInput from "../ProfileImageInput";

export default function AccountSettings() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl">اطلاعات حساب کاربری</h3>
        <p className="text-[13px] text-gray-500">
          اطلاعات شخصی خود را ویرایش کنید
        </p>
      </div>

      <form className="w-full flex flex-col gap-2">
        <ProfileImageInput />

        <div className="w-full flex gap-2 flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <label htmlFor="userName">نام کاربری</label>
            <input
              type="text"
              name="userName"
              id="userName"
              className="w-full border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
            />
          </div>

          <div className="lg:w-1/2">
            <label htmlFor="fullName">نام و نام خانوادگی</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="w-full border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
          />
        </div>

        <div className="w-full">
          <label htmlFor="aboutMe">درباره من</label>
          <textarea
            rows={5}
            name="aboutMe"
            id="aboutMe"
            className="w-full border border-gray-800 outline-0 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
          />
        </div>

        <Button type="submit" className="lg:w-1/2 text-center py-2 bg-[#8a5cf65b] text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6] cursor-pointer rounded-xl">
            ذخیره تغییرات
        </Button>
      </form>
    </div>
  );
}
