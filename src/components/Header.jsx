import React, { useRef, useState, useEffect } from 'react'
import Styles from './css/Header.module.css'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { FiX, FiMenu } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'

const Header = () => {
  const Pages = ['Home', 'Skills', 'Experience', 'Projects', 'Contact'];
  const menuRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on outside click
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }
    // Add event listener only if the mobile menu is open
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    // Cleanup event listener on component unmount or when menu state changes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (

    <nav className={`${Styles.navbar}`}>

      <div className='max-w-[1300px] flex items-center justify-between mx-auto'>
        <h1 className="text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem] font-bold text-white cursor-default font-lavishly">Dilshad Rangrej</h1>
        {/* Desktop Navigation */}
        <div
          className='hidden lg:flex lg:gap-10'>
          {Pages.map((page, index) => (
            <Motion.a
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'easeInOut',
                stiffness: 100,
                damping: 20,
                delay: index * 0.3,
                duration: 0.3,
              }}
              key={index}
              className={`${Styles.navLink} text-md text-white`}
              href={`${page === 'Home' ? '#home' : `#${page.toLowerCase()}`}`}
            >
              {page}
            </Motion.a>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden w-10 h-10 text-xl flex items-center justify-center text-white bg-gradient-to-r from-[#a993fe] to-[#7e61e7] rounded-[0.2rem] cursor-pointer transition-all duration-300 ease-in-out hover:bg-black hover:text-[#a993fe] hover:outline hover:outline-[1.5px] hover:outline-[#a993fe]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}

            ref={menuRef}
            className="lg:hidden flex flex-col gap-4 mt-3 bg-[#1A0B2E] px-1 py-4 border-t border-[#7e61e7]"
          >
            {Pages.map((page, index) => (
              <a
                key={index}
                className={`${Styles.navLink} text-white text-md`}
                href={`#${page.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {page}
              </a>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Header
