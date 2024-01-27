import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Doctors from './component/Doctors'
import Blogs from './component/Blogs'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        <div id="blogs">
          <Blogs />
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
