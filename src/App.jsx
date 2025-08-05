import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Background from './components/Background.jsx'
import Skills from './components/Skills.jsx'

function App() {

  return (
    <>
      <div className='w-full h-full relative'>
        <Background />
        <Header />
        <div className='pt-14 md:pt-16'>
          <section id='hero'>
            <Hero />
          </section>
          <section id='skills'>
            <Skills />
          </section>
        </div>
      </div>
    </>
  )
}

export default App
