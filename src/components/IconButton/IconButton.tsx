import React from 'react'
import "./IconButton.css";
import styled from 'styled-components';
import { themeProps } from 'utils/ThemeConfig';

const ButtonStyled = styled.button`
  color: ${(props: themeProps) =>
    props.theme.textColor};
  border-color: ${(props) =>
    props.theme.isDark ? "#444" : "#dfdfdf"};

  &:hover {
    border-color: ${(props) =>
      props.theme.isDark ? "#888" : "#aaa"};
  }

  &:active {
    border-color: ${(props) =>
      props.theme.isDark ? "#fff" : "#000"};
  }
`;

export const IconButton : React.FC<{
    onClick?:()=>any,
    icon:string,
    title:string,
}> = ({onClick=()=>{},icon,title})=>{
    return (
      <ButtonStyled
        className="iconButton"
        onClick={() => onClick()}
      >
        <span className="material-icons">
          {icon}
        </span>
        <span>{title}</span>
      </ButtonStyled>
    );
}

export default IconButton;
