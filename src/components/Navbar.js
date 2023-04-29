import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen
} from "react-icons/fa";
import classes from "./Navbar.module.css";

const navbarlinks = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className={classes.nav_icon} />,
        path: '/',
    },

    {
        id: 2,
        name: 'About',
        icon: <FaUser className={classes.nav_icon} />,
        path: '/about',
    },

    {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className={classes.nav_icon} />,
        path: '/portfolio',
    },

    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className={classes.nav_icon} />,
        path: '/contact',
    },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const menuClickHandler = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className={classes.nav}>
            <div className={showMenu ? `${classes.nav_menu} ${classes.show_menu}` : `${classes.nav_menu}`}>
                <ul className={classes.nav_list}>
                    {navbarlinks.map(({ name, icon, path, id }) => {
                        return (
                            <li className={classes.nav_item} id={id}>
                                <NavLink to={path}
                                    className={({ isActive }) => isActive ? `${classes.nav_link} ${classes.active}` : `${classes.nav_link}`}
                                    onClick={menuClickHandler}>
                                    {icon}
                                    <h3 className={classes.item_name}>{name}</h3>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className={showMenu ? `${classes.toggle} ${classes.animate_toggle}` : `${classes.toggle}`}
                onClick={menuClickHandler}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );

};

export default Navbar;