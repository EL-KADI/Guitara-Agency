import React, { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import "./MainComponent-module.css";
import mountain from "../../Images/300 (2).jpeg";
import Landscape from "../../Images/300 (3).jpeg";
import Waterfall from "../../Images/300 (1).jpeg";
import logo from "../../Images/images.jpeg";
import animation from "../../Images/giphy.gif";
import tiktoklogo from "../../Images/tiktok-logo.gif";
import street from "../../Images/300.jpeg";

const images = [
  mountain,
  Landscape,
  Waterfall,
  logo,
  animation,
  tiktoklogo,
  street,
];

function AnimatedWord({ text, color, isVisible }) {
  return (
    <>
      <span
        className={`custom-word ${color}`}
        style={{
          display: "inline-block",
          marginRight: "0.5rem",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className="letter-animation "
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    </>
  );
}

function HexagonCell({ children, className = "", position, onImageClick }) {
  return (
    <div
      className={`hexagon relative w-32 h-32 md:w-40 md:h-40 m-2 overflow-hidden transition-transform ${className}`}
      onClick={() => onImageClick(position)}
    >
      <div className="hexagon-inner w-full h-full">{children}</div>
    </div>
  );
}

function Modal({ image, position, onClose }) {
  const [hasRotated, setHasRotated] = useState(false);

  const handleClose = () => {
    const modalElement = document.querySelector(".modal-content");
    modalElement.classList.add("rotate-exit");
    setTimeout(onClose, 1500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ${position}`}
      onClick={handleClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] mx-4 modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>
        <div className={`hexagon-modal ${!hasRotated ? "modal-rotate" : ""}`}>
          <img
            src={image}
            alt="Expanded view"
            className="clipped-image w-full h-full object-cover"
            onAnimationEnd={() => setHasRotated(true)}
          />
        </div>
      </div>
    </div>
  );
}

function Main() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [visibleWordIndex, setVisibleWordIndex] = useState(0);

  const words = [
    { text: "TikTok.", color: "custom-purple" },
    { text: "BigoLive.", color: "custom-blue" },
    { text: "MicoLive.", color: "custom-red" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2920);

    return () => clearInterval(interval);
  }, [words.length]);

  const handleImageClick = useCallback((position) => {
    let imageIndex;
    switch (position) {
      case "top-left":
        imageIndex = 0;
        break;
      case "top-right":
        imageIndex = 1;
        break;
      case "slide-left":
        imageIndex = 3;
        break;
      case "middle":
        imageIndex = 4;
        break;
      case "slide-right":
        imageIndex = 5;
        break;
      case "bottom-left":
        imageIndex = 2;
        break;
      case "bottom-right":
        imageIndex = 6;
        break;
      default:
        imageIndex = 0;
    }

    setSelectedImage(images[imageIndex]);
    setSelectedPosition(position);

    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-[#10151f] to-[#263248] flex-col flex items-center justify-center p-8 py-20">
        <div className="flex justify-center mb-16 ">
          <span className="text-white text-lg font-semibold mr-2 whitespace-nowrap">
            LiveStreaming Services for
          </span>
          <div className="flex items-center translate-x-10 sm:translate-x-12 -translate-y-2">
            {words.map((word, index) => (
              <AnimatedWord
                key={word.text}
                text={word.text}
                color={word.color}
                isVisible={index === visibleWordIndex}
              />
            ))}
          </div>
        </div>

        <div className="hex-container lg:max-w-4xl container">
          <div className="flex justify-center -mx-8">
            <HexagonCell
              position="top-left"
              onImageClick={() => handleImageClick("top-left")}
            >
              <img
                src={images[0]}
                alt="Mountain"
                className="clipped-image w-full h-full object-cover cursor-pointer"
              />
            </HexagonCell>
            <HexagonCell
              position="top-right"
              onImageClick={() => handleImageClick("top-right")}
            >
              <img
                src={images[1]}
                alt="Landscape"
                className="clipped-image w-full h-full object-cover cursor-pointer"
              />
            </HexagonCell>
          </div>

          <div className="flex justify-center -mx-8 -my-14">
            <HexagonCell
              position="slide-left"
              className="bg-white my-6 md:my-2 sm:my-4"
              onImageClick={() => handleImageClick("slide-left")}
            >
              <img
                src={images[3]}
                alt="logo"
                className="clipped-image w-full h-full object-cover cursor-pointer"
              />
            </HexagonCell>
            <HexagonCell
              position="middle"
              className="bg-slate-800 my-6 md:my-2 sm:my-4"
              onImageClick={() => handleImageClick("middle")}
            >
              <img
                src={images[4]}
                alt="giphy"
                className="clipped-image w-full h-full object-cover cursor-pointer"
              />
            </HexagonCell>
            <HexagonCell
              position="slide-right"
              className="bg-black my-6 md:my-2 sm:my-4"
              onImageClick={() => handleImageClick("slide-right")}
            >
              <img
                src={images[5]}
                alt="tiktok logo"
                className="clipped-image w-full h-full object-cover cursor-pointer"
              />
            </HexagonCell>
          </div>

          <div className="flex justify-center -mx-8">
            <HexagonCell
              position="bottom-left"
              onImageClick={() => handleImageClick("bottom-left")}
            >
              <img
                src={images[2]}
                alt="Waterfall"
                className="clipped-image w-full h-full object-cover cursor-pointer"
              />
            </HexagonCell>
            <HexagonCell
              position="bottom-right"
              onImageClick={() => handleImageClick("bottom-right")}
            >
              <img
                src={images[6]}
                alt="Street"
                className="clipped-image w-full h-full object-cover cursor-pointer"
              />
            </HexagonCell>
          </div>
        </div>

        {selectedImage && (
          <Modal
            image={selectedImage}
            position={selectedPosition}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </>
  );
}

export default Main;
