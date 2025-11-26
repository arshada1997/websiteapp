import React,{useRef} from 'react'
import './Testimonial.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {

 const slider =useRef();//also to target dom elements
  let tx=0;
  
  const slideForward = ()=>{
    //prevents it from going beyond the last slide.
    if(tx > -50)
    {
      tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if(tx<0)
    { 
          tx+=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn'   onClick={slideForward}/> 
        <img src={back_icon} alt="" className='back-btn'  onClick={slideBackward}/> 
          <div className='slider'>
           <ul ref={slider}>
   <li>
              <div className='slide'>
                  <div className='user-info'>  
                     <img src={user_1} alt='' />
                     <div>
                       <h3>Willium Jackson 1</h3>
                       <span>Educity, USA</span>
                     </div>
                  </div>
                  <p>Choosing to persue my degree at Educity 
                    was one of the best descisions ,I 've ever made .
                    The supportive community,state-of-the-art facilities, and commitment to 
                    the academic excellence have truely exceede my expections.</p>
              </div>
            </li>
             <li>
              <div className='slide'>
                  <div className='user-info'>  
                     <img src={user_2} alt='' />
                     <div>
                       <h3>Willium Jackson 2</h3>
                       <span>Educity, USA</span>
                     </div>
                  </div>
                  <p>Choosing to persue my degree at Educity 
                    was one of the best descisions ,I 've ever made .
                    The supportive community,state-of-the-art facilities, and commitment to 
                    the academic excellence have truely exceede my expections.</p>
              </div>
            </li>
           <li>
              <div className='slide'>
                  <div className='user-info'>  
                     <img src={user_3} alt='' />
                     <div>
                       <h3>Willium Jackson 3</h3>
                       <span>Educity, USA</span>
                     </div>
                  </div>
                  <p>Choosing to persue my degree at Educity 
                    was one of the best descisions ,I 've ever made .
                    The supportive community,state-of-the-art facilities, and commitment to 
                    the academic excellence have truely exceede my expections.</p>
              </div>
            </li>
           <li>
              <div className='slide'>
                  <div className='user-info'>  
                     <img src={user_4} alt='' />
                     <div>
                       <h3>Willium Jackson 4</h3>
                       <span>Educity, USA</span>
                     </div>
                  </div>
                  <p>Choosing to persue my degree at Educity 
                    was one of the best descisions ,I 've ever made .
                    The supportive community,state-of-the-art facilities, and commitment to 
                    the academic excellence have truely exceede my expections.</p>
              </div>
            </li>
          
          </ul>
        </div> 
    </div>
  )
}

export default Testimonials;
