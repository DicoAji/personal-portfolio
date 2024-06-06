import "./App.css";
import About from "./component/About";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Experience from "./component/Experience";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Footer from "./component/Footer";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    ScrollReveal().reveal(".slide-right", {
      duration: 3000,
      origin: "left",
      distance: "300px",
      reset: true,
    });
    ScrollReveal().reveal(".slide-bottom", {
      duration: 3000,
      origin: "top",
      distance: "300px",
      reset: true,
    });
    ScrollReveal().reveal(".slide-left", {
      duration: 3000,
      origin: "right",
      distance: "300px",
      reset: true,
    });
    ScrollReveal().reveal(".slide-top", {
      duration: 3000,
      origin: "bottom",
      distance: "300px",
      reset: true,
    });
    ScrollReveal().reveal(".rotate", {
      duration: 3000,
      rotate: { x: 0, y: 0, z: 360 }, // Rotasi 360 derajat di sumbu Z
      reset: true, // Menjalankan animasi kembali saat elemen terlihat
    });
    const textPathElement = document.querySelector(".text-curve");
    textPathElement.classList.add("rotate-animation");
  }, []);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
