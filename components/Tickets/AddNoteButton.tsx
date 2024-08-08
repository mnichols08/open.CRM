import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const AddNoteButton = ({ onClick }: { onClick: any }) => {
  const addNoteButtonFn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    onClick();
  };
  return (
    <Button size="sm" variant="ghost" className="gap-1" onClick={addNoteButtonFn}>
      <PlusCircle className="h-3.5 w-3.5" />
      Add Note
    </Button>
  );
};
