import ActionMenu from "@/Components/ui/ActionMenu/ActionMenu";
import ActionMenuItem from "@/Components/ui/ActionMenu/ActionMenuItem";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface ActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export default function ProjectActions({ onEdit, onDelete }: ActionsProps) {
  return (
    <ActionMenu>
      <ActionMenuItem href={`/dashboard/projects/1`}>
        <Eye size={16} />
        مشاهده
      </ActionMenuItem>

      <ActionMenuItem onClick={onEdit}>
        <Pencil size={16} />
        ویرایش
      </ActionMenuItem>

      <ActionMenuItem danger onClick={onDelete}>
        <Trash2 size={16} />
        حذف
      </ActionMenuItem>
    </ActionMenu>
  );
}
