import React from "react";
import classes from "./Contact.module.css"
import { FiSend, } from "react-icons/fi";
import { FaEnvelope, FaInstagram, FaWhatsapp, FaSquareRootAlt } from "react-icons/fa";
import { BsGithub, BsWhatsapp } from "react-icons/bs";

const Contact = () => {

    return (
        <section className={`section ${classes.contact}`}>
            <h2 className="section_title">
                Contact <span>Me</span>
            </h2>
            <div className={`${classes.contact_container} container grid`}>
                <div className={classes.contact_data}>
                    <h3 className={classes.contact_title}>Go For It !</h3>
                    <p className={classes.contact_desc}>
                        Don't be shy. Feel free to get in touch with me. I am always open to work on new projects, opportunities and challenges as a part of growing.
                    </p>
                    <div className={classes.contact_info}>
                        <div className={classes.info_item}>
                            <FaEnvelope className={classes.info_icon} />
                            <div>
                                <span className={classes.info_title}>Mail Me</span>
                                <h4 className={classes.info_desc}>adityaoff79@gmail.com</h4>
                            </div>
                        </div>
                        <div className={classes.info_item}>
                            <BsWhatsapp className={classes.info_icon} />
                            <div>
                                <span className={classes.info_title}>Text Me</span>
                                <h4 className={classes.info_desc}>88949-19468</h4>
                            </div>
                        </div>
                    </div>
                    <div className={classes.contact_socials}>
                        <a href="https://www.instagram.com/aditya_rana_0708_" className={classes.social_link} target="_blank">
                            <FaInstagram></FaInstagram>
                        </a>
                        <a href="https://github.com/Arwolfe07" className={classes.social_link} target="_blank">
                            <BsGithub></BsGithub>
                        </a>

                    </div>
                </div>
                <form className={classes.contact_form} method="POST" action="https://formspree.io/f/xrgvjgek">
                    <div className={classes.form_input_group}>
                        <div className={classes.form_input_div}>
                            <input type="text" placeholder="Your Name" className={classes.form_control} name="name" />
                        </div>
                        <div className={classes.form_input_div}>
                            <input type="email" placeholder="Your Email" className={classes.form_control} name="email" />
                        </div>
                        <div className={classes.form_input_div}>
                            <input type="text" placeholder="Your Subject" className={classes.form_control} name="subject" />
                        </div>
                    </div>
                    <div className={classes.form_input_div}>
                        <textarea className={`${classes.form_control} ${classes.textarea}`} placeholder="Your Message" name="message"></textarea>
                    </div>
                    <button className="button">
                        Send Message
                        <span className={`button_icon ${classes.contact_button_icon}`}>
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;