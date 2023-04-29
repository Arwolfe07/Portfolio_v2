import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Themes from "../components/Themes";

const RootLayout = () => {
    return <>
        <Navbar />
        <Themes/>
        <Outlet />
    </>
};

export default RootLayout;
