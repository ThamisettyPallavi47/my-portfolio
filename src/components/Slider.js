import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "../styles/Slider.css";

const Slider = ({ items, renderItem, className = "", autoPlay = false, interval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const goToPrevious = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  if (!items.length) return null;

  return (
    <div className={`slider-wrapper ${className}`.trim()}>
      <div className="slider-frame">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="slider-content"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {renderItem(items[activeIndex], activeIndex)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="slider-controls">
        <button type="button" className="slider-nav-button" onClick={goToPrevious} aria-label="Previous">
          <FaChevronLeft />
        </button>

        <div className="slider-dots" aria-label="Slide pagination">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`slider-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button type="button" className="slider-nav-button" onClick={goToNext} aria-label="Next">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
