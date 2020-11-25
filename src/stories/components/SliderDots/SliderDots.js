import React from "react";
import "./SliderDots.css";
import PropTypes from "prop-types";
const Dot = ({ active,...props }, ) => (
  <span className={`SliderDotsSpan ${active ? "active" : ""}`}  {...props} />
);

const SliderDots = ({ images, activeIndex,idx ,onClick,...props}) => (
  <div className="SlidersDotsIs">
    {images.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} onClick={() => onClick(idx)}  {...props}/>
    ))}
  </div>
);

SliderDots.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func,
};
SliderDots.defaultProps = {
  images: [
    "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
    "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
    "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
  ],
};

export default SliderDots;
