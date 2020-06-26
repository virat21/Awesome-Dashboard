// import { storiesOf } from "@storybook/react";
import * as React from "react";
import ColorListItem from "../components/ColorListing/ColorListItem";
import CreatePalette from "../components/CreatePalette/CreatePalette";
import {
  withKnobs,
  boolean,
  array
} from "@storybook/addon-knobs";
import StorybookHelper from "../helper/StorybookHelper";
export default {
  component: ColorListItem,
  title: "Color Palette",
  decorators: [withKnobs],
};

export const ColorPaletteItem = () => {
  const isDark = boolean("Dark Mode", false);
  const isFave = boolean("Favorite", false);
  const colors = array("Colors",[
      "red",
      "blue",
      "green"
  ]);
  return (
    <StorybookHelper isDark={isDark}>
      <ColorListItem
        isFavorite={isFave}
        colors={colors}
      />
    </StorybookHelper>
  );
};

export const ColorPaletteCreator = () => {
  const isDark = boolean("Dark Mode", false);
  
  return (
    <StorybookHelper isDark={isDark}>
      <CreatePalette/>
    </StorybookHelper>
  );
};

