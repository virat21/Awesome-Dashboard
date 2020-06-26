import React from 'react'
import "./SideBarItem.css";
import styled from 'styled-components';
import { themeProps } from 'utils/ThemeConfig';

interface SideBarItemProps{
    isActive?:boolean,
    theme:themeProps
}

const SideBarItemStyled = styled.div<
  SideBarItemProps
>`
  border-bottom-color: ${(props) =>
    props.theme.isDark ? "#444" : "#dfdfdf"};
  color: ${(props) =>
    props.isActive
      ? "#fff"
      : props.theme.textColor};
  background-color: ${(props) =>
    props.isActive ? "#2196f3" : "transparent"};
  &:hover {
    background-color: ${(props) =>
      props.isActive
        ? "#2196f3"
        : props.theme.isDark
        ? "#444"
        : "#efefef"};
  }
`;

export const SideBarItem: React.FC<{
         name: string;
         icon: string;
         isActive?: boolean;
         onClick?:()=>any
       }> = ({ name, icon, isActive = false,onClick = ()=>{}}) => {
         return (
           <SideBarItemStyled
             className="sideBarItem"
             isActive={isActive}
             onClick={() => onClick()}
           >
             <span className="menuIcon material-icons">
               {icon}
             </span>
             <span className="menuTitle">
               {name}
             </span>
           </SideBarItemStyled>
         );
       };

export default SideBarItem;
