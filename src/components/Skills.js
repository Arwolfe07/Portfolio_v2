import React from "react";
import classes from "./Skills.module.css";
import { FaHtml5, FaCss3, FaDatabase, FaReact } from "react-icons/fa";
import { SiJavascript,SiMongodb } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BsFiletypeSql } from "react-icons/bs";
import { CgMore } from "react-icons/cg";


const skills = [
    {
        id: 1,
        title: 'HTML',
        icon: <FaHtml5 />,
        desc: ' HTML is the standard markup language for creating Web pages. HTML consists of a series of elements. HTML elements tell the browser how to display the content. It acts as the skeleton of web page. It describes skeleton of web page.',
    },

    {
        id: 2,
        title: 'Javascript',
        icon: <SiJavascript />,
        desc: 'Javascript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. Javascript adds functionality to web page.',
    },
    {
        id: 3,
        title: 'CSS',
        icon: <FaCss3 />,
        desc: 'CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language. It is basically used to provide designs to web page.',
    },
    {
        id: 4,
        title: 'C/C++',
        icon: <TbBrandCpp/>,
        desc: 'C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs. Data structures are formats used to organize, store, and manage data. You can use data structures to access and modify data efficiently.',
    },
    {
        id: 5,
        title: 'Database',
        icon: <FaDatabase/>,
        desc: 'A database is an organised collection of information and data, that is set up for easy access, management and updating. The are used for performing CRUD operations easily. There are relational as well as non-relational databases. Realtion means in form of table.',
    },
    {
        id: 6,
        title: 'React Js',
        icon: <FaReact/>,
        desc: 'React Js is a library used to create User Interfaces. It makes building complex, interactive and reactive UIs easier. React is all about components and all UIs are made up of components in the end. It has many features such as react-hooks, routing and redux for managing and changing the state of data.',
    },
    {
        id: 7,
        title: 'SQL',
        icon: <BsFiletypeSql/>,
        desc: 'SQL is a query language and it is used to communicate with a database. It is a standard language for relational database management system. These statements are used to perform tasks such as update delete and retrieve data.',
    },
    {
        id: 8,
        title: 'MongoDB',
        icon: <SiMongodb/>,
        desc: 'MongoDB is a document database used to build highly available and scalable internet applications. With its flexible schema approach, it is popular with development teams using agile methodologies. It can be used to store data in key-value pairs',
    }, 
    {
        id: 9,
        title: 'More...',
        icon: <CgMore/>,
        desc: 'Other skills include working with express Js and node js and used it for backend in a few of my projects. ',
    },


];

const Skills = () => {
    return (<div className={classes.container}>

        {skills.map(({ title, icon, desc }, id) => {
            return (
                <div className={classes.skill} id={id}>
                    <div className={classes.title}>
                        <div className={classes.icon}>{icon}</div>
                        <h3>{title}</h3>
                    </div>
                    <p className={classes.desc}>{desc}</p>
                </div>
            );
        })}
    </div>);
};

export default Skills;