import React from 'react'
import Styles from './css/Hero.module.css'
import HeroImg from '../assets/Hero/Me.jpg'
import { motion as Motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section className={Styles.heroContainer}>
      {/* Left Side: Image */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'easeInOut',
          duration: 0.6,
        }}

        className={Styles.heroImageContainer}>
        <img src={HeroImg} alt="Hero" className={Styles.heroImage} />
      </Motion.div>
      {/* Right Side: Text */}
      <div className={Styles.heroTextContainer}>
        <Motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 0.1,
          }}
          className={Styles.intro}>Hello! I Am <span>
            <TypeAnimation
              sequence={['Dilshad Rangrej', 10000]}
              speed={2}
              cursor={false}
            />
          </span></Motion.p>
        <Motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          className={Styles.title}>
          A SysAdmin who<br />
          Reads logs like a <span className={Styles.coverHighlight}>detective</span>...
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 0.3,
          }}
          className={Styles.subtitle}>Because if the uptime isn't impressive, what else is?</Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 0.3,
          }}
          className="descriptionWrapper">
          <h2 className={Styles.role}>I'm a Linux Server Administrator.</h2>
          <p className={Styles.company}>Currently, I'm working as a Linux Server Administrator at <span>Infinitivehost Technologies</span></p>
          <p className={Styles.description}>
            A self-driven Linux enthusiast with over 2 years of hands-on experience in server management, shell scripting, and system security.
            I specialize in deploying, securing, and optimizing Linux environments to ensure high availability and performance for mission-critical systems.
          </p>

          <div className="max-lg:flex max-lg:justify-center">
            <Motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.01
              }}
              className="flex items-center justify-center text-white bg-gradient-to-r from-[#a993fe] to-[#7e61e7] py-2 px-5 sm:py-[0.6rem] sm:px-[2rem] border-0 text-sm sm:text-[0.9rem] font-bold rounded-[0.2rem] cursor-pointer transition-all duration-300 ease-in-out hover:bg-none hover:bg-black hover:text-[#a993fe] hover:outline hover:outline-[1.5px] hover:outline-[#a993fe]"
              onClick={() => window.open('/download/resume.pdf')}
            >
              Download Resume
            </Motion.button>
          </div>

        </Motion.div>
      </div>
    </section>
  )
}

export default Hero
