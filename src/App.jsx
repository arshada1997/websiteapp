import React, { useState } from 'react'
import {BrowserRouter as Router ,Routes,Route } from "react-router-dom";
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
import Diploma from './component/Program/Diploma';
import Degree from './component/Program/Degree';
import Post_Degree from './component/Program/Post_Degree';
const App = () => {
  
  const [playState,setPlayState] =useState(false);
 
  return (
  <Router> 
   <Routes> 
     <Route path="/websiteapp/" element={

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
            }/>
             {/* ========== POST GRADUATION PAGE ROUTE ========== */}
        <Route path="/websiteapp/diploma" element={<Diploma />} />
        <Route path="/websiteapp/degree" element={<Degree />} />
        <Route path="/websiteapp/post-degree" element={<Post_Degree />} />

    </Routes>
    </Router>
  )
}

export default App

