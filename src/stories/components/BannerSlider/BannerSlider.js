import React, { useState } from "react";
import PropTypes from "prop-types";
import "./BannerSlider.css";
import LinkButton from "../LinkButton/LinkButton";
import ImgComponent from "../ImgComponent/ImgComponent";
const BannerSlider = ({ href, BannerDataFields }) => {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (BannerDataFields.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (BannerDataFields.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="BannerTop">
      {/* Bannner Slider is starts from here */}
      {BannerDataFields.map((index) => (
        <div className="MainBanner" style={{ transform: `translateX(${x}%)` }}>
          <div className="BannerHeading">
            <h2>{index.title}</h2>
          </div>
          <div className="Bannerapp">
            <div className="BannerSlider">
              <div className="BannerSliderImg">
                <ImgComponent
                  ImgSrc={index.src}
                  alt={index.src}
                  height={250}
                  width={450}
                ></ImgComponent>
              </div>
              <div className="BannerSliderText">
                <div className="BannerHeading BannerHeadingsm">
                  <h3>{index.title}</h3>
                </div>
                <div className="Bannerparagraph BannerHeadingsm">
                  <p>{index.description}</p>
                </div>
                <div className="BannerButton">
                  <LinkButton href={href} size="smalls" varient="primarys">
                    {index.buttonName}
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button id="goLeft" onClick={goLeft} style={{ backgroundColor: "red" }}>
        <p>&#60;</p>
      </button>
      <button id="goRight" onClick={goRight} style={{ backgroundColor: "red" }}>
        <p>&#62;</p>
      </button>
    </div>
  );
};

BannerSlider.propTypes = {
  BannerDataFields: PropTypes.array,
  src: PropTypes.string,
  title: PropTypes.string,
  buttonName: PropTypes.string,
};

BannerSlider.defaultProps = {
  BannerDataFields: [
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/21/09/33/rose-5589514__340.jpg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
      buttonName: "click Me",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/21/21/24/landscape-5591270__340.jpg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
      buttonName: "click Me",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/18/13/05/lynx-5581792__340.jpg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
      buttonName: "click Me",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/24/16/12/roosters-5599141__340.jpg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
      buttonName: "click Me",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/21/16/08/seascape-5590487__340.jpg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
      buttonName: "click Me",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/11/17/01/landscape-5563684__340.jpg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
      buttonName: "click Me",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/22/07/27/gaillardia-5592172__340.jpg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
      buttonName: "click Me",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/27/12/21/children-5606512__340.jpg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
      buttonName: "click Me",
    },
  ],
};

export default BannerSlider;
