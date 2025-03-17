import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differenceInDays, differenceInYears, differenceInMonths, addYears, isSameDay } from "date-fns";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import CelebrationEffects from "./celebration-effects";

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

  // Calculate time until 35
  const age35Date = new Date(2031, 5, 27); // June 27, 2031
  const yearsTo35 = 35 - years;
  const monthsTo35 = differenceInMonths(age35Date, currentTime);
  const daysTo35 = differenceInDays(age35Date, currentTime);

  // Check for birthday
  const isBirthday = isSameDay(
    new Date(currentTime.getFullYear(), birthDate.getMonth(), birthDate.getDate()),
    currentTime
  );

  // Check for milestone (every 5 years)
  const isMilestone = years > 0 && years % 5 === 0 && isBirthday;

  const statVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <CelebrationEffects
        show={isBirthday}
        message={isMilestone ? `🎉 Happy ${years}th Birthday! 🎉` : "🎂 Happy Birthday! 🎂"}
        type="birthday"
      />
      <CelebrationEffects
        show={!isBirthday && isMilestone}
        message={`🌟 ${years} Years Milestone! 🌟`}
        type="milestone"
      />
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="hover:shadow-lg transition-shadow duration-300 dark:bg-slate-900/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">📊 Age Statistics</CardTitle>
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
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {years} years 🎈
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">Current Age</p>
              </motion.div>

              <motion.div variants={statVariants}>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
                  {days} days ⏳
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">Days Since Birth</p>
              </motion.div>

              <motion.div variants={statVariants}>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-200 dark:to-purple-200 bg-clip-text text-transparent">
                  {monthsToNextBirthday} months 🎂
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">Until Next Birthday</p>
              </motion.div>

              <motion.div
                variants={statVariants}
                className="pt-2 border-t border-border"
              >
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">🎯 Time until 35</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-100 dark:to-purple-100 bg-clip-text text-transparent">
                        {yearsTo35}y
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">Years</p>
                    </div>
                    <div>
                      <div className="text-xl font-bold bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-50 dark:to-purple-50 bg-clip-text text-transparent">
                        {monthsTo35}m
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">Months</p>
                    </div>
                    <div>
                      <div className="text-xl font-bold bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-50 dark:to-purple-50 bg-clip-text text-transparent">
                        {daysTo35}d
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">Days</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}