import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SliderWithText.css";

function Slider({
  slider,
  backgroundColor,
  color,
  SliderAlt,
  TextOneColor,
  TextTwoColor,
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
      <div className="SliderWithText">
        {slider.map((Image) => (
          <div
            className="slideWithText"
            style={{ transform: `translateX(${x}%)` }}
          >
            <img src={Image.Image} alt={SliderAlt} />
            <div className="TextOne">
              <p style={{ backgroundColor: TextOneColor }}>{Image.TextOne}</p>
            </div>
            <div className="TextTwo">
              <p style={{ backgroundColor: TextTwoColor }}>{Image.TextTwo}</p>
            </div>
          </div>
        ))}
        <button
          id="goLeft"
          onClick={goLeft}
          style={{ backgroundColor: backgroundColor }}
        >
          <p style={color && { color }}>&#60;</p>
        </button>
        <button
          id="goRight"
          onClick={goRight}
          style={{ backgroundColor: backgroundColor }}
        >
          <p style={color && { color }}>&#62;</p>
        </button>
      </div>
    </>
  );
}

Slider.propTypes = {
  slider: PropTypes.array,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  TextOne: PropTypes.string,
  TextTwo: PropTypes.string,
  SliderImg: PropTypes.string,
  SliderAlt: PropTypes.string,
  TextOneColor: PropTypes.string,
  TextTwoColor: PropTypes.string,
};

Slider.defaultProps = {
  backgroundColor: "red",
  color: "green",
  TextOne: "Testing is Going On",
  TextTwo: "Testing is Done Succeefully",
  SliderImg:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  SliderAlt:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  TextOneColor: "RGBA(218,216,234,1)",
  TextTwoColor: "RGBA(129,110,223,1)",
  slider: [
    {
      Image:
        "https://cdn.pixabay.com/photo/2020/10/02/21/06/dome-5622133__340.jpg",
      TextOne: "Testing is Going On 1",
      TextTwo: "Teasting is Done Succeefully 1",
    },

    {
      Image:
        "https://cdn.pixabay.com/photo/2020/10/11/20/15/floating-islands-5646926__340.jpg",
      TextOne: "Testing is Going On 2",
      TextTwo: "Teasting is Done Succeefully 2",
    },

    {
      Image:
        "https://cdn.pixabay.com/photo/2020/08/14/15/22/canal-5488271_960_720.jpg",
      TextOne: "Testing is Going On 3",
      TextTwo: "Teasting is Done Succeefully 3",
    },
    {
      Image:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      TextOne: "Testing is Going On 4",
      TextTwo: "Teasting is Done Succeefully 4",
    },

    {
      Image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      TextOne: "Testing is Going On 5",
      TextTwo: "Teasting is Done Succeefully 5",
    },
  ],
};

export default Slider;
