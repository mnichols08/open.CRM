import { Note } from "@/lib/definitions";
import { CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { CircleX } from "lucide-react";
import { useState } from "react";

const NoteCard = ({
  note,
  removeNote,
  updateNote,
}: {
  note: Note;
  removeNote: any;
  updateNote: any;
}) => {
  const [value, setValue] = useState(note?.note || "");
  return (
    <CardContent className="flex">
      <input type="hidden" name="note_id" value={note?.id} />

      <Textarea
        defaultValue={note?.note}
        placeholder="Add any notes about this ticket"
        name="notes"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="min-h-32"
        onBlur={() => updateNote(note?.id, value)}
      />

      <CircleX className="-ml-5" onClick={() => removeNote(note?.id)} />
    </CardContent>
  );
};

export default NoteCard;
