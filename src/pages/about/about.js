import React from "react";
import Info from "../../components/Info";
import classes from "./About.module.css"
import { FaDownload, FaGraduationCap } from "react-icons/fa";
import EduItem from "../../components/EduItem";
import Skills from "../../components/Skills";

const educations = [
    {
        id: 1,
        icon: <FaGraduationCap />,
        year: '2019 - 2023',
        title: 'Engineering Degree',
        desc: 'B.Tech. in Chemical Engineering from NIT Hamirpur.',
    },

    {
        id: 2,
        icon: <FaGraduationCap />,
        year: '2018',
        title: '12th Standard',
        desc: 'CBSE board from D.A.V. Public School, Palampur',
    },

    {
        id: 3,
        year: '2016',
        icon: <FaGraduationCap />,
        title: '10th Standard',
        desc: 'CBSE board from D.A.V. Public School, Palampur',
    },
];


const About = () => {
    return (
        <main className='section container'>
            <section className={classes.about}>
                <h2 className='section_title'>
                    About <span>Me</span>
                </h2>

                <div className={`${classes.about_container} grid`}>
                    <div className={classes.about_info}>
                        <h3 className={classes.section_subtitle}>Personal Infos</h3>
                        <ul className={`grid ${classes.info_list}`}>
                            <Info />
                        </ul>
                        <div className={classes.down}>
                            <a href="https://res.cloudinary.com/des95gv2m/image/upload/v1684856993/WolfeChemE/edited_Aditya_Rana_1_jq46gx.pdf"
                                className={`${classes.down} button`} download=''>
                                Download CV{' '}
                                <span className='button_icon'>
                                    <FaDownload />
                                </span>
                            </a>
                        </div>

                    </div>
                    <div className={classes.education}>
                        <h3 className={`${classes.section_subtitle} ${classes.subtitle_center}`}>
                            Education
                        </h3>
                        <div className={`${classes.edu_container} grid`}>
                            <div className={classes.data}>
                                {educations.map((val) => {
                                    return <EduItem key={val.id} {...val} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={classes.separator}></div>
            <section className={classes.skills}>
                    <h3 className={`${classes.section_subtitle} ${classes.header}`}>
                        My Skills
                    </h3>
                <Skills />
            </section>
        </main>
    );
};

export default About;
