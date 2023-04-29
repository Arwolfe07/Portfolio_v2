import React, { useEffect, useState } from "react";
import ThemeItem from "./ThemeItem";
import classes from "./Themes.module.css";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import Theme1 from '../assets/purple.png';
import Theme2 from '../assets/red.png';
import Theme3 from '../assets/blueviolet.png';
import Theme4 from '../assets/blue.png';
import Theme5 from '../assets/goldenrod.png';
import Theme6 from '../assets/magenta.png';
import Theme7 from '../assets/yellowgreen.png';
import Theme8 from '../assets/orange.png';
import Theme9 from '../assets/green.png';
import Theme10 from '../assets/yellow.png';

const themes = [
    {
        id: 1,
        img: Theme1,
        color: 'hsl(252, 35%, 51%)',
    },

    {
        id: 2,
        img: Theme2,
        color: 'hsl(4, 93%, 54%)',
    },

    {
        id: 3,
        img: Theme3,
        color: 'hsl(271, 76%, 53%)',
    },

    {
        id: 4,
        img: Theme4,
        color: 'hsl(225, 73%, 57%)',
    },

    {
        id: 5,
        img: Theme5,
        color: 'hsl(43, 74%, 49%)',
    },

    {
        id: 6,
        img: Theme6,
        color: 'hsl(339, 81%, 66%)',
    },

    {
        id: 7,
        img: Theme7,
        color: 'hsl(80, 61%, 50%)',
    },

    {
        id: 8,
        img: Theme8,
        color: 'hsl(19, 96%, 52%)',
    },

    {
        id: 9,
        img: Theme9,
        color: 'hsl(88, 65%, 43%)',
    },

    {
        id: 10,
        img: Theme10,
        color: 'hsl(42, 100%, 50%)',
    },
];

const getColor = () => {
    let color = 'hsl(271, 76%, 53%)';
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color');
    }
    return color;
}

const getTheme = () =>{
    let theme = 'light-theme';
    if(localStorage.getItem('theme')){
        theme = localStorage.getItem('theme');
    }
    return theme;
}

const Themes = () => {
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState(getColor());
    const [theme, setTheme] = useState(getTheme());

    const switcherHandler = () => {
        setShowSwitcher(!showSwitcher);
    }

    const changeColorHandler = (color) => {
        setColor(color);
    }

    const toggleThemeHandler = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        }
        else {
            setTheme('light-theme');
        }
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color])

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (<div>
        <div className={`${classes.style_switch} ${showSwitcher ? classes.show_color_switch : ''}`}>
            <div className={classes.color_toggler} onClick={switcherHandler}>
                <FaCog />
            </div>

            <div className={classes.theme_toggler} onClick={toggleThemeHandler}>
                {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
            </div>

            <h3 className={classes.color_title}>Style Switcher</h3>
            <div className={classes.color_switcher_items}>
                {themes.map((theme, index) => {
                    return (
                        <ThemeItem key={index} {...theme} changeColor={changeColorHandler} />
                    );
                })}
            </div>
            <div className={classes.color_close} onClick={switcherHandler}>
                &times;
            </div>

        </div>


    </div>);
};

export default Themes;