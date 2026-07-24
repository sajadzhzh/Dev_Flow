"use client";

import { useState } from "react";

import Modal from "@/Components/ui/Modal";
import Dialog from "@/Components/ui/Dialog";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import EditForm from "./EditForm";

export default function ProjectItem() {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      <div className="w-full py-3 px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] hover:border-[#3B82F6] border-white/10 rounded-xl">
        <Desktop
          onEdit={() => setEditOpen(true)}
          onDelete={() => setDeleteOpen(true)}
        />

        <Mobile />
      </div>

      <Modal open={editOpen} onClose={() => setEditOpen(false)}>
        <Modal.Header>ویرایش پروژه</Modal.Header>

        <Modal.Body>
          <EditForm open={setEditOpen} />
        </Modal.Body>
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
