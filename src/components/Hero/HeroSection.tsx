import React from 'react'
import "./HeroSection.css";
import { ThemeConsumer } from 'styled-components';
import { themeParams } from 'utils/ThemeConfig';

export default function HeroSection() {
    return (
      <div className="hero">
        <span className="heroWrapper">
          <ThemeConsumer>
            {(theme: themeParams) => (
              <img
                src={
                  theme.isDark
                    ? require("../../assets/heroDark.svg")
                    : require("../../assets/hero.svg")
                }
                alt="hero"
              />
            )}
          </ThemeConsumer>
        </span>
        <span className="heroTitle">
          <p>Designers' Secret Source</p>
          <p>The best color tuner tool.</p>
        </span>
      </div>
    );
}
