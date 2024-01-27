import React from 'react'
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <div className='bg-backgroundColor text-white rounded-t-3xl mt-8  md:mt-10'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
        <div className='w-full md:w-1/4'>
          <h1 className='font-semibold text-xl pb-4'>WellnessVista.</h1>
          <p className='text-'>Our team of dedicated doctors, each specializing in unique fields such as orthopedics, cardiology, pediatrics, neuroloy, dermatology, and more.
          </p>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 md:pt-0'>About Us</h1>
          <nav className='flex flex-col gap-2'>
            <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >About Us</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Services</Link>
            <Link to="doctors" spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Doctors</Link>
          </nav>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-5 md:pt-0'>Services</h1>
          <nav className='flex flex-col gap-2'>
            <Link to="services" spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Lab Test</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Health Check</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Heart Health</Link>
          </nav>
        </div>
        <div className='w-full md:w-1/4'>
            <h1 className='font-medium text-xl pb-5 md:pt-0'>Contact</h1>
            <nav className='flex flex-col gap-2'>
              <Link to="/" spy={true} smooth={true} duration={500} className='' >123 Ela Sterrt, Stite 456 Springfield, IL 62701 United State</Link>
              <Link to="/" spy={true} smooth={true} duration={500} className='' >Support@care.com</Link>
              <Link to="/" spy={true} smooth={true} duration={500} className='' >+123-456-789</Link>
            </nav>
        </div>
      </div>
      <div className='text-center py-4'>
        <p>@Goraka Harish Developed by <span className='text-hoverColor'> Create Programmers </span> | All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
