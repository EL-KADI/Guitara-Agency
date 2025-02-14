import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import eg from "../../Images/eg.jpeg";
import qa from "../../Images/qa.jpeg";
import iq from "../../Images/iq.jpeg";
import bh from "../../Images/bh.jpeg";
import sa from "../../Images/sa.jpeg";
import ae from "../../Images/ae.jpeg";
import sr from "../../Images/sr.jpeg";
import "./Contact-module.css";

const CounterComponent = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  return count;
};

export default function Contact() {
  return (
    <>
      <div className="bg-[#20304F]">
        <div className="flex items-center justify-center  pt-9">
          <a className="-translate-x-9" href="#">
            <span className=" group">
              <FaFacebook className=" text-[#CCCCCC] text-2xl group-hover:-translate-y-3.5   group-hover:text-[#0000FF] transition-all duration-500" />
            </span>
          </a>
          <a className="-translate-x-3.5" href="#">
            <span className="group">
              <BsTwitter className="text-[#CCCCCC] text-2xl group-hover:-translate-y-3.5  group-hover:text-[#0000FF] transition-all duration-500" />
            </span>
          </a>
          <a className="translate-x-1.5" href="#">
            <span className="group">
              <FaLinkedin className="text-[#CCCCCC] text-2xl group-hover:-translate-y-3.5 group-hover:text-[#0000FF] transition-all duration-500" />
            </span>
          </a>
          <a className="translate-x-7" href="#">
            <span className="group">
              <BsInstagram className="text-[#CCCCCC] text-2xl group-hover:-translate-y-3.5 group-hover:text-[#0000FF] transition-all duration-500" />
            </span>
          </a>
        </div>
        <hr className="w-48 h-[0.05rem] mx-auto mt-6 bg-white border-0 rounded-sm  " />
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
          <div className="col-span-1 lg:ms-8 mt-4 lg:mt-0 flex flex-col lg:items-start items-center  lg:text-left">
            <h2 className="text-white font-extrabold text-4xl italic custom-f-f">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 gap-3 mt-4">
              <div className="flex items-center justify-center lg:justify-start">
                <a
                  target="_blank"
                  className="flex"
                  href="https://wa.me/201282020076"
                >
                  <FaWhatsapp className="me-2 text-white text-[14px]" />
                  <h2 className="text-white text-[10px]">+20 1282020076</h2>
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <a
                  target="_blank"
                  className="flex"
                  href="mailto:contact@guitaraagency.com"
                >
                  <MdOutlineEmail className="me-2 text-white text-[14px]" />
                  <h2 className="text-white text-[10px]">
                    contact@guitaraagency.com
                  </h2>
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <a
                  target="_blank"
                  className="flex"
                  href="https://www.google.com/maps/place/Guitara+grop/"
                >
                  <IoLocationOutline className="me-2 text-white text-[14px]" />
                  <h2 className="text-white text-[10px]">
                    1 Mahmoud Taimour St, Almaza, Heliopolis, Cairo
                  </h2>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 xl:col-span-2 lg:me-auto xl:mx-auto flex justify-center mt-1">
            <div className="flex flex-wrap lg:flex-nowrap  justify-center  lg:gap-3 gap-4">
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[14px] me-1"
                  src={eg}
                  alt="Flag of Egypt"
                />
                <h6 className="text-[12px] xl:w-[82px] 2xl:w-max text-white font-sans font-semibold">
                  Egypt: <CounterComponent end={2259} />
                </h6>
              </div>
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[14px] me-1"
                  src={sa}
                  alt="Flag of Saudi Arabia:"
                />
                <h6 className="text-[12px]  xl:w-[108px] 2xl:w-max text-white font-sans font-semibold">
                  Saudi Arabia: <CounterComponent end={30} />
                </h6>
              </div>
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[14px] me-1"
                  src={ae}
                  alt="Flag of UAE"
                />
                <h6 className="text-[12px]  xl:w-[50px] 2xl:w-max text-white font-sans font-semibold">
                  UAE: 0
                </h6>
              </div>
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[14px] me-1"
                  src={qa}
                  alt="Flag of Qatar"
                />
                <h6 className="text-[12px] xl:w-[60px] 2xl:w-max  text-white font-sans font-semibold">
                  Qatar: 0
                </h6>
              </div>
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[14px] me-1"
                  src={bh}
                  alt="Flag of Bahrain"
                />
                <h6 className="text-[12px]  xl:w-[70px] 2xl:w-max text-white font-sans font-semibold">
                  Bahrain: 0
                </h6>
              </div>
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[14px] me-1"
                  src={sr}
                  alt="Flag of Syria"
                />
                <h6 className="text-[12px]  xl:w-[50px] 2xl:w-max text-white font-sans font-semibold">
                  Syria: 0
                </h6>
              </div>
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[14px] me-1"
                  src={iq}
                  alt="Flag of Iraq"
                />
                <h6 className="text-[12px]  xl:w-[50px] 2xl:w-max text-white font-sans font-semibold">
                  Iraq: 0
                </h6>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-48 lg:w-80 h-[0.05rem] lg:h-[0.13rem] mx-auto lg:-mt-8 mt-4 bg-white border-0 rounded-sm  " />
        <h2 className="text-center mt-10 text-[#eeeeee] text-[15px] font-semibold">
          ©2025 GuitaraGroup | All Rights Reserved
        </h2>
        <br />
      </div>
    </>
  );
}
