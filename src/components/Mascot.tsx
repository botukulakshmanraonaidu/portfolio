import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const greetings = [
  "Hello! 👋",
  "Let's build AI! 🚀",
  "Hire me! 💼",
  "Check projects! 💡",
];

const Mascot = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % greetings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed bottom-24 right-6 z-40 cursor-pointer select-none"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, delay: 1.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setShowMessage(!showMessage)}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* AI Robot mascot */}
        <div className="w-14 h-14 relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/40 rounded-2xl blur-xl animate-pulse-glow" />
          
          {/* Head/Body */}
          <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-2xl border border-primary/30 shadow-lg overflow-hidden">
            {/* Face screen */}
            <div className="absolute inset-1.5 bg-background/95 rounded-xl flex items-center justify-center">
              {/* Eyes */}
              <div className="flex gap-2">
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
              </div>
            </div>
            
            {/* Antenna */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
              <motion.div
                animate={{ rotate: [-8, 8, -8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-0.5 h-3 bg-primary rounded-full origin-bottom"
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Speech bubble */}
        <AnimatePresence mode="wait">
          {showMessage && (
            <motion.div
              key={messageIndex}
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-10 -left-20 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
            >
              {greetings[messageIndex]}
              <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-2 h-2 bg-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Mascot;
