import TaskForm from "@/Containers/Tasks/TaskForm";
import { SquareCheck } from "lucide-react";

export default async function EditTaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="w-full flex flex-col gap-3 p-3">
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex flex-col lg:flex-row gap-3">
          <div className="flex flex-col lg:flex-row w-full h-max">
            <div>
              <div className="flex items-center gap-2">
                <SquareCheck />
                <h2 className="text-2xl m-0">ویرایش تسک</h2>
              </div>
              <p className="ms-8 text-sm text-gray-400">
                اطلاعات تسک را ویرایش کنید
              </p>
            </div>
          </div>
        </div>

        <TaskForm />
      </div>
    </div>
  );
}
