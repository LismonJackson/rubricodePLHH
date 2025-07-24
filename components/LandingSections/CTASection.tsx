"use client";
import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-30% 0px -30% 0px"});

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.6,
      },
    },
    hidden: {},
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full h-[200vh] overflow-hidden  text-white"
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            key="cta-fixed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center z-10 pointer-events-none"
          >
            {/* Background Blob */}
            <motion.div
              className="absolute inset-0 z-0 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            >
              <div
                className="w-96 h-96 rounded-full"
                style={{
                  background: "radial-gradient(circle, #ffd900dd)",
                  filter: "blur(100px)",
                  mixBlendMode: "screen",
                }}
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="relative text-center px-6 pointer-events-auto z-10"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
            >
              <motion.h2
                variants={childVariants}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                Farm calling for more?
              </motion.h2>

              <motion.h2
                variants={childVariants}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                Next chapter: supported, free, rooted.
              </motion.h2>

              <motion.h2
                variants={childVariants}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                Let your story be heard.
              </motion.h2>

              <motion.h2
                variants={childVariants}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Your vision is our mission.
              </motion.h2>

              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
           <motion.div
                              className="fixed inset-0 z-[60] flex flex-col items-center justify-end pb-10 text-white pointer-events-none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: inView ? 1 : 0 }}
                              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                            >
                              <h3 className="text-sm mb-2 uppercase tracking-wider font-medium drop-shadow-lg">
                                Keep Scrolling
                              </h3>
                              <div className="animate-bounce w-6 h-6 relative drop-shadow-lg">
                                <Image
                                  src="/DoubleDown.png"
                                  alt="Scroll down arrow"
                                  layout="fill"
                                  objectFit="contain"
                                  priority
                                />
                              </div>
                            </motion.div>
    </section>
  );
};

export default CTASection;
