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
function WeekProgress({
  nTickets,
  nTicketsLastWeek,
}: {
  nTickets: number;
  nTicketsLastWeek: number;
}) {
  const improvement = Math.round(
    ((nTickets - nTicketsLastWeek) / nTicketsLastWeek) * 100
  );
  const isImprovementPositive = improvement > 0;
  const improvementText = isImprovementPositive
    ? `+${improvement}`
    : improvement;
  return (
    <Card x-chunk="dashboard-05-chunk-1">
      <CardHeader className="pb-2">
        <CardDescription>This Week</CardDescription>
        <CardTitle className="text-3xl">{nTickets} Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          {improvementText}% from last week
        </div>
      </CardContent>
      <CardFooter>
        <Progress
          value={improvement}
          aria-label={`${improvement}% ${
            isImprovementPositive ? "increase" : "decrease"
          }`}
        />
      </CardFooter>
    </Card>
  );
}

function MonthProgress({
  nTickets,
  nTicketsLastMonth,
}: {
  nTickets: number;
  nTicketsLastMonth: number;
}) {
  const improvement = Math.round(
    ((nTickets - nTicketsLastMonth) / nTicketsLastMonth) * 100
  );
  const isImprovementPositive = improvement > 0;
  const improvementText = isImprovementPositive
    ? `+${improvement}`
    : improvement;
  return (
    <Card x-chunk="dashboard-05-chunk-3">
      <CardHeader className="pb-2">
        <CardDescription>This Month</CardDescription>
        <CardTitle className="text-3xl">{nTickets} Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          {improvementText}% from last month
        </div>
      </CardContent>
      <CardFooter>
        <Progress
          value={improvement}
          aria-label={`${improvement}% ${
            isImprovementPositive ? "increase" : "decrease"
          }`}
        />
      </CardFooter>
    </Card>
  );
}
export default function TopRow({
  mTickets,
  mTicketsLastMonth,
  wTickets,
  wTicketsLastWeek,
  summary,
}: {
  mTickets: number;
  mTicketsLastMonth: number;
  wTickets: number;
  wTicketsLastWeek: number;
  summary: { title: string; desc: string; buttonText: string };
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Summary
        title={summary.title}
        desc={summary.desc}
        buttonText={summary.buttonText}
      />
      <WeekProgress nTickets={wTickets} nTicketsLastWeek={wTicketsLastWeek} />
      <MonthProgress
        nTickets={mTickets}
        nTicketsLastMonth={mTicketsLastMonth}
      />
    </div>
  );
}
