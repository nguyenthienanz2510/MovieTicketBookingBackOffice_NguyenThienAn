import React from "react";
import useWindowSize from "../../hook/useWindowSize";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import HeaderTablet from "./HeaderTablet";

export default function HeaderResponsive() {
  let windowSize = useWindowSize();
  let renderHeader = () => {
    if (windowSize.width > 992) {
      return <HeaderDesktop />;
    } else if (windowSize.width > 768) {
      return <HeaderTablet />;
    } else {
      return <HeaderMobile />;
    }
  };
  return <div>{renderHeader()}</div>;
}
