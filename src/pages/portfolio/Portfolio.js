import React from "react";
import classes from "./Portfolio.module.css";
import { FaCode } from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";
import PortfolioItem from "../../components/PortFolioItem";

const portfolio = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/des95gv2m/image/upload/v1682746303/Hotel_kodnip.png',
        title: 'Hotels Website',
        details: [
            {
                icon: <FaCode />,
                title: 'Skills Used : ',
                desc: 'HTML, CSS, Js, express Js, node Js, Bootstrap, mongoDb, npm packages, etc.',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: <a href='https://myhotel.onrender.com/' target="_blank">Click Here</a>,
            },
        ],
        descript: {
            icon: <FiFileText />,
            title: 'Description : ',
            desc: 'Hotels Website where you can add and search for hotels by other persons and review and rate them.',
        },
    },

    {
        id: 2,
        img: 'https://res.cloudinary.com/des95gv2m/image/upload/v1682746299/book_as8zvh.png',
        title: 'Books Website',
        details: [
            {
                icon: <FaCode />,
                title: 'Skills Used : ',
                desc: 'HTML, CSS, Js, express Js, node Js, authenciation and authorization, etc.',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: <a href='https://wolfecheme.onrender.com/' target="_blank">Click Here</a>,
            },
        ],
        descript: {
            icon: <FiFileText />,
            title: 'Description : ',
            desc: 'A books website where you can easily download chemical engineering books after signing up.',
        },
    },

    {
        id: 3,
        img: 'https://res.cloudinary.com/des95gv2m/image/upload/v1682746299/Weather_k3ghqm.png',
        title: 'Weather App',
        details: [
            {
                icon: <FaCode />,
                title: 'Skills Used : ',
                desc: 'React js, APIs, hooks, CSS',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: <a href='https://weather-app-host-c2c74.web.app/' target="_blank">Click Here</a>,
            },
        ],
        descript: {
            icon: <FiFileText />,
            title: 'Description : ',
            desc: 'A react weather app where you can view weather for different citys and districts throughtout the world.',
        },
    },

    {
        id: 4,
        img: 'https://res.cloudinary.com/des95gv2m/image/upload/v1682760097/portfolio_v1_un9dph.png',
        title: 'Portfolio_v1',
        details: [
            {
                icon: <FaCode />,
                title: 'Skills Used : ',
                desc: 'HTML, CSS, Js, node Js, express Js, etc.',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: <a href='https://adityarana.onrender.com/' target="_blank">Click Here</a>,
            },
        ],
        descript: {
            icon: <FiFileText />,
            title: 'Description : ',
            desc: 'Portfolio website made using HTML, CSS and Js',
        },
    },
    {
        id: 5,
        img: 'https://res.cloudinary.com/des95gv2m/image/upload/v1684858262/crypto_1_mnmnp0.png',
        title: 'Crypto App',
        details: [
            {
                icon: <FaCode />,
                title: 'Skills Used : ',
                desc: 'React Js, APIs, Chart.js, redux toolkit, antd',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: <a href='https://cryptofunk-1.onrender.com/' target="_blank">Click Here</a>,
            },
        ],
        descript: {
            icon: <FiFileText />,
            title: 'Description : ',
            desc: 'A crypto currency app to view latest crypto news as well as prices.',
        },
    },
    {
        id: 6,
        img: 'https://res.cloudinary.com/des95gv2m/image/upload/v1690354431/WolfeChemE/Screenshot_2023-07-26_121741_hpdhqh.png',
        title: 'Stack-Overflow Clone',
        details: [
            {
                icon: <FaCode />,
                title: 'Skills Used : ',
                desc: 'MongoDb, ReactJs, ExpressJs, Node Js, Stripe',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: <a href='https://kaleidoscopic-nasturtium-4f0e9b.netlify.app/#/' target="_blank">Click Here</a>,
            },
        ],
        descript: {
            icon: <FiFileText />,
            title: 'Description : ',
            desc: 'A clone of famous Stack-Overflow with some new features.',
        },
    },
    {
        id: 7,
        img: 'https://res.cloudinary.com/des95gv2m/image/upload/v1682746300/Food_fubkp5.png',
        title: 'Food App',
        details: [
            {
                icon: <FaCode />,
                title: 'Skills Used : ',
                desc: 'React Js, hooks, context hook, CSS, etc.',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: 'Not Available',
            },
        ],
        descript: {
            icon: <FiFileText />,
            title: 'Description : ',
            desc: 'Working on a food web app using React Js and its utitlites.',
        },
    }
]

const Portfolio = () => {
    return (
        <section className={`section ${classes.portfolio}`}>
            <h2 className="section_title">
                My <span>Portfolio</span>
            </h2>

            <div className={`container grid ${classes.portfolio_container}`}>
                {portfolio.map((item) => {
                    return <PortfolioItem key={item.id} {...item} />
                })}
            </div>

        </section>
    );
};

export default Portfolio;
