import React from 'react';
import react from '../assets/images/react.png';
import node from '../assets/images/node.png';
import express from '../assets/images/express-js.png'; // Correct the file name here if necessary
import html from '../assets/images/html.jpg'; // Correct the extension here
import css from '../assets/images/css.png';
import js from '../assets/images/javaScript-logo.png';
import MySQL from '../assets/images/MySQL.png'; 
import Tailwind from '../assets/images/Tailwind.png'; //


function Experience() {
  const cardItems = [
   
    {
      id: 1,
      logo: html,
      name: 'HTML',
    },
    {
      id: 2,
      logo: css,
      name: 'CSS',
    },
    {
      id: 3,
      logo: js,
      name:'Javascript',
    },
    {
      id: 4,
      logo: react,
      name: 'React.js',
    },
    {
      id: 5,
      logo: node,
      name: 'Node.js',
    },
    {
      id: 6,
      logo: express,
      name: 'Express.js',
    },
    {
      id: 7,
      logo: MySQL,
      name: 'MySQL',
    },
    {
      id: 8,
      logo: Tailwind,
      name: 'Tailwind',
    },
    
  ];

  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className=" ">
            I've to study at the unniversity and got the learn from coding laugust like 
            have C, C++ and java.The more got be about Program websit development like HTML, CSS, JavaScript.
            And then about framework i can user React.js and Tailwindcss for front-end.So now i can to learn
             Back-end from myself focuse on Node.js, Express and MySQLfor database.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3 pt-4' >
          {cardItems.map(({ id, logo, name }) => (
            <div className='flex flex-col items-center justify-center  border-[2px] rounded-[10px] md:w-[200px] md-h[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
              <img src={logo} className='w-[120px]  rounded-full ' alt={name} />
              <div>
                <div className=''>{name}</div> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience