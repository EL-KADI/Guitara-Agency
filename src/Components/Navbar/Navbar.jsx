import "./Navbar-module.css";
import logo from "../../Images/Guitara Agency Logo.png";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isFirstGradient, setIsFirstGradient] = useState(true);

  useEffect(() => {
    const hours = new Date().getHours();
    setIsFirstGradient(Math.floor(hours / 4) % 2 === 0);

    const interval = setInterval(() => {
      setIsFirstGradient((prev) => !prev);
    }, 4 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const gradientClass = isFirstGradient
    ? "bg-gradient-to-r from-[#6A1B9A] to-[#E91E63]"
    : "bg-gradient-to-br from-[#6A1B9A] to-[#1A2437]";

  return (
    <>
      <nav className={gradientClass}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse lg:ms-32 md:ms-24 sm:ms-12 ms-6">
            <img
              src={logo}
              className="h-[50px] w-full object-center object-cover"
              alt="Guitara Agency Logo"
            />
          </div>

          <div className="block w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row custom-media mt-0 lg:me-24 me-12">
              <li>
                <a
                  href="#"
                  className="block custom-font-family font-bold uppercase"
                >
                  Exclusive LiveStreaming Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
