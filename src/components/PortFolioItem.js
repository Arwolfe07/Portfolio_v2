import React, { useState } from "react";
import classes from "./PortfolioItem.module.css";
import close from "./close.svg";


const PortfolioItem = ({ img, title, details, descript }) => {
    const [modal, setModal] = useState(false);
    const modalToggleHandler = () => {
        setModal(!modal);
    };

    return (
        <div className={classes.portfolio_item}>
            <img src={img} alt="" className={classes.portfolio_img} />
            <div className={classes.port_hover} onClick={modalToggleHandler}>
                <h3 className={classes.port_title}>{title}</h3>
            </div>
            {modal && (<div className={classes.portfolio_modal}>
                <div className={classes.modal_content}>
                    <img src={close} className={classes.modal_close} onClick={modalToggleHandler}></img>
                    <h3 className={classes.modal_title}>{title}</h3>
                    <ul className={`${classes.modal_list} grid`}>
                        {details.map(({ icon, title, desc }, index) => {
                            return (
                                <li className={classes.modal_item} key={index}>
                                    <span className={classes.icon}>{icon}</span>
                                    <div>
                                        <span className={classes.title}>{title}</span>
                                        <span className={classes.desc}>{desc}</span>
                                    </div>
                                </li>);
                        })}
                    </ul>

                    <div className={classes.descript}>
                            {descript.desc}
                    </div>
                    <img src={img} className={classes.modal_img} alt=""></img>
                </div>

            </div>)}
        </div>
    );
};

export default PortfolioItem;
