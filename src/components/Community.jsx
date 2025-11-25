import React from 'react'
import speak from '../assets/speak.jpg';
import cp from '../assets/cp.png';
const Community = () => {
  return (
    <div className='commu' id='community'>
    <h1 className='tit'>Community</h1>


    <div className='container56'>
      <div className='acm1'>
       <img  src={speak} />
       <div className='overlay'>
   <p>
    It's important to be responsible and take initiative, 
    which is why I served as an Event Manager in ACM ENSTAB, 
    where I gained valuable leadership and social skills.
   </p>
       </div>

      </div>
      <div className='acm1'>
    <img  src={cp}   />
    <div className='overlay'>
   <p>
    
     I have participated in several problem-solving competitions 
    to strengthen my critical thinking and analytical skills.
   </p>

      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Community