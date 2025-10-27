"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CinematicFooter from "./components/CinematicFooter";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#0a0014] via-[#1a0033] to-[#0a0014] text-white overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      {/* <Portfolio /> */}
      {/* <Values /> */}
      {/* <Contact /> */}
      <CinematicFooter />
    
    </main>
  );
}
