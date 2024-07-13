import React from 'react';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
    import { Button } from "@/components/ui/button";
interface Summary {
  title: string | null;
  desc: string | null;
  buttonText: string | null;
}
 const Summary: React.FC<Summary> = ({ title, desc, buttonText }) => {
    return (
        <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            {desc}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>{buttonText}</Button>
        </CardFooter>
      </Card>
    )
}
export default Summary;