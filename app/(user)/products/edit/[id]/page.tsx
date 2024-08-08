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
import { Product } from "@/lib/definitions";
import { updateProduct, fetchProduct } from "@/lib/actions";

export default function CreateCustomerPage({ params }: { params: { id: string } }) {
  const [errorMessage, dispatch] = useFormState(updateProduct, undefined);
  const [product, setProduct] = useState<Product>();  
  useEffect(() => {
    fetchProduct(params.id).then((productArr: any) => {
      setProduct(productArr[0]);
    });
  }, []);
  return (
    <form action={dispatch} className="flex items-center justify-center p-4 sm:px-6 sm:py-0 md:gap-8">
      <input type="hidden" name="id" value={params.id} />
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
                  defaultValue={product?.linecode || ""}
                  name="linecode"
                  placeholder="Line Code of the product"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="partnumber">Part Number</Label>
                <Input
                  id="partnumber"
                  type="text"
                  className="w-full"
                  defaultValue={product?.partnumber || ""}
                  name="partnumber"
                  placeholder="Part Number of the product"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  defaultValue={product?.name || ""}
                  name="name"
                  placeholder="Name of the product"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="cost">Cost</Label>
                <Input
                  id="cost"
                  type="text"
                  className="w-full"
                  defaultValue={product?.cost || ""}
                  name="cost"
                  placeholder="Cost of the product"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="quoted_price">Quoted Price</Label>
                <Input
                  id="quoted_price"
                  type="text"
                  className="w-full"
                  defaultValue={product?.quoted_price || ""}
                  name="quoted_price"
                  placeholder="Quoted Price of the product"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="extra_cost">Extra Cost</Label>
                <Input
                  id="extra_cost"
                  type="text"
                  className="w-full"
                  defaultValue={product?.extra_cost || ""}
                  name="extra_cost"
                  placeholder="Extra Cost of the product"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="source">Source</Label>
                <Input
                  id="source"
                  type="text"
                  className="w-full"
                  defaultValue={product?.source || ""}
                  name="source"
                  placeholder="Source of the product"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  type="text"
                  className="w-full"
                  defaultValue={product?.description || ""}
                  name="description"
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
          <Button size="sm">Update Product</Button>
        </div>
      </div>
    </form>
  );
}
