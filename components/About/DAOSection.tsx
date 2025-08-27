"use client";

import React, { useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
const DAOSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  // Animation variants for each element
  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: custom * 0.15 },
    }),
  };

  return (
    <>
      <section ref={ref} className="w-full h-[100vh] relative overflow-hidden">
        <AnimatePresence>
          {isInView && (
            <motion.div
              key="dao-section-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed inset-0 bg-black text-white z-50 flex flex-col justify-center h-full overflow-hidden"
            >
              {/* Background image with zoom effect */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{
                  backgroundImage: "url('/assets/images/landing/CoCreate.jpg')",
                }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
              />

              {/* Dark overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-5" />

              {/* Content Container */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 space-y-8">
                
                {/* Top: DAO for All */}
                <motion.div
                  variants={rowVariants}
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  className="text-center"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                      style={{
                        textShadow: "0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(249,205,19,0.3)",
                      }}>
                    A{" "}
                    <span style={{
                      color: "#F9CD13",
                      textShadow: "0 0 30px rgba(249,205,19,0.6), 0 4px 15px rgba(0,0,0,0.8)",
                      fontWeight: 900,
                    }}>
                      DAO
                    </span>{" "}
                    for all.
                  </h2>
                </motion.div>

                {/* Top-Center: Every voice matters */}
                <motion.div
                  variants={rowVariants}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center"
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 0 25px rgba(249,205,19,0.2)",
                  }}
                >
                  Every{" "}
                  <span style={{
                    color: "#F9CD13",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    textShadow: "0 0 25px rgba(249,205,19,0.5), 0 3px 10px rgba(0,0,0,0.8)",
                  }}>
                    voice
                  </span>{" "}
                  matters.
                </motion.div>

                {/* CENTER - MAIN MESSAGE */}
                <motion.div
                  variants={rowVariants}
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  className="my-12 py-8"
                >
                  <h1 
                    className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-wider text-center"
                    style={{
                      background: "linear-gradient(135deg, #F9CD13 0%, #FFE55C 50%, #F9CD13 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "none",
                      filter: "drop-shadow(0 8px 32px rgba(249,205,19,0.5)) drop-shadow(0 4px 16px rgba(0,0,0,0.9))",
                      letterSpacing: "0.1em",
                      lineHeight: 1.2,
                    }}
                  >
                    WE ARE ALL{" "}
                    <span style={{
                      display: "inline-block",
                      background: "linear-gradient(135deg, #FFE55C 0%, #F9CD13 50%, #FFE55C 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      transform: "scale(1.1)",
                      filter: "drop-shadow(0 0 40px rgba(249,205,19,0.8)) drop-shadow(0 4px 20px rgba(0,0,0,1))",
                    }}>
                      ONE
                    </span>
                  </h1>
                  
                  {/* Decorative line under main message */}
                  <motion.div 
                    className="mt-6 mx-auto"
                    initial={{ width: 0 }}
                    animate={{ width: "200px" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                      height: "3px",
                      background: "linear-gradient(90deg, transparent, #F9CD13, transparent)",
                      boxShadow: "0 0 20px rgba(249,205,19,0.6)",
                    }}
                  />
                </motion.div>

                {/* Bottom: Freedom and Co-create */}
                <motion.div
                  variants={rowVariants}
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-xl sm:text-2xl lg:text-3xl font-medium text-center"
                >
                  <div style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(249,205,19,0.2)",
                  }}>
                    <span style={{
                      color: "#F9CD13",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      textShadow: "0 0 25px rgba(249,205,19,0.5), 0 3px 10px rgba(0,0,0,0.8)",
                    }}>
                      Freedom
                    </span>{" "}
                    <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                      is coded in.
                    </span>
                  </div>
                  
                  <div style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(249,205,19,0.2)",
                  }}>
                    <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                      We{" "}
                    </span>
                    <span style={{
                      color: "#F9CD13",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      textShadow: "0 0 25px rgba(249,205,19,0.5), 0 3px 10px rgba(0,0,0,0.8)",
                    }}>
                      co-create
                    </span>
                    <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                      , not rule.
                    </span>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
         <motion.div
                      className="fixed inset-0 z-[60] flex flex-col items-center justify-end pb-10 text-white pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isInView ? 1 : 0 }}
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
    </>
  );
};

export default DAOSection;