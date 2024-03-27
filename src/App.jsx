import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cursor from "./Animations/Cursor";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="Main_container mx-auto max-w-screen-2xl overflow-auto bg-[#999D9E]">
      <Cursor />
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
