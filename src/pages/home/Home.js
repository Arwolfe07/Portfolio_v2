import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
    return (
        <section className={`${classes.home} grid section`}>
            <img src="https://res.cloudinary.com/des95gv2m/image/upload/v1682761408/IMG20230420191312_zl9gpt.png" alt="Profile Pic" className={classes.home_img} />
            <div className={classes.home_content}>
                <div className={classes.home_data}>
                    <h1 className={classes.home_title}>
                        <span>I'm Aditya Rana.</span> Web Developer
                    </h1>
                    <p className={classes.description}>
                        I'm an Indian based web developer/programmer and I am focused on creating and crafting clean and readable code.
                        I am passionate about learning new technologies and apply them to make new softwares. Also, I'm a coffee addict
                        and like to workout.
                    </p>

                    <Link to='/about' className={`button ${classes.home_btn}`}>
                        More About Me{' '}
                        <span className='button_icon'>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>

            </div>
            <div className={classes.design}></div>
        </section>
    );
};

export default Home;