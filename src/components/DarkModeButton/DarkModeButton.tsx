import React from 'react'
import "./DarkModeButton.css";
import styled from 'styled-components';
import { themeProps } from 'utils/ThemeConfig';

const SunMoonStyled = styled.span`
  background-color: ${({ theme }: themeProps) =>
    theme.isDark ? "#fff" : "#ffeb3b"};
`;

const MoonFaceStyled = styled.span`
  transform: translateX(
      ${({ theme }: themeProps) =>
        theme.isDark ? "10px" : "30px"}
    )
    translateY(
      ${({ theme }: themeProps) =>
        theme.isDark ? "-5px" : "-30px"}
    );
`;


export const DarkModeButton : React.FC<{onClick:()=>any}> = ({
    onClick = ()=>{}
})=>{
    return (
      <div
        onClick={onClick}
        className="darkModeBtn"
      >
        <SunMoonStyled className="sunMoon">
          <MoonFaceStyled className="moonFace"></MoonFaceStyled>
        </SunMoonStyled>
      </div>
    );
}

export default DarkModeButton;
