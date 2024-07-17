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

export default function CreateCustomerPage() {
  return (
    <main className="flex items-center justify-center p-4 sm:px-6 sm:py-0 md:gap-8">
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
                  defaultValue=""
                  placeholder="Source of the order"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="parts">Parts</Label>
                <Input
                  type="text"
                  id="parts"
                  placeholder="Parts of the order"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="eta">ETA</Label>
                <Input
                  type="text"
                  id="eta"
                  placeholder="Estimated Time of Arrival"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="freight">Freight</Label>
                <Input
                  type="text"
                  id="freight"
                  placeholder="Freight of the order"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center gap-2 mt-4">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Order</Button>
        </div>
      </div>
    </main>
  );
}
