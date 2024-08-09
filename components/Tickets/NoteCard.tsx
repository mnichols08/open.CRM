import { Note } from "@/lib/definitions";
import {CardContent}  from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const NoteCard = ({ note }: { note: Note }) => (
    <CardContent>
      <input type="hidden" name="note_id" value={note?.id} />
      <Textarea
        defaultValue={note?.note}
        placeholder="Add any notes about this ticket"
        name="notes"
        className="min-h-32"
      />
    </CardContent>
  );

  export default NoteCard;