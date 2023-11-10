import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import AboutSection from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
// import { motion } from "framer-motion"

const Home = () => {
  const containerRef = useRef(null);
  const pagesRef = useRef([]);
  const [currentVisiblePageIndex, setCurrentVisiblePageIndex] = useState(null)

  // Define the components you want to display
  const sections = [
    <AboutSection key="about" />,
    <Page2 key="page2" />,
    <Page3 key="page3" />,
    <Page4 key="page4" />,
  ];

  useEffect(() => {
    const container = containerRef.current;
    const pages = pagesRef.current;

    let startX = 0;
    let startY = 0;

    const handleWheel = (e) => {
      e.preventDefault();
      const scrollAmount = e.deltaY;
      const viewportWidth = window.innerWidth;

      // Find the currently visible page
      let currentVisibleIndex = null;

      pages.forEach((page, index) => {
        const pageRect = page.getBoundingClientRect();
        if (pageRect.left < viewportWidth * 0.5 && pageRect.right > viewportWidth * 0.5) {
          currentVisibleIndex = index;
        }
      });

      // Calculate the target page index based on the scroll direction
      let targetPageIndex = currentVisibleIndex;

      if (scrollAmount < 0 && targetPageIndex > 0) {
        targetPageIndex--;
      } else if (scrollAmount > 0 && targetPageIndex < pages.length - 1) {
        targetPageIndex++;
      }

      // Scroll to the target page
      container.scrollLeft = pages[targetPageIndex].offsetLeft;
      setCurrentVisiblePageIndex(targetPageIndex);
    };

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const deltaX = startX - e.touches[0].clientX;
      const deltaY = startY - e.touches[0].clientY;

      // Adjust the threshold to control sensitivity
      if (Math.abs(deltaY) > Math.abs(deltaX) * 2) {
        const scrollAmount = deltaY;
        const viewportWidth = window.innerWidth;

        // Find the currently visible page
        let currentVisibleIndex = null;

        pages.forEach((page, index) => {
          const pageRect = page.getBoundingClientRect();
          if (pageRect.left < viewportWidth * 0.5 && pageRect.right > viewportWidth * 0.5) {
            currentVisibleIndex = index;
          }
        });

        // Calculate the target page index based on the scroll direction
        let targetPageIndex = currentVisibleIndex;

        if (scrollAmount < 0 && targetPageIndex > 0) {
          targetPageIndex--;
        } else if (scrollAmount > 0 && targetPageIndex < pages.length - 1) {
          targetPageIndex++;
        }

        // Scroll to the target page
        container.scrollLeft = pages[targetPageIndex].offsetLeft;
        setCurrentVisiblePageIndex(targetPageIndex);
      }
    };

    container.addEventListener('wheel', handleWheel);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);


  return (
    <div className="root" ref={containerRef}>
      {sections.map((section, index) => (
        // <motion.div
        //   initial={{ opacity: 0, scale: 0.5 }}
        //   animate={{ opacity: 1, scale: 1 }}
        //   transition={{ duration: 0.5 }}
        // >
        <div
          className={`page ${currentVisiblePageIndex === index ? 'visible' : ''}`}
          key={index}
          ref={(el) => (pagesRef.current[index] = el)
          }>
          {section}
        </div>
        // </motion.div>
      ))}
    </div>
  );
};

export default Home;
