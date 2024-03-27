import { motion } from "framer-motion";
import React from "react";

const Double_hover = ({ text, hoveredElement, handleHover, textSize }) => {
  return (
    <div
      onMouseEnter={() => handleHover(text)}
      onMouseLeave={() => handleHover(null)}
      className="elem relative h-[11.4vw] overflow-hidden md:h-[3.4vw]"
    >
      <motion.a
        href="#"
        className={`one block ${textSize ? `text-${textSize}` : "text-[11.5vw] md:text-[3.5vw] "} text-[3.5vw] leading-none text-white`}
        initial={{ y: 0 }}
        animate={{ y: hoveredElement === text ? "-100%" : 0 }}
        transition={{
          duration: 0.5,
          ease: [0.175, 0.885, 0.32, 1.275],
        }}
      >
        {text}
      </motion.a>
      <motion.a
        href="#"
        className={`two block ${textSize ? `text-${textSize}` : "text-[3.5vw"}  text-[3.5vw] leading-none text-white`}
        initial={{ y: 0 }}
        animate={{ y: hoveredElement === text ? "-100%" : 0 }}
        transition={{
          duration: 0.5,
          ease: [0.175, 0.885, 0.32, 1.275],
        }}
      >
        {text}
      </motion.a>
    </div>
  );
};

export default Double_hover;
