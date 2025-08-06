import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Background from './components/Background.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/ContactMe.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className='w-full h-full relative'>
        <Header />
        <div className='pt-14 md:pt-16 absolute bg-[#11071F] -z-10 w-[100%] overflow-hidden'>
          <section>
            <Hero />
          </section>
          <section id='skills'>
            <Skills />
          </section>
          <section id='experience'>
            <Experience />
          </section>
          <section id='projects'>
            <Projects />
          </section>
          <section id='contact'>
            <Contact />
          </section>
        </div>
      </div>
    </>
  )
}

export default App
