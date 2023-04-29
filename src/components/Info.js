import React from "react";
import classes from "./Info.module.css"

const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Aditya',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Rana',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '22 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Indian',
    },
  
    {
      id: 5,
      title: 'Address : ',
      description: 'Palampur, H.P.',
    },
  
  
    {
      id: 6,
      title: 'Email : ',
      description: 'adityaoff79@gmail.com',
    },
    {
      id: 7,
      title: 'Languages : ',
      description: 'Hindi, English',
    },
    {
        id: 8,
        title: 'Freelance : ',
        description: 'Available',
    },
  ];
  

const Info = ()=>{
    return (
        <>
            {personalInfo.map(({title, description},index)=>{
                return (
                    <li className={classes.list_item} key={index}>
                        <span className={classes.info_title}>{title}</span>
                        <span className={classes.info_desc}>{description}</span>
                    </li>
                    );
            })}
        </>
        );
};

export default Info;