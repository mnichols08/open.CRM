import {CardContent}  from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const NoteCard = ({ note }: { note: string }) => (
    <CardContent>
      <Textarea
        defaultValue={note}
        placeholder="Add any notes about this ticket"
        name="notes"
        className="min-h-32"
        
      />
    </CardContent>
  );

  export default NoteCard;