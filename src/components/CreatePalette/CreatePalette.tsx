import React, { useState } from 'react'
import "./CreatePalette.css";
import styled from 'styled-components';
import { themeProps } from 'utils/ThemeConfig';
import IconButton from 'components/IconButton/IconButton';
import { getRandomColor } from 'utils/Colors';
import SingleColor from './SingleColor';
import ColorModel from 'models/ColorModel';
import AllPaletteModel from 'models/AllPaletteModel';
import { useHistory } from 'react-router-dom';

const PaletteWrapperStyled = styled.div`
  background-color: ${(props: themeProps) =>
    props.theme.secondary};
`;

const ColorsStyled = styled.div`
  background-color: ${(props: themeProps) =>props.theme.isDark?"#101010":"#efefef"};
`;

const MAX_COLORS = 5;

export default function CreatePalette() {
    const history = useHistory();
    const [colors, setColors] = useState<
      string[]
    >([]);
    const [focusIndex,setFocusIndex] = useState<number>(0);

    const addRandomColor = ()=>{
        if(colors.length < MAX_COLORS)
        setColors([...colors,getRandomColor()]);
    }

    const resetColors = ()=>{
        setColors([]);
    }

    const updateColor = (color:string,index:number)=>{
        if(colors[index]){
            colors[index] = color;
            //update or remove from list
            setColors([...colors].filter(color=>color.length));
            setFocusIndex(index);
        }
    }

    const saveColor = ()=>{
        let colorModel = new ColorModel(colors,false);
        AllPaletteModel.getInstance().addOrUpdateColor(colorModel);
        history.replace("/dashboard");
    }
    return (
      <div className="createPalette">
        <PaletteWrapperStyled className="paletteWrapper">
          <ColorsStyled className="colors">
            {colors.map((color, index) => (
              <SingleColor  key={color+index} color={color}
              onUpdate={(color)=>updateColor(color,index)}
              focus={index === focusIndex}
              />
            ))}
          </ColorsStyled>
          <div className="actions">
            <div className="actionsLeft">
              <IconButton
                icon="add"
                title="Add Color"
                onClick={() => addRandomColor()}
              />
              <p>{`( Max ${MAX_COLORS} Colors )`}</p>
            </div>
            <div className="actionsRight">
              <IconButton
                icon="redo"
                title="Reset"
                onClick={() => resetColors()}
              />
              <IconButton
                icon="save"
                title="Save"
                onClick={()=>saveColor()}
              />
            </div>
          </div>
        </PaletteWrapperStyled>
      </div>
    );
}
