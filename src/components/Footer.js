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
                <div className='flex space-x-4'>
                <FaFacebook  size={24} className='text-2xl cursor-pointer'/>
                <FaInstagramSquare size={24} className='text-2xl cursor-pointer'/>
                <BiLogoGmail size={24} className='text-2xl cursor-pointer'/>
                <FaTelegramPlane size={24} className='text-2xl cursor-pointer'/> 
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