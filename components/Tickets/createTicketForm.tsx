"use client";
import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NoteCard from "./NoteCard";
import { Textarea } from "@/components/ui/textarea";
import { saveTicket } from "@/lib/actions";
import { useFormState } from "react-dom";
import { AddNoteButton } from "./AddNoteButton";
import { Note } from "@/lib/definitions";

export default function CreateTicketPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [errorMessage, dispatch] = useFormState(saveTicket, undefined);
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (newNote: Note) => {
    setNotes([...notes, newNote]);
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <form action={dispatch}>
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle>Ticket Details</CardTitle>
                  <CardDescription>
                    Input details about this ticket. Ask for as much Information
                    as you can think of.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="customer">Customer</Label>
                      {children}
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Reason</Label>
                      <Input
                        id="reason"
                        type="text"
                        className="w-full"
                        name="reason"
                        defaultValue=""
                        placeholder="Give a general reason for opening this ticket"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-07-chunk-1">
                <CardHeader>
                  <CardTitle>Vehicle Information</CardTitle>
                  <CardDescription>
                    Provide any details provided about the vehicle in question.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      type="number"
                      id="year"
                      name="year"
                      placeholder="Enter a Vehicle Year"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="make">Make</Label>
                    <Input
                      type="text"
                      id="make"
                      name="make"
                      placeholder="Enter a Vehicle Make"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="model">Model</Label>
                    <Input
                      type="text"
                      id="model"
                      name="model"
                      placeholder="Enter a Vehicle Model"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="submodel">Sub Model</Label>
                    <Input
                      type="text"
                      id="submodel"
                      name="submodel"
                      placeholder="Enter a Vehicle Sub Model"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="engine">Engine</Label>
                    <Input
                      type="text"
                      id="engine"
                      name="engine"
                      placeholder="Enter a Vehicle Engine"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-07-chunk-2">
                <CardHeader>
                  <CardTitle>Ticket Notes</CardTitle>
                </CardHeader>
                {notes.map((note, index) => (
                  <NoteCard key={index} note={note} />
                ))}
                <CardFooter className="justify-center border-t p-4">
                  <AddNoteButton onClick={addNote} />
                </CardFooter>
              </Card>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <input type="hidden" name="status" value="open" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button variant="outline" size="sm">
              Save Ticket
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
}
