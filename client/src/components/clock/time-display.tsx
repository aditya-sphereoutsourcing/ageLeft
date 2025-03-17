import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

interface TimeDisplayProps {
  currentTime: Date;
}

export default function TimeDisplay({ currentTime }: TimeDisplayProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300 dark:bg-slate-900/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">⌚ Current Time</CardTitle>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Clock className="h-4 w-4 text-muted-foreground" />
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.div
            key={currentTime.getTime()}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent"
          >
            {format(currentTime, "HH:mm:ss")}
          </motion.div>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
            📅 {format(currentTime, "EEEE, MMMM do yyyy")}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}