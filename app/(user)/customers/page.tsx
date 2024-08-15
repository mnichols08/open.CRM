import Link from "next/link";
import TopRow from "@/components/TopRow";
import { Separator } from "@/components/ui/separator";
import AllCustomers from "@/components/Customers/AllCustomers";
import { ChevronLeft, ChevronRight, Copy, MoreVertical } from "lucide-react";
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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

import { Customer } from "@/lib/definitions";

const exampleCustomer: Customer = {
  id: "12345678",
  name: "John Doe",
  address1: "123 Main St",
  address2: "Apt 1",
  city: "Anytown",
  state: "NY",
  zip: "12345",
  country: "USA",
  phone: "123-456-7890",
  created_at: "123456789",
};

export default async function Dashboard() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <TopRow
          summary={{
            title: "Customers",
            description: "View and manage all customers",
            buttonText: "Create Customer",
            buttonLink: "/customers/create",
          }}
          Card1={{
            title: "This Week",
            description: "0 customers",
            content: "0 from last week",
            progress: 0,
          }}
          Card2={{
            title: "This Month",
            description: "0 customers",
            content: "0 from last month",
            progress: 0,
          }}
        />
        <AllCustomers />
      </div>
      <div>
        <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Customer {exampleCustomer.id?.slice(-7)}
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Customer ID</span>
                </Button>
              </CardTitle>
              <CardDescription>Date: {new Date().getDate()}</CardDescription>
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
                  <Link href="/customers/edit">
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
              <div className="font-semibold">Customer Details</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Customer ID</dt>
                  <dd>{exampleCustomer.id?.slice(-7)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Name</dt>
                  <dd>
                    <span className="text-primary">{exampleCustomer.name}</span>
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Address1</dt>
                  <dd>{exampleCustomer.address1}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Address2</dt>
                  <dd>{exampleCustomer.address2}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">City</dt>
                  <dd>{exampleCustomer.city}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">State</dt>
                  <dd>{exampleCustomer.state}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Zip</dt>
                  <dd>{exampleCustomer.zip}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Country</dt>
                  <dd>{exampleCustomer.country}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Phone</dt>
                  <dd>{exampleCustomer.phone}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Created At</dt>
                  <dd>{exampleCustomer.created_at}</dd>
                </div>
              </dl>
              <Separator className="my-2" />
              <div className="font-semibold">Latest Tickets from Customer</div>
              <dl className="grid gap-3">
                {/* {exampleCustomer.tickets.map((note, i) => (
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
