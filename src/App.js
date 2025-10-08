import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Community from './components/Community';
import Footer from './components/Footer';
function App() {
  return (
    <div >
      <Navbar />
      <About />
      <Projects />
      <Hero />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
