import React from 'react'
import "./SingleColor.css";

export const SingleColor: React.FC<{
         color: string;
         onUpdate?: (color: string) => any;
         focus:boolean,
       }> = ({
           color,onUpdate = ()=>{},focus = false,
       }) => {
         return (
           <span
             className="singleColor"
             style={{
               backgroundColor: color,
             }}
           >
             <div></div>
             <div>
               <input
                 autoFocus={focus}
                 type="text"
                 name="color"
                 id={`${color}${Date.now()}`}
                 maxLength={7}
                 defaultValue={color}
                 placeholder="Color"
                 onChange={(e) => {
                   onUpdate(e.target.value);
                 }}
               />
             </div>
           </span>
         );
       };

export default SingleColor;
