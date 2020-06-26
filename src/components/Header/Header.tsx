import React from "react";
import "./Header.css";
import styled from 'styled-components';
import { themeProps } from 'utils/ThemeConfig';
import DarkModeButton from "components/DarkModeButton/DarkModeButton";

const HeaderStyled = styled.div`
background-color : ${(props : themeProps)=>props.theme.secondary};
`
export const Header: React.FC<{
         toggleTheme?: () => any;
       }> = ({ toggleTheme = () => {} }) => {
         return (
           <>
           <HeaderStyled className="header">
             <div className="headerWrapper">
               <div className="brandName">
                 <img
                   src={require("../../assets/pantone.svg")}
                   alt="Color Tuner"
                 />
                 <span className="brandTitle">
                   Color Tuner
                 </span>
               </div>
               <div className="menuItems">
                 
                 <DarkModeButton
                   onClick={() => {
                     toggleTheme();
                   }}
                 />
                
               </div>
             </div>
           </HeaderStyled>
           <div className="headerStatic" />
           </>
         );
       };
export default Header;