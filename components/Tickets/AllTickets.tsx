"use client";
import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Ticket } from "@/lib/definitions";
import Link from "next/link";
import { deleteTicket, fetchTickets } from "@/lib/actions";
import { useState, useEffect } from "react";

export default function AllTickets(props: any) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const setViewTicket = props.setViewTicket;

  useEffect(() => {
    fetchTickets().then((data) => {
      const tickets: Ticket[] = data;
      setTickets(tickets);
    });
  }, []);

  const handleDelete = (id: any) => {
    // API call to delete an item
    deleteTicket(id);
    fetchTickets().then((data) => {
      const tickets: Ticket[] = data;
      setTickets(tickets);
    });
  };

  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="flex items-center justify-between">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for a ticket"
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Active
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Ticket
              </span>
            </Button>
          </div>
        </div>

        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Tickets</CardTitle>
            <CardDescription>All the Tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Id</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Make</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Engine</TableHead>
                  <TableHead>Submodel</TableHead>
                  <TableHead>Created By </TableHead>
                  <TableHead>Customer Id</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow
                    key={ticket.id}
                    onClick={() => {
                      console.log(ticket);
                      setViewTicket(ticket);
                    }}
                  >
                    <TableCell>{ticket.id}</TableCell>
                    <TableCell>{ticket.reason}</TableCell>
                    <TableCell>{ticket.status}</TableCell>
                    <TableCell>{ticket.year}</TableCell>
                    <TableCell>{ticket.make}</TableCell>
                    <TableCell>{ticket.model}</TableCell>
                    <TableCell>{ticket.engine}</TableCell>
                    <TableCell>{ticket.submodel}</TableCell>
                    <TableCell>{ticket.created_by}</TableCell>
                    <TableCell>{ticket.customer_id}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Link href={`/tickets/edit/${ticket.id}`}>
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(ticket.id)}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>32</strong> tickets
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
