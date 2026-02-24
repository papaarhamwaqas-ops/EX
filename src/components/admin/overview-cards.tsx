import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, UserCheck, Clock } from "lucide-react";

const stats = [
  {
    title: "Total Tests Listed",
    value: "1,250",
    icon: <FileText className="size-6 text-muted-foreground" />,
  },
  {
    title: "Active Teachers",
    value: "82",
    icon: <UserCheck className="size-6 text-muted-foreground" />,
  },
  {
    title: "Pending Approvals",
    value: "4",
    icon: <Clock className="size-6 text-muted-foreground" />,
  },
];

export function OverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
