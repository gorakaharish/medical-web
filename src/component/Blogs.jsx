import React from 'react'
import Button from '../layout/Button'
import BlogCrad from '../layout/BlogCrad'
import img1 from '../assets/img/blog1.jpg'
import img2 from '../assets/img/blog2.jpg'
import img3 from '../assets/img/blog3.jpg'
import img4 from '../assets/img/blog4.jpg'
import img5 from '../assets/img/blog5.jpg'
import img6 from '../assets/img/blog6.jpg'

const Blogs = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24'>
      <div className='flex flex-col items-center lg:flex-row justify-between'>
        <div>
          <h1 className='text-4xl font-semibold text-center lg:text-start'>Latest Post</h1>
          <p className='mt-2 text-center lg:text-start'>Lorm, ipsum dolor sit amet consectetur adipisicing elit, Quae, Veniam?</p>
        </div>
        <div className='mt-4 lg-mt-0'>
          <Button title="Our Articles"/>
        </div>
      </div>
      <div className='mt-8'>
        <div className='flex flex-wrap justify-center gap-5'>
           <BlogCrad img={img1} headlines ="Unraveling the Mysteries of Sleep" />
           <BlogCrad img={img2} headlines ="The Heart-Healthy Diet" />
           <BlogCrad img={img3} headlines ="Understanding Pediatric Vaccinations" />
           <BlogCrad img={img4} headlines ="Navigation Mental Health" />
           <BlogCrad img={img5} headlines ="The Importance of Regular Exercise" />
           <BlogCrad img={img6} headlines ="Skin Health 101" />
        </div>
      </div>
    </div>
  )
}

export default Blogs
