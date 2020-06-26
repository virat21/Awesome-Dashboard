// import { storiesOf } from "@storybook/react";
import * as React from "react";
import HeroSection from "../components/Hero/HeroSection"
import {
  withKnobs,
  boolean,
} from "@storybook/addon-knobs";
import StorybookHelper from "../helper/StorybookHelper";
export default {
  component: HeroSection,
  title: "Hero",
  decorators: [withKnobs],
};

export const HeroDetails = () => {
  const isDark = boolean("Dark Mode", false);
  return (
    <StorybookHelper isDark={isDark}>
      <HeroSection />
    </StorybookHelper>
  );
};
