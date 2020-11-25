import React from "react";
import PropTypes from "prop-types";
import "./DotsSlider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const DotsSlider = ({ sliderData,interval }) => {
  return (
    <div>
        
      <Carousel style={{height: "auto"}}>
        {sliderData.map((item) => (
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={item.src}
              alt={item.src}
            />
            <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

DotsSlider.propTypes = {
    sliderData: PropTypes.array,
};

DotsSlider.defaultProps = {
  sliderData: [
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

export default DotsSlider;
