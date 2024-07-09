import React from 'react';
import react from '../assets/images/react.png';
import node from '../assets/images/node.png';
import express from '../assets/images/express-js.png'; // Correct the file name here if necessary
import html from '../assets/images/html.jpg'; // Correct the extension here
import css from '../assets/images/css.png';


function Experience() {
  const cardItems = [
    {
      id: 1,
      logo: react,
      name: 'React.js',
    },
    {
      id: 2,
      logo: node,
      name: 'Node.js',
    },
    {
      id: 3,
      logo: express,
      name: 'Express.js',
    },
    {
      id: 4,
      logo: html,
      name: 'HTML',
    },
    {
      id: 5,
      logo: css,
      name: 'CSS',
    },
  ];

  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className=" ">
            I've more that 2 years of Experience in below technologies
        </p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
          {cardItems.map(({ id, logo, name }) => (
            <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md-h[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
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