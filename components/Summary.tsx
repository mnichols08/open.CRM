import React from "react";
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import type { Summary } from "./definitions";

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
        <Link href={`/${title?.toLowerCase()}/create`} passHref>
          <Button>{buttonText}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default Summary;
