import { motion } from "framer-motion";
import gsap from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorSize = 20;
  const cursorRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMousePosition = (e) => {
    const mouseX = e.clientX - cursorSize / 2;
    const mouseY = e.clientY - cursorSize / 2;
    gsap.to(cursorRef.current, {
      duration: 0.2,
      x: mouseX,
      y: mouseY,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMousePosition);
    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="__Cursor fixed h-[1.2vw] w-[1.2vw] rounded-full bg-zinc-400 mix-blend-difference"
    ></motion.div>
  );
};

export default Cursor;
