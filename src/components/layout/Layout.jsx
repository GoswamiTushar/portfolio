import './styles.css'
import logo from '../../Assets/icons/favicon.png'
import logoDark from '../../Assets/icons/logo-grey.png'
import React, { useEffect, useState, useRef } from 'react';
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
  const logoRef = useRef(null);

  useEffect(() => {
    // Function to check contrast and set the appropriate logo
    function checkLogoContrast() {
      if (!logoRef.current) return;

      const logoElement = logoRef.current;
      const logoImage = new Image();
      logoImage.src = logoElement.src;
      logoImage.onload = () => {
        const backgroundColor = getComputedStyle(logoElement).backgroundColor;
        const logoColor = getAverageColor(logoImage);

        // You can adjust the threshold as needed to determine whether to use logoDark or logo
        const contrastThreshold = 128; // Adjust this value
        const contrast = getContrast(backgroundColor, logoColor);

        if (contrast < contrastThreshold) {
          logoElement.src = logoDark;
        }
      };
    }

    checkLogoContrast();
    // You can also call checkLogoContrast() whenever the background changes, if necessary.
  });

  // Function to calculate the contrast between two colors
  function getContrast(color1, color2) {
    const rgb1 = parseColor(color1);
    const rgb2 = parseColor(color2);

    const luminance1 = calculateLuminance(rgb1);
    const luminance2 = calculateLuminance(rgb2);

    const brighter = Math.max(luminance1, luminance2);
    const darker = Math.min(luminance1, luminance2);

    return (brighter + 0.05) / (darker + 0.05);
  }

  // Function to parse a color string to RGB
  function parseColor(color) {
    const match = /rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    if (match) {
      return {
        r: parseInt(match[1], 10),
        g: parseInt(match[2], 10),
        b: parseInt(match[3], 10),
      };
    }
    // You can add more color format handling here if needed
    return { r: 0, g: 0, b: 0 };
  }

  // Function to calculate the luminance of an RGB color
  function calculateLuminance(rgb) {
    return 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
  }

  // Function to get the average color of an image (assuming it's the logo image)
  function getAverageColor(image) {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);

    const imageData = context.getImageData(0, 0, image.width, image.height).data;

    let r = 0;
    let g = 0;
    let b = 0;

    for (let i = 0; i < imageData.length; i += 4) {
      r += imageData[i];
      g += imageData[i + 1];
      b += imageData[i + 2];
    }

    const pixelCount = imageData.length / 4;
    r = Math.round(r / pixelCount);
    g = Math.round(g / pixelCount);
    b = Math.round(b / pixelCount);

    return { r, g, b };
  }

  return (
    <div className='top-section'>
      <div className="name-container logo">
        <AnimatedLogo>
          <img ref={logoRef} src={logo} alt="logo" width={45} />
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
      {!showCustomScreen &&
        <TopSection isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
      {showCustomScreen && <CustomScreen />} {/* Conditionally render the custom screen */}
      {!showCustomScreen && <TopSection isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
      {!showCustomScreen && children}
    </section>
  )
}
export default Layout