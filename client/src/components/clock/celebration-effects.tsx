import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect } from "react";

interface CelebrationEffectsProps {
  show: boolean;
  message: string;
  type: 'birthday' | 'milestone';
}

export function triggerConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#ff0000', '#00ff00', '#0000ff'],
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#ff0000', '#00ff00', '#0000ff'],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

export default function CelebrationEffects({ show, message, type }: CelebrationEffectsProps) {
  useEffect(() => {
    if (show) {
      triggerConfetti();
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`text-4xl font-bold text-center p-8 rounded-2xl ${
              type === 'birthday' ? 'text-pink-500' : 'text-purple-500'
            }`}
            initial={{ scale: 0.5, y: 50 }}
            animate={{ 
              scale: [0.5, 1.2, 1],
              y: [50, -20, 0],
              rotate: [0, -10, 10, 0]
            }}
            transition={{
              duration: 0.8,
              times: [0, 0.5, 1],
              ease: "easeOut"
            }}
          >
            {message}
            <div className="text-2xl mt-2">
              {type === 'birthday' ? '🎂 🎈 🎉' : '🎯 🌟 🎊'}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
