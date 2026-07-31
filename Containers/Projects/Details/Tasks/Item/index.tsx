"use client";

import { ReactNode, useState } from "react";

import Dialog from "@/Components/ui/Dialog";
import TaskItemDesktop from "./Desktop";
import TaskItemMobile from "./Mobile";
import TaskItemMyTasks from "./MyTasks";

type Status = "inProccess" | "done" | "waiting" | "suspend";

interface TaskProps {
  title: ReactNode;
  priority?: "حیاتی" | "بالا" | "متوسط" | "پائین";
  date: string;
  project?: string;
  Status: Status;
  myTask?: boolean;
}

export default function TaskRow({
  title,
  priority,
  date,
  Status,
  myTask,
  project,
}: TaskProps) {
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      <div className="w-full py-3 px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] hover:border-gray-300 border-white/10 rounded-xl">
        {!myTask && (
          <>
            <TaskItemDesktop
              onEdit={"/dashboard/projects/1/tasks/1/edit"}
              onDelete={() => setDeleteOpen(true)}
              Status={Status}
              date={date}
              title={title}
              priority={priority}
            />

            <TaskItemMobile
              onEdit={"/dashboard/projects/1/tasks/1/edit"}
              onDelete={() => setDeleteOpen(true)}
              Status={Status}
              date={date}
              title={title}
            />
          </>
        )}

        {myTask && (
          <TaskItemMyTasks
            onEdit={"/dashboard/projects/1/tasks/1/edit"}
            onDelete={() => setDeleteOpen(true)}
            Status={Status}
            date={date}
            project={project}
            priority={priority}
            title={title}
          />
        )}
      </div>

      <Dialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={() => {
          console.log("Delete");
          setDeleteOpen(false);
        }}
        title="حذف تسک"
        description="آیا مطمئن هستید؟"
        variant="danger"
      />
    </>
  );
}
