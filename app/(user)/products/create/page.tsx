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
import {submitProduct} from '@/lib/actions';

export default function CreateProductPage() {
  const [errorMessage, dispatch] = useFormState(submitProduct, undefined);
  return (
    <main className="flex items-center justify-center p-4 sm:px-6 sm:py-0 md:gap-8">
      <form action={dispatch}>
      <div className="w-full max-w-4xl">
        <Card x-chunk="dashboard-07-chunk-0">
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>Input details about this product.</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="linecode">Line Code</Label>
                <Input
                  id="linecode"
                  type="text"
                  className="w-full"
                  defaultValue=""
                  placeholder="Line Code of the product"
                  name="linecode"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="partnumber">Part Number</Label>
                <Input
                  id="partnumber"
                  type="text"
                  className="w-full"
                  defaultValue=""
                  placeholder="Part Number of the product"
                  name="partnumber"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  defaultValue=""
                  placeholder="Name of the product"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="cost">Cost</Label>
                <Input
                  id="cost"
                  type="text"
                  className="w-full"
                  defaultValue=""
                  placeholder="Cost of the product"
                  name="cost"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="quoted_price">Quoted Price</Label>
                <Input
                  id="quoted_price"
                  type="text"
                  className="w-full"
                  defaultValue=""
                  placeholder="Quoted Price of the product"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="extra_cost">Extra Cost</Label>
                <Input
                  id="extra_cost"
                  type="text"
                  className="w-full"
                  defaultValue=""
                  placeholder="Extra Cost of the product"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="source">Source</Label>
                <Input
                  id="source"
                  type="text"
                  className="w-full"
                  defaultValue=""
                  placeholder="Source of the product"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  type="text"
                  className="w-full"
                  defaultValue=""
                  placeholder="Description of the product"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center gap-2 mt-4">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Create Product</Button>
        </div>
      </div>
      </form>
    </main>
  );
}
