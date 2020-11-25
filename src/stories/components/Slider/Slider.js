import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Slider.css";

function Slider({
  slider,
  backgroundColor,
  color,
}) {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (slider.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (slider.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <>
      <div className="Slider">
        {slider.map((Image) => (
          <div className="slide" style={{ transform: `translateX(${x}%)` }}>
            <img src={Image.Image} alt={Image.Image} />
          </div>
        ))}
      </div>
      <button
        id="goLefts"
        onClick={goLeft}
        style={{ backgroundColor: backgroundColor }}
      >
        <p style={color && { color }}>&#60;</p>
      </button>
      <button
        id="goRights"
        onClick={goRight}
        style={{ backgroundColor: backgroundColor }}
      >
        <p style={color && { color }}>&#62;</p>
      </button>
    </>
  );
}

Slider.propTypes = {
  slider: PropTypes.array,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  SliderImg: PropTypes.string,
  SliderImgAlt: PropTypes.string,
};

Slider.defaultProps = {
  backgroundColor: "red",
  color: "green",
  SliderImg:
    "https://cdn.pixabay.com/photo/2020/10/02/21/06/dome-5622133__340.jpg",
  SliderImgAlt:
    "https://cdn.pixabay.com/photo/2020/10/02/21/06/dome-5622133__340.jpg",
  slider: [
    {
      Image:
        "https://cdn.pixabay.com/photo/2020/10/02/21/06/dome-5622133__340.jpg",
    },

    {
      Image:
        "https://cdn.pixabay.com/photo/2020/10/11/20/15/floating-islands-5646926__340.jpg",
    },

    {
      Image:
        "https://cdn.pixabay.com/photo/2020/08/14/15/22/canal-5488271_960_720.jpg",
    },
    {
      Image:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },

    {
      Image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
  ],
};

export default Slider;
