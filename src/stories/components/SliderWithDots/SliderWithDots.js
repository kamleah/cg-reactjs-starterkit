import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SliderWithDots.css";
import Arrow from "../Arrow/Arrow";
import SliderDots from "../SliderDots/SliderDots";
function SliderWithDots({ images,idx,i ,name}) {
  const getWidth = () => window.innerWidth;
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0 * getWidth(),
    transition: 0.45,
  });
  const { translate, transition, activeIndex } = state;
  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (images.length - 1) * getWidth(),
        activeIndex: images.length - 1,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };
  console.log(activeIndex);
  const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };
  return (
    <div className="DotsSlider">
      <div
        className="SliderContent"
        style={{
          transform: `translateX(-${translate}px)`,
          transition: `transform ease-out ${transition}s`,
          width: `${getWidth() * images.length}px`,
        }}
      >
        {images.map((items, i) => (
          <div
            key={items + 1}
            className="DotsSlide"
            style={{
              backgroundImage: `url("${items}")`,
              width: `${100}%`,
              position: "relative",
            }}
          ></div>
        ))}
      </div>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <SliderDots images={images} activeIndex={activeIndex}/>       
    </div>
  );
}

SliderWithDots.propTypes = {
  images: PropTypes.array,
};
SliderWithDots.defaultProps = {
  images: [
    "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://cdn.pixabay.com/photo/2020/02/15/22/55/couple-4852225__340.jpg",
    "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
    "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
  ],
};
export default SliderWithDots;
