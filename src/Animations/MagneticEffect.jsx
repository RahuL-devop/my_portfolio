import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

const MagneticEffect = ({ children }) => {
  const ref = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <>
      <motion.div
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}
        animate={{ x, y }}
        ref={ref}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 3,
          restDelta: 0.001,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default MagneticEffect;
