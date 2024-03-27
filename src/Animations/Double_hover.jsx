import { motion } from "framer-motion";
import React from "react";

const Double_hover = ({ text, hoveredElement, handleHover, textSize }) => {
  return (
    <div
      onMouseEnter={() => handleHover(text)}
      onMouseLeave={() => handleHover(null)}
      className="elem relative h-[3.4vw] overflow-hidden"
    >
      <motion.a
        href="#"
        className={`one block h-[3.4vw]  ${textSize ? `text-${textSize}` : "text-[3.5vw"}  text-[3.5vw] leading-none text-white`}
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
        className={`two block h-[3.4vw]  ${textSize ? `text-${textSize}` : "text-[3.5vw"}  text-[3.5vw] leading-none text-white`}
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
