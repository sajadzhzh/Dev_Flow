import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div className="w-full xl:bg-[#18181B] xl:border border-gray-600 rounded-xl">
      <div className="py-3 px-5 hidden xl:flex border-b border-gray-600">
        <p className="text-gray-500 w-3/10">پروژه</p>
        <p className="text-gray-500 text-center w-1/10">وضعیت</p>
        <p className="text-gray-500 text-center w-1/10">پیشرفت</p>
        <p className="text-gray-500 text-center w-2/10">اعضا</p>
        <p className="text-gray-500 text-center w-1/10">تاریخ شروع</p>
        <p className="text-gray-500 text-center w-1/10">سررسید</p>
        <p className="text-gray-500 text-end w-1/10">عملیات</p>
      </div>
      <div className="flex flex-col gap-2 p-2 h-105 overflow-y-scroll scrollbar-none">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}
