import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CardSlider.css";

function CardSlider({ slider }) {
  console.log(slider.length);
  const [x, setX] = useState(0);

  const prevClick = () => {
    x === 0 ? setX(-100 * (slider.length - 4)) : setX(x + 100);
  };

  const nextClick = () => {
    x === -100 * (slider.length - 4) ? setX(0) : setX(x - 100);
  };

  return (
    <>
      <div>
        <div className="wrapper">
          <div className="app">
            {slider.map((item, index) => (
              <div
                className="card1"
                key={index}
                style={{ transform: `translateX(${x}%)` }}
              >
                <img src={item.src} alt={item.src}></img>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <a href="/">RadMore</a>
              </div>
            ))}
          </div>
          <button className="prev " onClick={prevClick}>
            &#8249;
          </button>
          <button className="next " onClick={nextClick}>
            &#8250;
          </button>
        </div>
      </div>
    </>
  );
}

CardSlider.propTypes = {
  slider: PropTypes.array,
};

CardSlider.defaultProps = {
  slider: [
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/21/09/33/rose-5589514__340.jpg",
      title: "Product 01",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/21/21/24/landscape-5591270__340.jpg",
      title: "Product 02",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/18/13/05/lynx-5581792__340.jpg",
      title: "Product 03",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/24/16/12/roosters-5599141__340.jpg",
      title: "Product 04",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/21/16/08/seascape-5590487__340.jpg",
      title: "Product 05",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/11/17/01/landscape-5563684__340.jpg",
      title: "Product 06",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/22/07/27/gaillardia-5592172__340.jpg",
      title: "Product 07",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/27/12/21/children-5606512__340.jpg",
      title: "Product 08",
      description: "Tutorial of Slide Show",
    },
  ],
};
export default CardSlider;
