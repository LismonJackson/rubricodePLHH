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
      className="relative w-full h-[200vh] overflow-hidden text-white"
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
            {/* Optimized Background Effects */}
            <motion.div
              className="absolute inset-0 z-0 flex items-center justify-center will-change-transform"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <div
                className="w-[400px] h-[400px] rounded-full opacity-80"
                style={{
                  background: "radial-gradient(circle, #ffd900dd 0%, #ffaa00aa 60%, transparent 80%)",
                  filter: "blur(100px)",
                  mixBlendMode: "screen",
                }}
              />
            </motion.div>



            {/* Text Content */}
            <motion.div
              className="relative text-center px-8 md:px-12 pointer-events-auto z-10 max-w-6xl mx-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
            >
              <motion.h2
                variants={childVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 leading-normal py-2"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #f3f4f6 50%, #ffffff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                }}
              >
                Do you need support as a farmer?
              </motion.h2>

              <motion.h2
                variants={childVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 leading-normal py-2"
                style={{
                  background: "linear-gradient(135deg, #fef3c7 0%, #fbbf24 50%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
                }}
              >
                Let us hear your story and vision.
              </motion.h2>

              <motion.h2
                variants={childVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 leading-normal py-2"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #fef3c7 50%, #fbbf24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                }}
              >
                We will tell it and make it come true with you!
              </motion.h2>

              <motion.div
                variants={childVariants}
                className="relative py-2"
              >
                <h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-normal"
                  style={{
                    background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 30px rgba(251, 191, 36, 0.6)",
                  }}
                >
                  Your vision is our mission.
                </h2>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-yellow-400/10 via-orange-400/20 to-yellow-400/10 rounded-lg blur-xl -z-10"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3] 
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        className="fixed inset-0 z-[60] flex flex-col items-center justify-end pb-10 text-white pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
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