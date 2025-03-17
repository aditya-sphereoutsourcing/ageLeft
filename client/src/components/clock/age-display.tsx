import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differenceInDays, differenceInYears, differenceInMonths, addYears } from "date-fns";
import { Calendar } from "lucide-react";

interface AgeDisplayProps {
  birthDate: Date;
  currentTime: Date;
}

export default function AgeDisplay({ birthDate, currentTime }: AgeDisplayProps) {
  const years = differenceInYears(currentTime, birthDate);
  const days = differenceInDays(currentTime, birthDate);

  // Calculate next birthday
  const nextBirthday = addYears(birthDate, years + 1);
  const monthsToNextBirthday = differenceInMonths(nextBirthday, currentTime);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Age Statistics</CardTitle>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <div className="text-2xl font-bold">{years} years</div>
            <p className="text-xs text-muted-foreground">Current Age</p>
          </div>
          <div>
            <div className="text-2xl font-bold">{days} days</div>
            <p className="text-xs text-muted-foreground">Days Since Birth</p>
          </div>
          <div>
            <div className="text-2xl font-bold">{monthsToNextBirthday} months</div>
            <p className="text-xs text-muted-foreground">Until Next Birthday</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}