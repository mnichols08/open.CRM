import Summary from "@/components/Summary";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
function WeekProgress({}: {}) {
  return (
    <Card x-chunk="dashboard-05-chunk-1">
      <CardHeader className="pb-2">
        <CardDescription>This Week</CardDescription>
        <CardTitle className="text-3xl">10 Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          Based on n from last week
        </div>
      </CardContent>
      <CardFooter>
        {/* <Progress
          value={improvement}
          aria-label={`${improvement}% ${
            isImprovementPositive ? "increase" : "decrease"
          }`}
        /> */}
      </CardFooter>
    </Card>
  );
}

function MonthProgress({}: {}) {
  return (
    <Card x-chunk="dashboard-05-chunk-3">
      <CardHeader className="pb-2">
        <CardDescription>This Month</CardDescription>
        <CardTitle className="text-3xl">10 Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">from last month</div>
      </CardContent>
      <CardFooter>
        {/* <Progress
          value={improvement}
          aria-label={`${improvement}% ${
            isImprovementPositive ? "increase" : "decrease"
          }`}
        /> */}
      </CardFooter>
    </Card>
  );
}
export default function TopRow({
  summary,
}: {
  summary: { title: string; desc: string; buttonText: string };
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Summary
        title={summary.title}
        desc={summary.desc}
        buttonText={summary.buttonText}
      />
      <WeekProgress />
      <MonthProgress />
    </div>
  );
}
