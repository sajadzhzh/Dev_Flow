import ProjectForm from "@/Containers/Projects/New/ProjectForm";
import { Folder } from "lucide-react"

export default function NewProjectPage() {
  return (
    <div className="w-full py-3 px-5 flex flex-col gap-3 h-196 scrollbar-none overflow-y-scroll">
      <div className="w-full flex items-center gap-3">
        <Folder />
        <div>
          <h1 className="text-xl">ایجاد پروژه جدید</h1>
          <p className="text-[13px] text-gray-500">
            اطلاعات پروژه خود را وارد کنید
          </p>
        </div>
      </div>

      <ProjectForm />
    </div>
  );
}
