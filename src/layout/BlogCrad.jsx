import React from 'react'

const BlogCrad = ({img, headlines}) => {
  return (
    <div className='w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out'>
      <img src={img} alt="img" className='h-60 md:h-40 w-full rounded-lg '/>
      <h1 className='text-lg text-center font-semibold'>{headlines}</h1>
      <p className='text-center text-sm'>Lorem ipsum dolor sit amet contsectut adipising elit. Quea maganam omins natus accusatnium quos.</p>
    </div>
  )
}

export default BlogCrad
