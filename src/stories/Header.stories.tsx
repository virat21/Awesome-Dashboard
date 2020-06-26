// import { storiesOf } from "@storybook/react";
import * as React from "react";
import Header from "../components/Header/Header";
import DarkModeButton from "../components/DarkModeButton/DarkModeButton";
import {
  withKnobs,
  boolean,
} from "@storybook/addon-knobs";
import StorybookHelper from "../helper/StorybookHelper";
export default {
  component: Header,
  title: "Header",
  decorators: [withKnobs],
};

export const HeaderFull = () => {
         const isDark = boolean(
           "Dark Mode",
           false
         );
         return (
           <StorybookHelper isDark={isDark}>
             <Header 

             />
           </StorybookHelper>
         );
       };

export const DarkModeButtonDemo = ()=>{
     const isDark = boolean("Dark Mode", false);
     return (
       <StorybookHelper isDark={isDark}>
         <DarkModeButton onClick={()=>{}} />
       </StorybookHelper>
     );
}