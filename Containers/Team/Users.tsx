import UserTeam from "./Item";


export default function UsersTable() {
  return (
    <div className="w-full xl:bg-[#18181B] xl:border border-gray-600 rounded-xl">
      <div className="py-3 px-5 hidden xl:flex border-b border-gray-600">
        <p className="text-gray-500 w-2/8">عضو</p>
        <p className="text-gray-500 text-center w-2/8">ایمیل</p>
        <p className="text-gray-500 text-center w-1/8">پروژه ها</p>
        <p className="text-gray-500 text-center w-1/8">تسک های فعال</p>
        <p className="text-gray-500 text-center w-1/8">آخرین فعالیت</p>
        <p className="text-gray-500 text-end w-1/8">عملیات</p>
      </div>
      <div className="flex flex-col gap-2 p-2 h-80 xl:h-60 overflow-y-scroll scrollbar-none">
        <UserTeam />
        <UserTeam />
        <UserTeam />
        <UserTeam />
        <UserTeam />
        <UserTeam />
        <UserTeam />
        <UserTeam />
        <UserTeam />
      </div>
    </div>
  );
}
