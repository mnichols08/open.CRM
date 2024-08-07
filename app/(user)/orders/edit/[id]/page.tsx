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
import { updateOrder, fetchOrder } from "@/lib/actions";
import { useEffect, useState } from "react";
import { Order } from "@/lib/definitions";

export default function EditOrderPage({ params }: { params: { id: string } }) {
  const [errorMessage, dispatch] = useFormState(updateOrder, undefined);
  const [order, setOrder] = useState<Order>();
  useEffect(() => {
    const order = fetchOrder(params.id).then((order: any) => {
      setOrder(order);
    });
  }, []);

  return (
    <main className="flex items-center justify-center p-4 sm:px-6 sm:py-0 md:gap-8">
      <form action={dispatch}>
        <div className="w-full max-w-4xl">
          <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
              <CardDescription>Input details about this order.</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Source</Label>
                  <Input
                    id="source"
                    type="text"
                    className="w-full"
                    defaultValue={order?.source || ""}
                    placeholder="Source of the order"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="parts">Parts</Label>
                  <Input
                    type="text"
                    id="parts"
                    placeholder="Parts of the order"
                    defaultValue={order?.parts || ""}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="eta">ETA</Label>
                  <Input
                    type="text"
                    id="eta"
                    placeholder="Estimated Time of Arrival"
                    defaultValue={order?.eta || ""}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="freight">Freight</Label>
                  <Input
                    type="text"
                    id="freight"
                    placeholder="Freight of the order"
                    defaultValue={order?.freight || ""}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-2 mt-4">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">Update Order</Button>
          </div>
        </div>
      </form>
    </main>
  );
}
