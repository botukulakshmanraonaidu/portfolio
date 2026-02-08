import { motion } from "framer-motion";

const Mascot = () => {
  return (
    <motion.div
      className="fixed bottom-24 right-6 z-40 cursor-pointer select-none"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Robot mascot body */}
        <div className="w-16 h-16 relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl" />
          
          {/* Head/Body */}
          <div className="relative w-full h-full bg-gradient-to-br from-primary/90 to-accent/90 rounded-2xl border-2 border-primary/50 shadow-lg overflow-hidden">
            {/* Face screen */}
            <div className="absolute inset-2 bg-background/90 rounded-xl flex items-center justify-center">
              {/* Eyes */}
              <div className="flex gap-2">
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="w-2.5 h-2.5 bg-primary rounded-full"
                />
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="w-2.5 h-2.5 bg-primary rounded-full"
                />
              </div>
            </div>
            
            {/* Antenna */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <motion.div
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-1 h-4 bg-primary rounded-full origin-bottom"
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full animate-pulse" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Speech bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          className="absolute -top-12 -left-16 bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap"
        >
          Hello! 👋
          <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-foreground" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Mascot;
