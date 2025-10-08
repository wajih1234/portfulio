import React from 'react'
import '../App.css';
const Hero = () => {
  return (
    <div className='ade'id='experience'>
  <h1>My Old Experience in Internship</h1>

  <div className='intern-container'>
    <div className='intern'>
      <h2 className='title'>Tunisie Telecom</h2>
      <p>
        During my internship, I gained experience in cabling and signal systems.
        I also worked on resolving client network and Internet issues by applying my theoretical knowledge.
        Additionally, I acquired valuable insights into line construction and transmission center operations.
      </p>
    </div>

    <div className='intern'>
      <h2 className='title'>Majesteye</h2>
      <p>
        During my internship, I worked on developing a web payment platform using the MERN stack (MongoDB, Express.js, React, and Node.js).
        The website allows users to create accounts, manage their profiles, and make secure online payments.
        Through this project, I enhanced my skills in full-stack development, API integration, and database management,
        while also gaining hands-on experience in building responsive and user-friendly interfaces.
      </p>
    </div>
  </div>
</div>

   
  )
}

export default Hero