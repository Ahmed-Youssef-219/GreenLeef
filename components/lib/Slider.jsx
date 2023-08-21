'use client'
import React, { useEffect, useRef, useState } from "react";

const Slider = ({ children, card }) => {
  const cardsContainer = useRef();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [val, setVal] = useState(true);

  let timeoutId;

  const startDrag = (event) => {
    setIsMouseDown(true);
    setStartX(event.pageX);
    setStartScrollLeft(cardsContainer.current.scrollLeft);
  };

  const dragging = (event) => {
    if (!isMouseDown) {
      return;
    }
    cardsContainer.current.scrollLeft =
      startScrollLeft - (event.pageX - startX);
  };

  const stopDrag = () => {
    setIsMouseDown(false);
  };

  const handleNext = () => {
    cardsContainer.current.scrollLeft += card.current.offsetWidth + 32;
  };
  const handlePrev = () => {
    cardsContainer.current.scrollLeft -= card.current.offsetWidth + 32;
  };

  const autoScroll = () => {
    timeoutId = setTimeout(() => {
      cardsContainer.current.scrollLeft += card.current.offsetWidth + 32;
    }, 2000);
  };

  const infinity = () => {
    if (cardsContainer.current.scrollLeft === 0) {
      cardsContainer.current.scrollLeft =
        cardsContainer.current.scrollWidth -
        cardsContainer.current.offsetWidth -
        10;
    } else if (
      Math.ceil(cardsContainer.current.scrollLeft) ===
      cardsContainer.current.scrollWidth - cardsContainer.current.offsetWidth
    ) {
      cardsContainer.current.scrollLeft = 10;
    }
    clearTimeout(timeoutId);
    if (!cardsContainer.current.matches(":hover")) {
      setVal((prev) => !prev);
    }
  };

  useEffect(() => {
    autoScroll();
  }, [val]);
  return (
    <>
      <div className="flex items-center justify-between px-4 w-full">
        <button onClick={handlePrev} className="text-3xl hidden sm:flex">
          ←
        </button>
        <div
          className="cursor-grab grid gap-4 images_container overflow-x-hidden scroll-smooth"
          ref={cardsContainer}
          onMouseMove={dragging}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onScroll={infinity}
          onMouseLeave={() => {
            setVal((prev) => !prev);
          }}
        >
          {children}
        </div>
        <button onClick={handleNext} className="text-3xl hidden sm:flex">
          →
        </button>
      </div>
    </>
  );
};

export default Slider;
