// import { storiesOf } from "@storybook/react";
import * as React from "react";
import {Login} from "../components/Login/Login";
import {
  withKnobs, boolean,
} from "@storybook/addon-knobs";
import StorybookHelper from "../helper/StorybookHelper"
export default {
  component: Login,
  title: "Login",
  decorators: [withKnobs],
};

export const LoginCard = ()=>{
const isDark = boolean("Dark Mode",false);
return (
  <StorybookHelper isDark={isDark}>
    <Login />
  </StorybookHelper>
);}