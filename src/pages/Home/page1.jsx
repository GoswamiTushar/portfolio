import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './styles.css';
import { TypeAnimation } from 'react-type-animation';

const AboutSection = () => {
    const controls = useAnimation();
    const isMobile = window.innerWidth <= 600
    console.log(isMobile)

    useEffect(() => {
        controls.start({ opacity: 1, x: 0 });
    }, [controls]);

    return (
        <motion.div
            className='about-section'
            initial={{ opacity: 0, x: -200 }}
            animate={controls}
            transition={{ duration: 1, ease: 'easeInOut' }}
        >
            <div className='blur-overlay'></div>
            <div className='content'>
                <div className='info-container'>
                    <div>
                        <span className="">
                            I Provide <br />
                            <span className='bold'>Software {isMobile ? <br /> : void 0} Solutions</span> <br />
                            for your <br />
                            <span className='bold'>Business </span>
                            <TypeAnimation
                                sequence={[
                                    'Problems',
                                    1000,
                                    'Expansion',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                className='bold'
                                style={{ color: 'var(--primaryMain)', width: '800px', display: 'inline-flex', alignItems: 'center', justifyContent: isMobile ? 'center' : '' }}
                                repeat={Infinity}
                                preRenderFirstString
                            /> <br />
                        </span>
                        <span className='sub-heading'>
                            Get ready to turn your <i>Dreams </i> into <i>Reality</i>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutSection;
