// import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import ApplicationAnimation from '../../Assets/lottie/app1.json';
import Cloud from '../../Assets/lottie/cloud-1.json'
import SEO from '../../Assets/lottie/seo-3.json'
import Support from '../../Assets/lottie/support.json'
import { useInView } from 'react-intersection-observer';

const servicesData = [
  {
    animationData: ApplicationAnimation,
    title: 'Web Development',
    description: 'We build beautiful, responsive & feature-rich websites and Progressive Web Applications that solve real customer problems',
  },
  {
    animationData: Cloud,
    title: 'Cloud Native Solutions',
    description: 'We craft dynamic and scalable cloud services, seamlessly addressing real-world business needs with precision and innovation.',
  },
  {
    animationData: SEO,
    title: 'One Stop SEO Solutions',
    description: 'We optimize your digital presence with strategic SEO solutions. Elevate your online visibility and conquer search engine rankings with our expert optimization services.',
    animationTransform: 'scale(0.8)'
  },
  {
    animationData: Support,
    title: 'Unmatched Solution Support',
    description: 'We stand by you with dedicated support. Our team is here, ready to assist, ensuring your success with prompt solutions and expert guidance.',
  },
];

const Page2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  return (
    <motion.div ref={ref}>
      <div className="page-2">
        <div className="services flex-item">
          <AnimatePresence>
            {inView &&
              servicesData.map((service, index) => (
                <motion.div
                  key={`icon${index + 1}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <div className="tech-info">
                    <div className="lottie-icon-container">
                      <Lottie
                        style={{ width: '60px', transform: service.animationTransform || 'scale(1)' }}
                        className="lottie-icon"
                        animationData={service.animationData}
                        loop={true}
                      />
                    </div>
                    <div className="container">
                      <h4 className="header">{service.title}</h4>
                      <p className="info">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <div className="services flex-item">one</div>
      </div>
    </motion.div>
  );
};

export default Page2;
