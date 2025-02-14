import { initFlowbite } from "flowbite";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Slider from "./Components/Slider/Slider";
import MainComponent from "./Components/MainComponent/MainComponent";
import Contact from "./Components/Contact/Contact";
import { ArrowUp } from "lucide-react";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    initFlowbite();

    const handleScroll = () => {
      if (window.scrollY > 520) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Slider />
      <MainComponent />
      <Contact />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#3D414E] hover:bg-[#CCA876] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
}

export default App;
