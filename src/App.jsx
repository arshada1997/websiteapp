import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Program from './component/Program/Program'
import Title from './component/Title/Title'
import About from './component/About/About'
import Campus from './component/Campus/Campus';
import Testimonials from './component/Testimonials/Testimonials';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import VideoPlayer from './component/VideoPlayer/VideoPlayer'

const App = () => {
  
  const [playState,setPlayState] =useState(false);
 
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className='container'>
          <Title subTitle="Our Program" title="What we Offer"/>
          <Program/>
          <About setPlayState={setPlayState}/>
          <Title subTitle="Gallary" title="Campus Photos"/>
          <Campus/>
          <Title subTitle="Testimonials" title="What Student Says"/>
          <Testimonials/>
          <Title subTitle="Contact US" title="Get in Touch"/>
          <Contact/>
          <Footer/>
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App

