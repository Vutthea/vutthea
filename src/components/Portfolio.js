import React from 'react';
import reactLogo from '../assets/images/react.png';
import nodeLogo from '../assets/images/node.png';
import expressLogo from '../assets/images/express-js.png'; // Correct the file name here if necessary
import htmlLogo from '../assets/images/html.jpg'; // Correct the extension here
import cssLogo from '../assets/images/css.png';
import javaScriptLogo from '../assets/images/javaScript-logo.png'; // Correct the file name here if necessary
import xamppLogo from '../assets/images/Xampp.png'; // Match the case here

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: reactLogo,
      name: 'React.js',
    },
    {
      id: 2,
      logo: nodeLogo,
      name: 'Node.js',
    },
    {
      id: 3,
      logo: expressLogo,
      name: 'Express.js',
    },
    {
      id: 4,
      logo: htmlLogo,
      name: 'HTML',
    },
    {
      id: 5,
      logo: cssLogo,
      name: 'CSS',
    },
    {
      id: 6,
      logo: javaScriptLogo,
      name: 'JavaScript',
    },
    {
      id: 7,
      logo: xamppLogo,
      name: 'XAMPP',
    },
  ];

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured project</span>
        <div className='grid grid-cols-l md:grid-cols-4 gap-3 my-5'>
          {cardItems.map(({ id, logo, name }) => (
            <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
              <img src={logo} 
              className='w-[120px]  h-[120px] p-1 rounded-full border-[2px]  ' alt={name} />
              <div>
                <div className='px-2 font-bold text-xl mb-2  '>{name}</div>
                <p className='px-2 text-gray-700'>
                 Loren ipsum,dolor sit amet consecteyur adipisicing elit
                .</p>
              </div>
              
              <div className='px-6 py-4  space-x-4 justify-around  '>
                <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                <button  className='bg-green-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Source Code </button>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;