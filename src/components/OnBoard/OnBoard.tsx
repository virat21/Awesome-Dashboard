import React from "react";
import styled from "styled-components";
import "./OnBoard.css";
import HeroSection from "components/Hero/HeroSection";
import { themeProps } from "utils/ThemeConfig";
import { LoginWithAuth } from "components/Login/Login";
import Footer from "components/Footer/Footer";


const getBG = (props: themeProps) => {
  return props.theme.isDark
    ? require("../../assets/bgDark.png")
    : require("../../assets/bgLight.png");
};
const OnBoardWrapper = styled.div`
  background-image: url(${(props) =>getBG(props)});
  background-size: cover;
`;

export const OnBoard  = () => {
  return (
    <div className="onBoardContainer">
      <OnBoardWrapper className="onBoardWrapper">
        <div className="heroSection">
          <HeroSection />
        </div>
        <div className="loginSection">
          <LoginWithAuth />
        </div>
      </OnBoardWrapper>
      <Footer />
    </div>
  );
};

