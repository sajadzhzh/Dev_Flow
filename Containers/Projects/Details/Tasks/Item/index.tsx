"use client";

import { ReactNode, useState } from "react";

import Modal from "@/Components/ui/Modal";
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
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      <div className="w-full py-3 px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] hover:border-gray-300 border-white/10 rounded-xl">
        {!myTask && (
          <>
            <TaskItemDesktop
              onEdit={() => setEditOpen(true)}
              onDelete={() => setDeleteOpen(true)}
              Status={Status}
              date={date}
              title={title}
              priority={priority}
            />

            <TaskItemMobile
              onEdit={() => setEditOpen(true)}
              onDelete={() => setDeleteOpen(true)}
              Status={Status}
              date={date}
              title={title}
            />
          </>
        )}

        {myTask && (
          <TaskItemMyTasks
            onEdit={() => setEditOpen(true)}
            onDelete={() => setDeleteOpen(true)}
            Status={Status}
            date={date}
            project={project}
            priority={priority}
            title={title}
          />
        )}
      </div>

      <Modal open={editOpen} onClose={() => setEditOpen(false)}>
        <Modal.Header>ویرایش پروژه</Modal.Header>

        <Modal.Body>Soon</Modal.Body>
      </Modal>

      <Dialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={() => {
          console.log("Delete");
          setDeleteOpen(false);
        }}
        title="حذف پروژه"
        description="آیا مطمئن هستید؟"
        variant="danger"
      />
    </>
  );
}
