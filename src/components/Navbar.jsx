import React, { useState } from "react";
import MagneticEffect from "../Animations/MagneticEffect";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import AnimatedHam from "../Animations/AnimatedHam";
import Dot_Animation from "../Animations/Dot_Animation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [hamburgerVisible, setHamburgerVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (latestValue > 120) {
      setHidden(true);
      setHamburgerVisible(true); // Ensure hamburger menu is visible when navbar is hidden
    } else if (latestValue < 50) {
      setHidden(false);
      setHamburgerVisible(false); // Optionally, hide hamburger menu when navbar is visible
    }
  });

  const [hoveredElement, setHoveredElement] = useState(null);

  const handleHover = (elementName) => {
    setHoveredElement(elementName);
  };

  return (
    <>
      <div className="navbar relative">
        <motion.div
          variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="__Navbar fixed left-0 top-0 w-full px-4 py-8 font-[500]  text-[#fff]  md:px-10 md:py-8 "
        >
          <div className="__Navbar-container flex items-center justify-between">
            <MagneticEffect>
              <div className="navbar-logo flex cursor-pointer items-center">
                <span className="inline-block pr-1 font-[600] md:pr-2 md:text-[1.3vw] ">
                  ©
                </span>
                <h1 className="font-[600] tracking-tighter">Code by Rahul</h1>
              </div>
            </MagneticEffect>

            {!hidden && (
              <div className="navbar-menu-largeDevices hidden items-center gap-10 md:flex">
                <MagneticEffect>
                  <div className="relative">
                    <a
                      onMouseEnter={() => handleHover("Work")}
                      onMouseLeave={() => handleHover(null)}
                      href="#Work"
                      className=" p-[12px] text-[1.2vw] 
                "
                    >
                      Work
                    </a>
                    <Dot_Animation isHovered={hoveredElement === "Work"} />
                  </div>
                </MagneticEffect>
                <MagneticEffect>
                  <div className="relative">
                    <a
                      onMouseEnter={() => handleHover("About")}
                      onMouseLeave={() => handleHover(null)}
                      href="#About"
                      className="inline-block text-[1.2vw] tracking-tighter 
                "
                    >
                      About
                    </a>
                    <Dot_Animation isHovered={hoveredElement === "About"} />
                  </div>
                </MagneticEffect>
                <MagneticEffect>
                  <div className="relative">
                    <a
                      onMouseEnter={() => handleHover("Contact")}
                      onMouseLeave={() => handleHover(null)}
                      href="#Contact"
                      className="inline-block text-[1.2vw] tracking-tighter 
                "
                    >
                      Contact
                    </a>
                    <Dot_Animation isHovered={hoveredElement === "Contact"} />
                  </div>
                </MagneticEffect>
              </div>
            )}

            {!hidden && (
              <div className="navbar-menu-smallDevices block md:hidden">
                <MagneticEffect>
                  <div className="relative">
                    <a
                      href="#Work"
                      className="inline-block text-[5.2vw]  tracking-tighter"
                    >
                      Menu
                    </a>
                    <motion.span className="absolute -left-3 bottom-[10px] inline-block h-1 w-1 rounded-full bg-white p-[3px]"></motion.span>
                  </div>
                </MagneticEffect>
              </div>
            )}
          </div>
        </motion.div>
        <AnimatePresence>
          {hamburgerVisible && (
            <motion.div
              key={`hamburgerMenu`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
              className="__hamMenu fixed right-2 top-8 z-[1] h-16 w-16 cursor-pointer  overflow-hidden rounded-full"
            >
              <AnimatedHam isOpen={isOpen} setIsOpen={setIsOpen} />
            </motion.div>
          )}
          {isOpen && (
            <motion.div
              key={`MainMenu`}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.8 }}
              className="menu_smallDevices fixed right-0 top-0 h-screen w-[35vw] bg-[#1C1D20]"
            >
              <div className="Nav-container_mobile px-[6vw] py-[6vw]">
                <div className="nav-items-container">
                  <p className="mb-5 text-xs text-zinc-500">NAVIGATION</p>
                  <span className="inline-block h-[0.6px] w-full bg-zinc-700"></span>
                  <motion.div className="nav-items mt-8 flex flex-col gap-4">
                    <div
                      onMouseEnter={() => handleHover("Home")}
                      onMouseLeave={() => handleHover(null)}
                      className="elem relative h-[3.4vw] overflow-hidden"
                    >
                      <motion.a
                        href="#"
                        className="one block h-[3.4vw] text-[3.5vw] leading-none text-white"
                        initial={{ y: 0 }}
                        animate={{ y: hoveredElement === "Home" ? "-100%" : 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                      >
                        Home
                      </motion.a>
                      <motion.a
                        href="#"
                        className="two block -translate-y-10 text-[3.5vw] leading-none text-white "
                        initial={{ y: 0 }}
                        animate={{ y: hoveredElement === "Home" ? "-100%" : 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                      >
                        Home
                      </motion.a>
                    </div>

                    <div
                      onMouseEnter={() => handleHover("Work")}
                      onMouseLeave={() => handleHover(null)}
                      className="elem h-[3.4vw] overflow-hidden"
                    >
                      <motion.a
                        href="#"
                        className="one block h-[3.4vw]  text-[3.5vw] leading-none text-white"
                        initial={{ y: 0 }}
                        animate={{ y: hoveredElement === "Work" ? "-100%" : 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                      >
                        Work
                      </motion.a>
                      <motion.a
                        href="#"
                        className="two block -translate-y-10 text-[3.5vw] leading-none text-white "
                        initial={{ y: 0 }}
                        animate={{ y: hoveredElement === "Work" ? "-100%" : 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                      >
                        Work
                      </motion.a>
                    </div>

                    <div
                      onMouseEnter={() => handleHover("About")}
                      onMouseLeave={() => handleHover(null)}
                      className="elem h-[3.4vw] overflow-hidden"
                    >
                      <motion.a
                        href="#"
                        className="one block h-[3.4vw]  text-[3.5vw] leading-none text-white"
                        initial={{ y: 0 }}
                        animate={{
                          y: hoveredElement === "About" ? "-100%" : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                      >
                        About
                      </motion.a>
                      <motion.a
                        href="#"
                        className="two block -translate-y-10 text-[3.5vw] leading-none text-white "
                        initial={{ y: 0 }}
                        animate={{
                          y: hoveredElement === "About" ? "-100%" : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                      >
                        About
                      </motion.a>
                    </div>

                    <div
                      onMouseEnter={() => handleHover("Contact")}
                      onMouseLeave={() => handleHover(null)}
                      className="elem h-[3.4vw] overflow-hidden"
                    >
                      <motion.a
                        href="#"
                        className="one block h-[3.4vw]  text-[3.5vw] leading-none text-white"
                        initial={{ y: 0 }}
                        animate={{
                          y: hoveredElement === "Contact" ? "-100%" : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                      >
                        Contact
                      </motion.a>
                      <motion.a
                        href="#"
                        className="two block -translate-y-10 text-[3.5vw] leading-none text-white "
                        initial={{ y: 0 }}
                        animate={{
                          y: hoveredElement === "Contact" ? "-100%" : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                      >
                        Contact
                      </motion.a>
                    </div>
                  </motion.div>
                  <div className="nav-socials-contaier mt-36 cursor-pointer">
                    <p className="text-xs uppercase text-zinc-500">socials</p>
                    <div className="nav-socials mt-4 flex gap-5">
                      <p className="text-sm text-zinc-200 ">Instagram</p>
                      <p className="text-sm text-zinc-200 ">Facebook</p>
                      <p className="text-sm text-zinc-200 ">LinkedIn</p>
                      <p className="text-sm text-zinc-200 ">Github</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
