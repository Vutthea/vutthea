import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiXampp } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiAliexpress } from "react-icons/si";

import { ReactTyped } from "react-typed";



function Home() {
  return (
   
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
        <div className='flex flex-col md:flex-row'>
             <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                <span className='text-xl'>Welcome In my Feel</span>
                <div className='flex space-x-1 text-2xl md:text-4xl'>
                    <h1>Hello, I'm a</h1>
                    {/* <span className='text-red-700 font-bold'>Developer</span> */}

                    <ReactTyped
                        className='text-red-700 font-bold'
                        strings={["Developer", "Programmer","Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    />
                </div>
                <br />
                <p className='text-sm md:text-md text-justify'> 
                &nbsp; &nbsp; &nbsp; I'm recent Information Technology Engineering
                graduate with  a strong focuse on front-end web development. Proficient in front-end technolies
                like HTML, CSS, JavaScript, and framework programming such as React.js
                and Tailwindcss.
                </p>
                <br />
                {/* social media icons */}
                 <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                 <div className='  space-y-2'>
                    <h1 className='font-bold text-green-600'>Available on</h1>
                    <ul className='flex space-x-5'>
                        <li>
                            <a href="https://web.facebook.com/photo?fbid=909042144362265&set=pcb.909042164362263&_rdc=1&_rdr" target="_blank">
                            {""}
                             <FaFacebook  className='text-2xl cursor-pointer'/>
                            </a>
                        </li>
                        <li> 
                            <a href="https://www.instagram.com/">
                            {""}
                              <FaInstagramSquare className='text-2xl cursor-pointer'/>
                            </a>
                        </li>
                        <li> 
                            <a href="vuttheaseng@gmail.com">
                            {""}
                            <BiLogoGmail className='text-2xl cursor-pointer'/> 
                            </a>
                        </li>
                        <li> 
                            <a href="https://t.me/SVT_VUTTHEA">
                            {""}
                             <FaTelegramPlane className='text-2xl cursor-pointer'/>
                            </a>
                        </li>
                    </ul>
                   
                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold text-green-600'>Currently Technology  on</h1>
                    <div className='flex space-x-5'>
                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    <SiXampp  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                    <FaNode  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                    <SiAliexpress  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                    </div>  
                </div>
                 </div>
             </div>
            <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                <img src="./1.jpg" className='rounded-full w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] mx-auto' alt=""/>
            </div>
        </div>
    </div>
   
   
  )
}

export default Home