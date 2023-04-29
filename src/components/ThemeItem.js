import React from "react";
import classes from "./ThemeItem.module.css";

const ThemeItem = ({color,img, changeColor}) =>{
    return <img src={img} alt='' className={classes.theme_img} onClick={()=>{changeColor(color)}}/>
};

export default ThemeItem;