import ActionMenu from "@/Components/ui/ActionMenu/ActionMenu";
import ActionMenuItem from "@/Components/ui/ActionMenu/ActionMenuItem";
import { Eye, Pen, Trash2 } from "lucide-react";

interface ActionsProps {
  onDelete: () => void;
  onEdit: string;
}

export default function TaskActions({ onDelete, onEdit }: ActionsProps) {
  return (
    <ActionMenu>
      <ActionMenuItem href="/dashboard/projects/1/tasks/1">
        <Eye size={16} />
        مشاهده جزئیات
      </ActionMenuItem>
      <ActionMenuItem href={onEdit}>
        <Pen size={16} />
        ویرایش
      </ActionMenuItem>
      <ActionMenuItem danger onClick={onDelete}>
        <Trash2 size={16} />
        حذف
      </ActionMenuItem>
    </ActionMenu>
  );
}
