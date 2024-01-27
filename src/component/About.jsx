import React from 'react'
import img from '../assets/img/about2.jpg'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5'>
      <div className='w-full lg:w-3/4 space-y-4'>
        <h1 className='text-4xl font-semibold text-center lg:text-start'>About Us</h1>
        <p className='text-justufy lg:text-start'>Lorem ipsum dolor sit amet contsectut adipising elit. Quea maganam omins natus accusatnium quos. Reprehenrit incidunt expoedidunt expedita molestiae impedit at sequi dolorm iste sit cuple, opti voluptates fugiat vera consequatru?
        </p>
        <p className='text-justufy lg:text-start'>orem ipsum dolor sit amet contsectut adipising elit. Quea maganam omins natus accusatnium quos. Reprehenrit incidunt expoedidunt expedita molestiae impedit at sequi dolorm iste sit cuple, opti voluptates fugiat vera consequatru?
        </p>
        <p className='text-justufy lg:text-start'>orem ipsum dolor sit amet contsectut adipising elit. Quea maganam omins natus accusatnium quos. Reprehenrit incidunt expoedidunt expedita molestiae impedit at sequi dolorm iste sit cuple, opti voluptates fugiat vera consequatru?
        </p>
      </div>
      <div className='w-full lg:w-3/4'>
        <img src= {img} alt="img" className='rounded-xl' />
      </div>
    </div>
  )
}

export default About
