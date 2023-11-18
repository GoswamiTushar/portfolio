// import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import ApplicationAnimation from '../../Assets/lottie/app1.json';
import Cloud from '../../Assets/lottie/cloud-1.json'
import SEO from '../../Assets/lottie/seo-3.json'
import Support from '../../Assets/lottie/support.json'
import { useInView } from 'react-intersection-observer';

const Page2 = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.9
    })

    return (
        <motion.div ref={ref}>
            <div className="page-2">
                <div className="services flex-item">
                    <AnimatePresence>
                        {inView &&
                            <>
                                <motion.div
                                    key="icon1"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="lottie-icon-container"
                                >
                                    <Lottie
                                        style={{ width: '50px' }}
                                        className="lottie-icon"
                                        animationData={ApplicationAnimation}
                                        loop={true}
                                    />
                                </motion.div>

                                <motion.div
                                    key="icon1"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="lottie-icon-container"
                                >
                                    <Lottie
                                        style={{ width: '50px' }}
                                        className="lottie-icon"
                                        animationData={Cloud}
                                        loop={true}
                                    />
                                </motion.div>

                                <motion.div
                                    key="icon1"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="lottie-icon-container"
                                >
                                    <Lottie
                                        style={{ width: '50px' }}
                                        className="lottie-icon"
                                        animationData={SEO}
                                        loop={true}
                                    />
                                </motion.div>

                                <motion.div
                                    key="icon1"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    className="lottie-icon-container"
                                >
                                    <Lottie
                                        style={{ width: '50px', transform: 'scale(1.5)' }}
                                        className="lottie-icon"
                                        animationData={Support}
                                        loop={true}
                                    />
                                </motion.div>
                            </>
                        }

                    </AnimatePresence>
                </div>

                <div className="services flex-item">one</div>
            </div>
        </motion.div>
    );
};

export default Page2;
