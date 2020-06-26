import React from "react";
import "../index.css";
import { ThemeProvider } from "styled-components";
import { getTheme, themeName } from "utils/ThemeConfig";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";

const StorybookHelper: React.FC<{
  isDark?:boolean
}> = ({
  children,isDark = false
}) => {
  return (
    <ThemeProvider
      theme={getTheme(
        isDark ? themeName.DARK : themeName.LIGHT
      )}
    >
      <GlobalStyles/>
      <div
      style={{
        width:"100vw",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
      >
      {children}
      </div>
    </ThemeProvider>
  );
};

export default StorybookHelper;
