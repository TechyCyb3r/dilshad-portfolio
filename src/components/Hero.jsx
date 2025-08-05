import React from 'react'
import Styles from './css/Hero.module.css'
import HeroImg from '../assets/Hero/hero.jpg'
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
        <p className={Styles.intro}>Hello! I Am <span>
          <TypeAnimation
            sequence={['Bla Bla Bla', 2000]}
            speed={2}
            cursor={false}
          />
        </span></p>
        <h1 className={Styles.title}>A Designer who<br />Judges a book<br />by its <span className={Styles.coverHighlight}>cover</span>...</h1>
        <p className={Styles.subtitle}>Because if the cover does not impress you what else can?</p>
        <div className="descriptionWrapper">
          <h2 className={Styles.role}>I'm a Software Engineer.</h2>
          <p className={Styles.company}>Currently, I'm a Software Engineer at <span>Facebook</span></p>
          <p className={Styles.description}>
            A self-taught UI/UX designer, functioning in the industry for 3+ years now.
            I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
