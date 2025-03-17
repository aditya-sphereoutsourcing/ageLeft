import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import TimeDisplay from "@/components/clock/time-display";
import AgeDisplay from "@/components/clock/age-display";
import { motion } from "framer-motion";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

      {/* Decorative Characters */}
      <div className="absolute top-10 left-10 text-6xl animate-bounce">🚀</div>
      <div className="absolute bottom-10 right-10 text-6xl animate-pulse">🎯</div>
      <div className="absolute top-10 right-10 text-6xl animate-bounce delay-150">⭐️</div>
      <div className="absolute bottom-10 left-10 text-6xl animate-pulse delay-150">🌟</div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-2xl mx-4 p-8 space-y-8 backdrop-blur-sm bg-white/80 dark:bg-slate-950/80 shadow-xl dark:shadow-slate-900/50">
          <motion.div 
            className="text-center space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              ⏰ Personal Time Dashboard
            </h1>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              🎂 Tracking time since June 27, 1996
            </p>
            <div className="text-xl mt-2 space-x-2">
              <span title="Buzz Lightyear">🚀</span>
              <span title="Mickey Mouse">🐭</span>
              <span title="Woody">🤠</span>
              <span title="Tinker Bell">🧚‍♀️</span>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <TimeDisplay currentTime={currentTime} />
            <AgeDisplay birthDate={new Date(1996, 5, 27)} currentTime={currentTime} />
          </div>
        </Card>
      </motion.div>
    </div>
  );
}