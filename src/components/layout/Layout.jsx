import './styles.css'
import logo from '../../Assets/icons/favicon.png'
import logoDark from '../../Assets/icons/logo-grey.png'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

const CustomScreen = () => {
  return (
    <div className="custom-screen" style={{
      // background: 'var(--primaryMain)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100dvh',
      background: 'var(--primaryDark)'
    }}>
      <motion.div
        className="box"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
        {/* <p style={{
          color: 'var(--primaryGrey',
          fontSize: '35px',
          fontWeight: 500
        }}>Hello</p> */}
        <img src={logoDark} alt="" width="90px" />
      </motion.div>
    </div>
  );
};

const AnimatedLogo = ({ children }) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ ease: "linear", duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
    >
      {children}
    </motion.div >
  )
}


const TopSection = ({ isMenuOpen, setMenuOpen }) => {

  return (
    <div className='top-section'>
      <div className="name-container logo">
        <AnimatedLogo>
          <img src={logo} alt="logo" width={45} />
        </AnimatedLogo>
      </div>
      <div className="menu-container">
        <div
          id="nav-icon1"
          className={isMenuOpen ? `open` : ''}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};


const Layout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [showCustomScreen, setShowCustomScreen] = useState(true)

  useEffect(() => {
    // Set a timeout to hide the custom screen after 1.5 seconds
    const timeoutId = setTimeout(() => {
      setShowCustomScreen(false);
    }, 2500);

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section style={{ position: 'relative' }}>

      {showCustomScreen && <CustomScreen />}

      {!showCustomScreen &&
        <TopSection isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
      {!showCustomScreen && <TopSection isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
      {!showCustomScreen && children}
    </section>
  )
}
export default Layout