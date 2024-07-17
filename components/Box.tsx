import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
export default function Box({
  title,
  description,
  content,
  progress,
}: {
  title: string;
  description: string;
  content: string;
  progress?: number;
}) {
  return (
    <Card x-chunk="dashboard-05-chunk-3">
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-3xl">{description}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">{content}</div>
      </CardContent>
      <CardFooter>
        {progress && <Progress value={progress} aria-label="increase" />}
      </CardFooter>
    </Card>
  );
}
