"use client";
import { useEffect, useState } from "react";
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
import { Customer } from "@/lib/definitions";
import { updateCustomer, fetchCustomer } from "@/lib/actions";

export default function EditCustomerPage({
  params,
}: {
  params: { id: string };
}) {

    const [errorMessage, dispatch] = useFormState(updateCustomer, undefined);
    const [customer, setCustomer] = useState<Customer>();  

  useEffect(() => {
    console.log(params.id);
    fetchCustomer(params.id).then((customerReponse: any) => {
      setCustomer(customerReponse);
    });
  }, []);
  return (
    <form
      action={dispatch}
      className="flex items-center justify-center p-4 sm:px-6 sm:py-0 md:gap-8"
    >
      <input type="hidden" name="id" value={params.id} />
      <div className="w-full max-w-4xl">
        <Card x-chunk="dashboard-07-chunk-0">
          <CardHeader>
            <CardTitle>Customer Details</CardTitle>
            <CardDescription>
              Update details about this customer.
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
                  defaultValue={customer?.name || ""}
                  placeholder="Provide a Customer Name"
                  name="name"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="address1">Address 1</Label>
                <Input
                  type="text"
                  id="address1"
                  placeholder="Enter 1st Address line"
                  defaultValue={customer?.address1 || ""}
                  name="address1"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="address2">Address 2</Label>
                <Input
                  type="text"
                  id="address2"
                  placeholder="Enter 2nd Address line"
                  defaultValue={customer?.address2 || ""}
                  name="address2"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="city">City</Label>
                <Input
                  type="text"
                  id="city"
                  placeholder="Enter a Customer City"
                  defaultValue={customer?.city || ""}
                  name="city"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="state">State</Label>
                <Input
                  type="text"
                  id="state"
                  placeholder="Enter a Customer State"
                  defaultValue={customer?.state || ""}
                  name="state"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="zip">Zip</Label>
                <Input
                  type="text"
                  id="zip"
                  placeholder="Enter a Customer Zip Code"
                  defaultValue={customer?.zip || ""}
                  name="zip"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="country">Country</Label>
                <Input
                  type="text"
                  id="country"
                  placeholder="Enter a Customer Country"
                  defaultValue={customer?.country || ""}
                  name="country"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="Enter a Customer Phone"
                  defaultValue={customer?.phone || ""}
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
          <Button size="sm">Update Customer</Button>
        </div>
      </div>
    </form>
  );
}
