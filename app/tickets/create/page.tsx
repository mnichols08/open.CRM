import Image from "next/image";
import { PlusCircle, Upload } from "lucide-react";
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

import PageLayout from "@/components/PageLayout";
import CustomerDropDown from "@/components/CustomerDropDown";
import { Textarea } from "@/components/ui/textarea";


export default function CreateTicketPage() {
  return (
    <PageLayout breadcrumb={["Tickets", "Create Ticket"]}>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
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
                      <CustomerDropDown selectedCustomer={undefined} />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Reason</Label>
                      <Input
                        id="name"
                        type="text"
                        className="w-full"
                        defaultValue=""
                        placeholder="Give a general reason for opening this ticket"
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
                        placeholder="Enter a Vehicle Year"
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="make">Make</Label>
                      <Input
                        type="text"
                        id="make"
                        placeholder="Enter a Vehicle Make"
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="model">Model</Label>
                      <Input
                        type="text"
                        id="model"
                        placeholder="Enter a Vehicle Model"
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="submodel">Sub Model</Label>
                      <Input
                        type="text"
                        id="submodel"
                        placeholder="Enter a Vehicle Sub Model"
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="engine">Engine</Label>
                      <Input
                        type="text"
                        id="engine"
                        placeholder="Enter a Vehicle Engine"
                      />
                    </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-07-chunk-2">
                <CardHeader>
                  <CardTitle>Ticket Notes</CardTitle>
                </CardHeader>
                <CardContent>
                <Textarea
                          id="description"
                          defaultValue=""
                          placeholder="Add any notes about this ticket"
                          className="min-h-32"
                        />
                </CardContent>
                <CardFooter className="justify-center border-t p-4">
                  <Button size="sm" variant="ghost" className="gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    Add Note
                  </Button>
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
                      <Select>
                        <SelectTrigger id="status" aria-label="Select status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">In Progress</SelectItem>
                          <SelectItem value="action">Action Needed</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                <CardHeader>
                  <CardTitle>Useful Links</CardTitle>
                  <CardDescription>
                    Did you find any useful articles or resources related to this? Please add them here.
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
                      />
                    </div>
                    <Button size="sm" variant="secondary">
                      Add Link
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-07-chunk-5">
                <CardHeader>
                  <CardTitle>Archive Ticket</CardTitle>
                  <CardDescription>
                    If this ticket is no longer needed, you can archive it. Don&apos;t worry it will won&apos;t be deleted and you can always access it later.
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
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">Save Product</Button>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
