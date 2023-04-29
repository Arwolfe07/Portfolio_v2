import React from "react";
import classes from "./EduItem.module.css";

const EduItem = ({ icon, year, desc, title }) => {
    return (
            <div className={classes.edu_item}>
                <div className={classes.icon}>{icon}</div>
                <span className={classes.year}>{year}</span>
                <h3 className={classes.subtitle}>{title}</h3>
                <p>{desc}</p>
            </div>
        );
};

export default EduItem;