import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
// import { Link } from 'react-router-dom';'
import {Link} from "react-scroll"
import { IoIosCloseCircleOutline } from "react-icons/io";

function Navbar() {
  const [menu, setMenu] = useState(false);
  
  const navItems = [
    {
      id: 1,
      text: "Home",
      // to: "/"
    },
    {
      id: 2,
      text: "About",
      // to: "/about"
    },
    {
      id: 3,
      text: "Portfolio",
      // to: "/portfolio"
    },
    {
      id: 4,
      text: "Experience",
      // to: "/experience"
    },
   
  ];

  return (
    
      <div className='bg-gray-300 max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex space-x-2'>
            <img src="./vutthea.jpg" className='h-12 w-12 rounded-full' alt="profile" />
            <h1 className='font-semibold text-xl cursor-pointer'>
              Seng <span className='text-green-500 text-2xl'>Vutthea</span>
              <p className='text-sm'>Web Developer</p>
            </h1>
          </div>
          {/* Desktop nav */}
          <div>
            <ul className='hidden md:flex space-x-8'>
              {
                navItems.map(({ id, text }) => (
                  <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>
                    <Link to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    >
                         {text}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div onClick={() => setMenu(!menu)} className='md:hidden'>
              {menu ? <IoIosCloseCircleOutline size={24} /> : <MdMenu size={24} />}
            </div>
          </div>
        </div>
        {/* Mobile navbar */}
        {menu && (
          <div className='bg-white'>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
              {
                navItems.map(({ id, text, to }) => (
                  <li key={id} className='hover:scale-105 duration-200 font-semibold cursor-pointer'>
                    {/* <Link to={to} onClick={() => setMenu(false)}>{text}</Link> */}
                    <Link 
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    >
                         {text}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    
  );
}

export default Navbar;