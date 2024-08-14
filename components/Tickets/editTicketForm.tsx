"use client";
import { useState, useEffect } from "react";
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
import { Ticket, Note } from "@/lib/definitions";
import { updateTicket, fetchTicket, deleteNote } from "@/lib/actions";
import { useFormState } from "react-dom";
import NoteCard from "./NoteCard";
import { AddNoteButton } from "./AddNoteButton";

export default function EditTicketPage(props: any) {
  const children = props.children;
  const ticketID = props.ticketID;
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [customer, setCustomer] = useState([]);

  const [notes, setNotes] = useState<Note[]>([]);
  const [countNote, setCountNote] = useState(0);

  const addNote = (newNote: string) => {
    console.log(notes, newNote);
    setNotes([
      ...notes,
      {
        id: countNote.toString(),
        ticket_id: "",
        user_id: "",
        note: newNote,
        created_at: Date.now().toString(),
      },
    ]);
    setCountNote(countNote + 1);
  };

  const removeNote = (id: string) => {
    console.log("Removing note with value: ", id, notes);
    try {
      setNotes(notes.filter((note) => note?.id !== id));
      console.log(Number(id));
    } catch (e) {
      deleteNote(id);
    }
  };

  const updateNote = (id: string, value: string) => {
    console.log("Updating note with id: ", id, " to value: ", value);
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, note: value };
        }
        return note;
      })
    );
  };

  useEffect(() => {
    fetchTicket(undefined, ticketID)
      .then((fetchedTicket: any) => {
        setTicket(fetchedTicket.ticket);
        setNotes(fetchedTicket.notes || []);
        setCustomer(fetchedTicket.ticket.customer_id || []);
      })
      .catch((error) => {
        console.error("Error fetching ticket:", error);
      });
  }, [ticketID]);
  const [errorMessage, dispatch] = useFormState(updateTicket, undefined);
  return (
    <form
      action={dispatch}
      className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8"
    >
      <input type="hidden" name="ticketID" value={ticketID} />
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
                      defaultValue={ticket?.reason || ""}
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
                    defaultValue={ticket?.year || ""}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="make">Make</Label>
                  <Input
                    type="text"
                    id="make"
                    name="make"
                    placeholder="Enter a Vehicle Make"
                    defaultValue={ticket?.make || ""}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="model">Model</Label>
                  <Input
                    type="text"
                    id="model"
                    name="model"
                    placeholder="Enter a Vehicle Model"
                    defaultValue={ticket?.model || ""}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="submodel">Sub Model</Label>
                  <Input
                    type="text"
                    id="submodel"
                    name="submodel"
                    placeholder="Enter a Vehicle Sub Model"
                    defaultValue={ticket?.submodel || ""}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="engine">Engine</Label>
                  <Input
                    type="text"
                    id="engine"
                    name="engine"
                    defaultValue={ticket?.engine || ""}
                    placeholder="Enter a Vehicle Engine"
                  />
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-2">
              <CardHeader>
                <CardTitle>Ticket Notes</CardTitle>
              </CardHeader>
              {notes?.map((note, index) => (
                <NoteCard
                  key={index}
                  note={note}
                  removeNote={removeNote}
                  updateNote={updateNote}
                />
              ))}
              <CardFooter className="justify-center border-t p-4">
                <AddNoteButton onClick={addNote} />
              </CardFooter>
            </Card>
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <CardTitle>Ticket Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="status">Status</Label>
                    <Select name="status" defaultValue="open">
                      <SelectTrigger id="status" aria-label="Select status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="open">In Progress</SelectItem>
                        <SelectItem value="helpWanted">
                          Action Needed
                        </SelectItem>
                        <SelectItem value="closed">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle>Useful Links</CardTitle>
                <CardDescription>
                  Did you find any useful articles or resources related to this?
                  Please add them here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="grid gap-3">
                    <Label htmlFor="link">Link</Label>
                    <Input
                      id="link"
                      type="url"
                      placeholder="https://example.com"
                      name="link"
                    />
                  </div>
                  <Button size="sm" variant="secondary">
                    Add Link
                  </Button>
                </div>
              </CardContent>
            </Card> */}
            <Card x-chunk="dashboard-07-chunk-5">
              <CardHeader>
                <CardTitle>Archive Ticket</CardTitle>
                <CardDescription>
                  If this ticket is no longer needed, you can archive it.
                  Don&apos;t worry it will won&apos;t be deleted and you can
                  always access it later.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div></div>
                <Button size="sm" variant="secondary">
                  Archive Ticket
                </Button>
              </CardContent>
            </Card>
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
  );
}
