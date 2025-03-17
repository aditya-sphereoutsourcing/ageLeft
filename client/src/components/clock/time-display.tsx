import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Clock } from "lucide-react";

interface TimeDisplayProps {
  currentTime: Date;
}

export default function TimeDisplay({ currentTime }: TimeDisplayProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Current Time</CardTitle>
        <Clock className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {format(currentTime, "HH:mm:ss")}
        </div>
        <p className="text-xs text-muted-foreground">
          {format(currentTime, "EEEE, MMMM do yyyy")}
        </p>
      </CardContent>
    </Card>
  );
}
