import Link from "next/link";
import TopRow from "@/components/TopRow";
import { Separator } from "@/components/ui/separator";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  File,
  ListFilter,
  MoreVertical,
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllTickets from "@/components/Tickets/AllTickets";

export default async function TicketsDashboard() {
  // Example values for the tickets dashboard (top row variables)
  const wTickets = Math.floor(Math.random() * 100);
  const wTicketsLast = Math.floor(Math.random() * 100);
  const mTickets = wTicketsLast * 4;
  const mTicketsLast = Math.floor(Math.random() * 1000);
  const exampleTicket = {
    customer: "RAPID REPAIR",
    customerID: "2afa1b1a-4525-45c1-af03-cd191a3efd04",
    reason: "water pump",
    year: 2022,
    make: "Toyota",
    model: "Corolla",
    engine: "1.8L",
    submodel: "LE",
    notes: ["needs brake pads, rotors, calipers", "found leak", "ordered part"],
    status: "action",
    date: "2023-09-10",
  };
  const improvement = (nTickets: number, nTicketsLast: number) => Math.round(
        ((nTickets - nTicketsLast) / nTicketsLast) * 100
      );
    const weekImprovement = improvement(wTickets, wTicketsLast);
    const monthImprovement = improvement(mTickets, mTicketsLast);
    const progress = (improvement: number) => improvement > 0 ? improvement : 0;
      // const isIncPositive = (inc: num) => inc > 0;
      // const improvementText =( val: num) => isIncPositive(val)
      //   ? `+${val}`
      //   : improvement;

// {
    //   const improvement = Math.round(
    //     ((nTickets - nTicketsLastMonth) / nTicketsLastMonth) * 100
    //   );
    //   const isImprovementPositive = improvement > 0;
    //   const improvementText = isImprovementPositive
    //     ? `+${improvement}`
    //     : improvement;
    //   return (
    //     <Card x-chunk="dashboard-05-chunk-3">
    //       <CardHeader className="pb-2">
    //         <CardDescription>This Month</CardDescription>
    //         <CardTitle className="text-3xl">{nTickets} Tickets</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <div className="text-xs text-muted-foreground">
    //           {improvementText}% from last month
    //         </div>
    //       </CardContent>
    //       <CardFooter>
    //         <Progress
    //           value={improvement}
    //           aria-label={`${improvement}% ${
    //             isImprovementPositive ? "increase" : "decrease"
    //           }`}
    //         />
    //       </CardFooter>
    //     </Card>
    //   );
    // }
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <TopRow
          summary={{
            title: "Tickets",
            description: "View and manage all tickets",
            buttonText: "Create Ticket",
            buttonLink: "/tickets/create",
          }}
          Card1={{title: "This Week", description: `${wTickets} tickets`, content: `${wTickets - wTicketsLast} from last week`, progress: weekImprovement}}
          Card2={{title: "This Month", description: `${wTickets} tickets`, content: `${mTickets - mTicketsLast} from last month`, progress: monthImprovement}}
        />
        
        <AllTickets />
      </div>
      <div>
        <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Ticket {exampleTicket.customerID.slice(-7)}
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Ticket ID</span>
                </Button>
              </CardTitle>
              <CardDescription>Date: July 13, 2024</CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              {/* <Button size="sm" variant="outline" className="h-8 gap-1">
                <Truck className="h-3.5 w-3.5" />
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Track Order
                </span>
              </Button> */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <MoreVertical className="h-3.5 w-3.5" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <Link href="/tickets/edit">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Trash</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Ticket Details</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Ticket ID</dt>
                  <dd>{exampleTicket.customerID.slice(-7)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Status</dt>
                  <dd>
                    <span className="text-primary">{exampleTicket.status}</span>
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Reason</dt>
                  <dd>{exampleTicket.reason}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Year</dt>
                  <dd>{exampleTicket.year}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Make</dt>
                  <dd>{exampleTicket.make}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Model</dt>
                  <dd>{exampleTicket.model}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Engine</dt>
                  <dd>{exampleTicket.engine}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Submodel</dt>
                  <dd>{exampleTicket.submodel}</dd>
                </div>
              </dl>
              <Separator className="my-2" />
              <div className="font-semibold">Notes</div>
              <dl className="grid gap-3">
                {exampleTicket.notes.map((note, i) => (
                  <div className="flex items-center justify-between" key={i}>
                    <dt className="text-muted-foreground">Note {i + 1}</dt>
                    <dd>{note}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Updated <time dateTime="2024-13-24">July 13, 2024</time>
            </div>
            <Pagination className="ml-auto mr-0 w-auto">
              <PaginationContent>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    <ChevronLeft className="h-3.5 w-3.5" />
                    <span className="sr-only">Previous Order</span>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span className="sr-only">Next Order</span>
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
