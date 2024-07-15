import Link from "next/link";
import TopRow from "@/components/Products/TopRow";
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
import AllProducts from "@/components/Products/AllProducts";
import { Product } from "@/lib/definitions";

const exampleProduct: Product = {
  id: "12345678",
  linecode: "1sdfg",
  partnumber: "145678",
  name: "name",
  order_id: "orderid1",
  cost: 10,
  quoted_price: 111,
  extra_cost: 110,
  source: "1source",
  description: "desc1",
  created_at: "3456789",
};
export default async function ProductsDashboard() {
  const todaysdate = new Date().toLocaleDateString();
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <TopRow
          summary={{
            title: "Products",
            desc: "Information about Products in the system",
            buttonText: "Create New Product",
          }}
        />
        <Tabs defaultValue="week">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="week">
            <AllProducts />
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Product {exampleProduct.id?.slice(-7)}
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Product ID</span>
                </Button>
              </CardTitle>
              <CardDescription>Date: {todaysdate}</CardDescription>
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
                  <Link href="/products/edit">
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
              <div className="font-semibold">Product Details</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Product ID</dt>
                  <dd>{exampleProduct.id?.slice(-7)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Line Code</dt>
                  <dd>
                    <span className="text-primary">
                      {exampleProduct.linecode}
                    </span>
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Part Number</dt>
                  <dd>{exampleProduct.partnumber}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Name</dt>
                  <dd>{exampleProduct.name}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Order Id</dt>
                  <dd>{exampleProduct.order_id}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Cost</dt>
                  <dd>{exampleProduct.cost}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Quoted Price</dt>
                  <dd>{exampleProduct.quoted_price}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Extra Cost</dt>
                  <dd>{exampleProduct.extra_cost}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Source</dt>
                  <dd>{exampleProduct.source}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Description</dt>
                  <dd>{exampleProduct.description}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Created At</dt>
                  <dd>{exampleProduct.created_at}</dd>
                </div>
              </dl>
              <Separator className="my-2" />
              <div className="font-semibold">
                Latest Orders for this product
              </div>
              <dl className="grid gap-3">
                {/* {exampleProduct.order_id.map((note, i) => (
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
