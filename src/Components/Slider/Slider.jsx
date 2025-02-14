import { useState, useEffect, useRef } from "react";
import sliderimg from "../../Images/Slider.jpeg";

const slides = [
  {
    id: 1,
    image: sliderimg,
  },
  {
    id: 2,
    image: sliderimg,
  },
  {
    id: 3,
    image: sliderimg,
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getPositionX = (e) => {
    return e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(getPositionX(e) - currentTranslate);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentPosition = getPositionX(e) - startPos;
    setCurrentTranslate(currentPosition);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const threshold = 100;
    const diff = currentTranslate;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      } else {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }
    setCurrentTranslate(0);
  };

  return (
    <div className="relative md:w-full overflow-hidden md:h-[550px] object-center object-cover bg-gray-900">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-out h-full touch-pan-y"
        style={{
          transform: `translateX(calc(-${currentSlide * 100}% + ${currentTranslate}px))`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-orange-500 scale-125"
                : "bg-white opacity-50 hover:opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;