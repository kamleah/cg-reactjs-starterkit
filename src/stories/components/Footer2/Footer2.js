import React from "react";
import PropTypes from "prop-types";
import "./Footer2.css";
import FooterMenu from "../FooterMenuLink/FooterMenuLink";
import FooterLink from "../FooterLink/FooterLink";

export const Footer2 = ({
  FooterTitle,
  CopyRightText,
  BottomContent,
  SocialIcons,
  FooterMenuData,
}) => {
  return (
    <div>
      <div className="Footer21">
        <div className="layer11">
          <div className="left1">
            <h4>{FooterTitle} </h4>
            <h6>{CopyRightText}</h6>
          </div>
          <div className="right1">
            {SocialIcons.map((item, index) => (
              <div key={index}>
                <FooterLink
                  logoImg={item.src}
                  logoUrl={item.src}
                  logoAlt={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <br></br>
        <div className="layer21">
          {FooterMenuData.map((item, index) => (
            <div key={index}>
              <FooterMenu
                FooterMenuTitles={item.title}
                FooterMenuLinks={item.href}
              />
            </div>
          ))}
        </div>
        <br></br>
        <div className="layer31">
          <p>
            <small>{BottomContent}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

Footer2.propTypes = {
  FooterTitle: PropTypes.string,
  CopyRightText: PropTypes.string,
  SocialIcons: PropTypes.array,
  FooterMenuData: PropTypes.array,
  BottomContent: PropTypes.string,
};

Footer2.defaultProps = {
  FooterTitle: "giffgaff runs on the O2 network",
  CopyRightText: "Copyright @ 2020 giffgaff",
  BottomContent:
    "giffgaff Limited is authorised and regulated by the Financial Conduct Authority and is listed on the Financial Services Register. Firm Reference Number - 680957. Registered address – giffgaff Limited, 260 Bath Road, Slough SL1 4DX. Company Number - 04196996.",
  SocialIcons: [
    {
      src: "https://www.flaticon.com/svg/static/icons/svg/38/38669.svg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
    },
    {
      src: "https://www.flaticon.com/svg/static/icons/svg/61/61045.svg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
    },
    {
      src: "https://www.flaticon.com/svg/static/icons/svg/1384/1384049.svg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
    },
    {
      src: "https://www.flaticon.com/premium-icon/icons/svg/3536/3536438.svg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
    },
    {
      src: "https://www.flaticon.com/svg/static/icons/svg/1419/1419647.svg",
      title: "Switch To Celcom Mega for Unlimited or lightoning speed internet",
      description:
        "The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback",
    },
  ],
  FooterMenuData: [
    {
      title: "About us",
      href: "abc.com",
    },
    {
      title: "Accessibility",
      href: "abcd.com",
    },
    {
      title: "Affliates",
      href: "nhju.com",
    },
    {
      title: "jobs",
      href: "ljfs.com",
    },
    {
      title: "Contact us",
      href: "ljfs.com",
    },

    {
      title: "Mobile App",
      href: "ljfs.com",
    },
    {
      title: "Terms and Conditions",
      href: "ljfs.com",
    },
    {
      title: "Privacy policy",
      href: "ljfs.com",
    },

    {
      title: "cookie policy",
      href: "ljfs.com",
    },
    {
      title: "Modern Salivary statement",
      href: "ljfs.com",
    },
  ],
};

export default Footer2;
