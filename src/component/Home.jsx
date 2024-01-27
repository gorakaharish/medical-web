import React from 'react'
import Button from '../layout/Button'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url(assets/img/Home.jpg)] bg-no-repeat bg-cover opacity-90">
      <div className='w-full lg:w-4/5 space-y-5 mt-10'>
        <h1 className='text-5xl font-bold leading-tight'>Empowering Health Choices for a Vibrant Life Your Trusted..</h1>
        <p>Lorem ipsum dolor sit amet contsectut adipising elit. Quea maganam omins natus accusatnium quos. Reprehenrit incidunt expoedidunt expedita molestiae impedit at sequi dolorm iste sit cuple, opti voluptates fugiat vera consequatru?
        </p>

        <Button title="See Services" />
      </div>
    </div>
  )
}

export default Home
