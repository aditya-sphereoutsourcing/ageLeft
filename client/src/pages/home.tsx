import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import TimeDisplay from "@/components/clock/time-display";
import AgeDisplay from "@/components/clock/age-display";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="w-full max-w-2xl mx-4 p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Personal Time Dashboard</h1>
          <p className="text-muted-foreground">
            Tracking time since June 27, 1996
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <TimeDisplay currentTime={currentTime} />
          <AgeDisplay birthDate={new Date(1996, 5, 27)} currentTime={currentTime} />
        </div>
      </Card>
    </div>
  );
}
