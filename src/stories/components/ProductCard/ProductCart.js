import React from "react";
import PropTypes from "prop-types";
import "./ProductCart.css";
import Button from "../Button/Button";
import Badges2 from "../Badges2/Badges2";
function ProductCart({
  backgroundColor,
  productImg,
  productImgalt,
  productName,
  productStock,
  productPriceNew,
  productPriceOld,
  offPercentage,
}) {
  return (
    <div className="productCard" style={backgroundColor && { backgroundColor }}>
      <div className="offPercentage">
        <Badges2 items={offPercentage} />
      </div>
      <div className="productImg">
        <img src={productImg} alt={productImgalt}></img>
      </div>
      <div className="productDetails">
        <div className="productName">
          <h5>{productName}</h5>
        </div>
        <div className="productStock">
          <h5>{productStock}</h5>
        </div>
        <div className="productPrice">
          <del>{productPriceOld}</del>
          <p>{productPriceNew}</p>
        </div>
        <div className="productAdd">
          <Button buttonTitle="Buy Now" />
        </div>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  backgroundColor: PropTypes.string,
  productImg: PropTypes.string,
  productName: PropTypes.string,
  productStock: PropTypes.string,
  productPriceOld: PropTypes.string,
  productPriceNew: PropTypes.string,
  offPercentage: PropTypes.string,
};
ProductCart.defaultProps = {
  backgroundColor: "red",
  productImg:
    "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  productName: "Shampoo",
  productStock: "In Stock",
  productPriceOld: "150",
  productPriceNew: "100",
  offPercentage: "17",
};

export default ProductCart;
