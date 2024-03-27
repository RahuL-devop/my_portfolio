import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import React, { useState } from "react";

const AnimatedHam = ({ isOpen, setIsOpen }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="relative">
        <motion.button
          initial={false}
          onClick={() => setIsOpen((pev) => !pev)}
          className={`relative z-[2] h-16 w-16 rounded-full bg-[#1c1d20] outline-none duration-200 hover:bg-[#455CE9] ${isOpen ? "bg-[#455CE9]" : ""}`}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.span
            style={{
              top: "40%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            className="first absolute z-[2] h-[1px] w-[27px] bg-white"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["40%", "50%", "50%"],
              },

              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
              },
            }}
          />
          <motion.span
            style={{
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute z-[2] h-[1px] w-[27px] bg-white"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
              },

              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
              },
            }}
          />
        </motion.button>
      </div>
    </MotionConfig>
  );
};

export default AnimatedHam;
