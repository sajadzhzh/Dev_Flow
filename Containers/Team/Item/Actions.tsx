import ActionMenu from "@/Components/ui/ActionMenu/ActionMenu";
import ActionMenuItem from "@/Components/ui/ActionMenu/ActionMenuItem";
import { Trash2 } from "lucide-react";

interface ActionsProps {
  onDelete: () => void;
}

export default function TeamActions({ onDelete }: ActionsProps) {
  return (
    <ActionMenu>
      <ActionMenuItem danger onClick={onDelete}>
        <Trash2 size={16} />
        حذف
      </ActionMenuItem>
    </ActionMenu>
  );
}
