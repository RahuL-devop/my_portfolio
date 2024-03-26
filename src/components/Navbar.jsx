import React, { useState } from "react";
import MagneticEffect from "../Partials/MagneticEffect";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import AnimatedHam from "../Partials/AnimatedHam";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [hover, setHover] = useState(false);
  const [ishover, setIsHover] = useState(false);
  const [hashover, setHasHover] = useState(false);
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

  const handleHover = () => {
    setHover((prev) => !prev);
  };
  const handleSecondHover = () => {
    setIsHover((prev) => !prev);
  };
  const handleThirdHover = () => {
    setHasHover((prev) => !prev);
  };

  const [elemHover1, setElemhover1] = useState(false);
  const [elemHover2, setElemhover2] = useState(false);
  const [elemHover3, setElemhover3] = useState(false);
  const [elemHover4, setElemhover4] = useState(false);

  const handlelemHover1 = () => {
    setElemhover1((prev) => !prev);
  };

  const handlelemHover2 = () => {
    setElemhover2((prev) => !prev);
  };
  const handlelemHover3 = () => {
    setElemhover3((prev) => !prev);
  };
  const handlelemHover4 = () => {
    setElemhover4((prev) => !prev);
  };

  const NavParent = {
    open: { x: "20%" },
    inView: { x: 0 },
    exit: { x: "5%" },
  };

  const NavChild = {
    open: { x: "20%" },
    inView: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
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
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHover}
                      href="#Work"
                      className=" p-[12px] text-[1.2vw] 
                "
                    >
                      Work
                    </a>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: hover ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -bottom-3 left-3 inline-block h-2 w-2 rounded-full bg-white "
                    ></motion.span>
                  </div>
                </MagneticEffect>
                <MagneticEffect>
                  <div className="relative">
                    <a
                      onMouseEnter={handleSecondHover}
                      onMouseLeave={handleSecondHover}
                      href="#About"
                      className="inline-block text-[1.2vw] tracking-tighter 
                "
                    >
                      About
                    </a>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: ishover ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -bottom-3 left-3 inline-block h-2 w-2 rounded-full bg-white "
                    ></motion.span>
                  </div>
                </MagneticEffect>
                <MagneticEffect>
                  <div className="relative">
                    <a
                      onMouseEnter={handleThirdHover}
                      onMouseLeave={handleThirdHover}
                      href="#Contact"
                      className="inline-block text-[1.2vw] tracking-tighter 
                "
                    >
                      Contact
                    </a>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: hashover ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -bottom-3 left-3 inline-block h-2 w-2 rounded-full bg-white "
                    ></motion.span>
                  </div>
                </MagneticEffect>
              </div>
            )}

            {!hidden && (
              <div className="navbar-menu-smallDevices block md:flex md:hidden">
                <MagneticEffect>
                  <div className="relative">
                    <a
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHover}
                      href="#Work"
                      className="inline-block text-[5.2vw]  tracking-tighter
                "
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
                  <motion.div
                    initial="open"
                    whileInView="inView"
                    exit="exit"
                    variants={NavParent}
                    className="nav-items mt-8 flex flex-col gap-4"
                  >
                    <div
                      onMouseEnter={handlelemHover1}
                      onMouseLeave={handlelemHover1}
                      className="elem relative h-[3.4vw] overflow-hidden"
                    >
                      <motion.a
                        href="#"
                        className="one block h-[3.4vw]  text-[3.5vw] leading-none text-white"
                        variants={NavChild}
                        initial={{ y: 0 }}
                        animate={{ y: elemHover1 ? "-100%" : 0 }}
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
                        variants={NavChild}
                        initial={{ y: 0 }}
                        animate={{ y: elemHover1 ? "-100%" : 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                      >
                        Home
                      </motion.a>
                    </div>

                    <div
                      onMouseEnter={handlelemHover2}
                      onMouseLeave={handlelemHover2}
                      className="elem h-[3.4vw] overflow-hidden"
                    >
                      <motion.a
                        href="#"
                        className="one block h-[3.4vw]  text-[3.5vw] leading-none text-white"
                        variants={NavChild}
                        initial={{ y: 0 }}
                        animate={{ y: elemHover2 ? "-100%" : 0 }}
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
                        variants={NavChild}
                        initial={{ y: 0 }}
                        animate={{ y: elemHover2 ? "-100%" : 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                      >
                        Work
                      </motion.a>
                    </div>

                    <div
                      onMouseEnter={handlelemHover3}
                      onMouseLeave={handlelemHover3}
                      className="elem h-[3.4vw] overflow-hidden"
                    >
                      <motion.a
                        href="#"
                        className="one block h-[3.4vw]  text-[3.5vw] leading-none text-white"
                        variants={NavChild}
                        initial={{ y: 0 }}
                        animate={{ y: elemHover3 ? "-100%" : 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                      >
                        work
                      </motion.a>
                      <motion.a
                        href="#"
                        className="two block -translate-y-10 text-[3.5vw] leading-none text-white "
                        variants={NavChild}
                        initial={{ y: 0 }}
                        animate={{ y: elemHover3 ? "-100%" : 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.175, 0.885, 0.32, 1.275],
                        }}
                      >
                        work
                      </motion.a>
                    </div>

                    <div
                      onMouseEnter={handlelemHover4}
                      onMouseLeave={handlelemHover4}
                      className="elem h-[3.4vw] overflow-hidden"
                    >
                      <motion.a
                        href="#"
                        className="one block h-[3.4vw]  text-[3.5vw] leading-none text-white"
                        variants={NavChild}
                        initial={{ y: 0 }}
                        animate={{ y: elemHover4 ? "-100%" : 0 }}
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
                        variants={NavChild}
                        initial={{ y: 0 }}
                        animate={{ y: elemHover4 ? "-100%" : 0 }}
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
