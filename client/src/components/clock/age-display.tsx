import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differenceInDays, differenceInYears, differenceInMonths, addYears } from "date-fns";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

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

  const statVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Age Statistics</CardTitle>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.div 
            className="space-y-3"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div variants={statVariants}>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {years} years
              </div>
              <p className="text-xs text-muted-foreground">Current Age</p>
            </motion.div>

            <motion.div variants={statVariants}>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent">
                {days} days
              </div>
              <p className="text-xs text-muted-foreground">Days Since Birth</p>
            </motion.div>

            <motion.div variants={statVariants}>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary/80 to-primary/60 bg-clip-text text-transparent">
                {monthsToNextBirthday} months
              </div>
              <p className="text-xs text-muted-foreground">Until Next Birthday</p>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}