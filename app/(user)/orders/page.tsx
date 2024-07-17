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
import AllOrders from "@/components/Orders/AllOrders";

const exampleOrder = {
  id: "12345678",
  source: "John Doe",
  parts: "123 Main St",
  eta: "Apt 1",
  freight: "Anytown",
  created_at: "NY",
};

export default async function OrdersDashboard() {
  // Example values for the tickets dashboard (top row variables)
  const todaysDate = new Date().toLocaleDateString();
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <TopRow
          summary={{
            title: "Orders",
            description: "Information about Orders in the system",
            buttonText: "Create New Orders",
            buttonLink: "/orders/create",
          }}
          Card1={{
            title: "This Week",
            description: "0 orders",
            content: "0 from last week",
            progress: 0,
          }}
          Card2={{
            title: "This Month",
            description: "0 orders",
            content: "0 from last month",
            progress: 0,
          }}
        />
        <AllOrders />
      </div>
      <div>
        <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Order {exampleOrder.id?.slice(-7)}
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Order ID</span>
                </Button>
              </CardTitle>
              <CardDescription>Date: {todaysDate}</CardDescription>
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
                  <Link href="/orders/edit">
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
              <div className="font-semibold">Order Details</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Order ID</dt>
                  <dd>{exampleOrder.id?.slice(-7)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Source</dt>
                  <dd>{exampleOrder.source}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Parts</dt>
                  <dd>{exampleOrder.parts}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">ETA</dt>
                  <dd>{exampleOrder.eta}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Freight</dt>
                  <dd>{exampleOrder.freight}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Created At</dt>
                  <dd>{exampleOrder.created_at}</dd>
                </div>
              </dl>
              <Separator className="my-2" />
              <div className="font-semibold">Products in this Order</div>
              <dl className="grid gap-3">
                {/* {exampleOrder.notes.map((note, i) => (
                  <div className="flex items-center justify-between" key={i}>
                    <dt className="text-muted-foreground">Note {i + 1}</dt>
                    <dd>{note}</dd>
                  </div>
                ))} */}
              </dl>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Updated <time dateTime={todaysDate}>{todaysDate}</time>
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
