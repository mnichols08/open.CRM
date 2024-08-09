"use client";
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
import { useFormState } from "react-dom";
import {createCustomer} from '@/lib/actions';

export default function CreateCustomerPage() {
  const [errorMessage, dispatch] = useFormState(createCustomer, undefined);
  return (
    <main className="flex items-center justify-center p-4 sm:px-6 sm:py-0 md:gap-8">
      <form action={dispatch}>
      <div className="w-full max-w-4xl">
        <Card x-chunk="dashboard-07-chunk-0">
          <CardHeader>
            <CardTitle>Customer Details</CardTitle>
            <CardDescription>
              Input details about this customer.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  defaultValue=""
                  placeholder="Name for the customer"
                  name="name"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="address1">Address 1</Label>
                <Input
                  type="text"
                  id="address1"
                  placeholder="Enter 1st Address line"
                  name="address1"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="address2">Address 2</Label>
                <Input
                  type="text"
                  id="address2"
                  placeholder="Enter 2nd Address line"
                  name="address2"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="city">City</Label>
                <Input
                  type="text"
                  id="city"
                  placeholder="Enter a Customer City"
                  name="city"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="state">State</Label>
                <Input
                  type="text"
                  id="state"
                  placeholder="Enter a Customer State"
                  name="state"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="zip">Zip</Label>
                <Input
                  type="text"
                  id="zip"
                  placeholder="Enter a Customer Zip"
                  name="zip"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="country">Country</Label>
                <Input
                  type="text"
                  id="country"
                  placeholder="Enter a Customer Country"
                  name="country"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="Enter a Customer Phone"
                  name="phone"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center gap-2 mt-4">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Product</Button>
        </div>
      </div>
      </form>
    </main>
  );
}
