import React from 'react'
import '../App.css';
import image from '../assets/image.png';
import chatbot from '../assets/chatbot.png';
import aisum from '../assets/aisum.png';
import payc from '../assets/payc.png';
import frontmovie from '../assets/frontmovie.png';
const Projects = () => {
  return (
    <div className="project" id='work'>
  <h1>My Projects</h1>

  <div className="projects-container">
    <div className="project-card">
      <img src={image} alt="Project 1" />
     <div className="overlay">
        <h3>Biblio</h3>
        <div className="buttons">
          <a href="https://github.com/wajih1234/frontend-bibl" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://frontend-bibl.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
        </div>
      </div>
    </div>

    <div className="project-card">
      <img src={chatbot} alt="Project 2" />
     <div className="overlay">
        <h3>chatbot</h3>
        <div className="buttons">
          <a href="https://github.com/wajih1234/ENSTAB_BOT" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://enstab-bot.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
        </div>
      </div>
    </div>

    <div className="project-card">
      <img src={aisum} alt="Project 3" />
      <div className="overlay">
        <h3>summarize</h3>
        <div className="buttons">
          <a href="https://github.com/wajih1234/ai-summarize" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://ai-summarize-8adu.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
        </div>
      </div>
    </div>
     <div className="project-card">
      <img src={payc} alt="Project 3" />
      <div className="overlay">
        <h3>Paycom</h3>
        <div className="buttons">
          <a href="https://github.com/wajih1234/Paycom" target="_blank" rel="noopener noreferrer">GitHub</a>
        
        </div>
      </div>
    </div>
    <div className="project-card">
      <img src={frontmovie} alt="Project 3" />
      <div className="overlay">
        <h3>movieapp</h3>
        <div className="buttons">
          <a href="https://github.com/wajih1234/front-movie-app" target="_blank" rel="noopener noreferrer">GitHub</a>
           <a href="https://front-movie-app.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
        </div>
      </div>
    </div>


  </div>
</div>

  )
}

export default Projects