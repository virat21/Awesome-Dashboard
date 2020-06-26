import React, { useState } from 'react'
import ColorListItem from './ColorListItem'
import "./ColorListing.css";
import AllPaletteModel from 'models/AllPaletteModel';
export default function ColorListing() {
    let [_,doRefresh] = useState<number>(Date.now());
    let colors = AllPaletteModel.getInstance().colors.sort((a,b)=>{
        return a.isFavorite === b.isFavorite?0:a.isFavorite?-1:1
    });
    
    return (
      <div className="colorListing">
        <div className="colorListingWrapper">
            {colors.map((color,index)=>{
                return (
                  <ColorListItem
                    key={color.id}
                    colors={color.colors}
                    updateFavorite={(isFav) => {
                      color.isFavorite = isFav;
                      color.save();
                      
                      doRefresh(Date.now());
                    }}
                    isFavorite={color.isFavorite}
                    onDelete={() => {
                        AllPaletteModel.getInstance().removeColorById(color.id);
                      color.remove();
                      doRefresh(Date.now());
                    }}
                  />
                );
            })}
          
                  </div>
      </div>
    );
}
