import React from 'react'

const ServicesCard = ({ icon, title }) => {
  return (
    <div className='group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,0.24)_0px_3px_8px] rounded-lg lg:hover:-translate-y-6 transition duration-300 ease-in-out'>
      <div className='bg-[#d5f2ec] p-3 rounded-full transtion-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]'>{icon}</div>
      <h1 className='font-semibold text-lg'>{title}</h1>
      <p>Lorem ipsum dolor sit amet contectetur adiposicing elit, Omnis tempora unde error et. Quies totam officia itque quaerat facills?</p>

      <h3 className='text-backgroundColor cursor-pointer hover:text-[#ade9dc] transtion duration-300 ease-in-out'>Learn more</h3>
    </div>
  )
}

export default ServicesCard
