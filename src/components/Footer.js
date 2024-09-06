import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
function Footer() {
  return (
    <>
      <hr />
      <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
              <div className=' flex flex-col items-center justify-center'>
              <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                 <div className='  space-y-2'>
                    <h1 className='font-bold text-green-600 text-center'>My Context</h1>
                    <ul className='flex space-x-5'>
                        <li>
                            <a href="https://web.facebook.com/seng.vutthea.9" target="_blank">
                            {""}
                             <FaFacebook  className='text-2xl cursor-pointer'/>
                            </a>
                        </li>
                        <li> 
                            <a href="https://www.instagram.com/s_vutthea/">
                            {""}
                              <FaInstagramSquare className='text-2xl cursor-pointer'/>
                            </a>
                        </li>
                        <li> 
                            <a href="https://mail.google.com/mail/u/0/#inbox">
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
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p className='text-sm'>&copy; Seng Vutthea,barchelor's degree in 2024, Marjor: ITE . </p>
                    <p className='text-sm'>websit Developer, Front-End.</p>
                </div>
              </div>
        </div>
      </footer>
    </>
  )
}

export default Footer