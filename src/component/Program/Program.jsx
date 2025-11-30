import React from 'react';
import { Link } from 'react-router-dom';
import './Program.css'
import Program_1 from '../../assets/program-1.png';
import Program_2 from '../../assets/program-2.png';
import Program_3 from '../../assets/program-3.png';
import Program_icon1 from '../../assets/program-icon-1.png'; 
import Program_icon2 from '../../assets/program-icon-2.png'; 
import Program_icon3 from '../../assets/program-icon-3.png'; 

const Program = () => {
  return (
    <div className='programs'>

        <div className='program'>

            <img src={Program_1} alt=''/>
            <Link to="/websiteapp/diploma">
             <div className='caption'>
               <img src={Program_icon1} alt=''/>
                      <p>Diploma</p> 
             </div></Link>
        </div>
        
        <div className='program'>
            <img src={Program_2} alt=''/>
            <Link to="/websiteapp/degree">
            <div className='caption'>
               <img src={Program_icon2} alt=''/>
               <p>Graduation Degree</p>  
             </div>
             </Link>
        </div>
        
        <div className='program'>
            <img src={Program_3} alt=''/>
            <Link to="/websiteapp/post-degree">     
            <div className='caption'>
               <img src={Program_icon3} alt=''/>
               <p>Post Graduation Degree</p>  
             </div>
             </Link>
        </div>
    </div>
  )
}

export default Program;
