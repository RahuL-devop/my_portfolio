import { motion } from "framer-motion";
import React from "react";

const Dot_Animation = ({ isHovered }) => {
  return (
    <>
      <motion.div
        className="dot-Scale_Animation absolute -bottom-3 left-5 inline-block h-1 w-1 rounded-full bg-white"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      ></motion.div>

      <div></div>
    </>
  );
};

export default Dot_Animation;
