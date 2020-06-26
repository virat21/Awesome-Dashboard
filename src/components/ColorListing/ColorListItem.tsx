import React, { useState } from 'react'
import "./ColorListItem.css"
import styled from 'styled-components'
import { themeProps } from 'utils/ThemeConfig'


const ActionStyled = styled.div`
background-color : ${(props : themeProps)=>props.theme.secondary};
`;

interface iconProps {
  readonly isActive?: boolean;
  readonly theme?:themeProps;
};

const IconStyled = styled.span<iconProps>`
  color: ${(props) => props.isActive?"#f44336":props.theme.isDark ? "#444" : "#ccc"};
`;

export const ColorListItem: React.FC<{
         colors: string[];
         isFavorite:boolean;
         updateFavorite?: (isFav: boolean) => any;
         onDelete?: () => any;
       }> = ({
         colors,
         updateFavorite = () => {},
         onDelete = () => {},
         isFavorite
       }) => {
         let [isFav, setFavorite] = useState(
           isFavorite
         );

         const toggleFavorite = () => {
           updateFavorite(!isFav);
           setFavorite(!isFav);
         };

         return (
           <div className="colorListItem">
             <div className="colors">
               {colors.map((color, index) => {
                 return (
                   <span
                     key={color + index}
                     style={{
                       backgroundColor: color,
                     }}
                     className="color"
                   ></span>
                 );
               })}
             </div>
             <ActionStyled className="actionContainer">
               <span>
                 <IconStyled
                   className={`material-icons`}
                   isActive={isFav}
                   onClick={() =>
                     toggleFavorite()
                   }
                 >
                   favorite
                 </IconStyled>
               </span>
               <span>
                 <IconStyled
                   className="material-icons"
                   onClick={() => onDelete()}
                 >
                   delete
                 </IconStyled>
               </span>
             </ActionStyled>
           </div>
         );
       };


export default ColorListItem;