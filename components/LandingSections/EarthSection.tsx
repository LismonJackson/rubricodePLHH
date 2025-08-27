"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const EarthSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <>
      {/* <div className="h-[100vh]" /> */}

      <section ref={ref} className="relative w-full h-[100vh] overflow-hidden">
        {/* Fixed Inner Content Wrapper */}
        <motion.div
          className="fixed top-0 left-0 w-full h-[100vh] z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Radial Gradient Background Layer (Animated Pulse) */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 10, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute z-0 left-[80%] top-32"
          >
            <div
              className="w-36 h-36"
              style={{
                background:
                  "radial-gradient(circle at center, rgb(251, 205, 3), rgb(212, 195, 1))",
                filter: "blur(80px)",
              }}
            />
          </motion.div>

          {/* Background Image Layer */}
          <motion.img
            src="/earth-section-bg.png"
            alt="Earth Background"
            className="absolute inset-0 w-full h-full object-cover z-9"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: inView ? 0.6 : 0,
              scale: inView ? 1 : 1.05
            }}
            transition={{
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 3, ease: "easeOut" }
            }}
          />

          {/* Mist layers - MORE VISIBLE */}
          <div className="absolute inset-0 z-12">
            {/* Bottom mist - thicker and whiter */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1/2"
              animate={{
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: "linear-gradient(to top, rgba(255,255,255,0.4), rgba(255,255,255,0.2) 40%, transparent)",
                filter: "blur(20px)",
              }}
            />
            
            {/* Floating mist patches - bigger and more opaque */}
            <motion.div
              className="absolute top-1/4 left-0 w-full h-64"
              animate={{
                x: [-200, 200, -200],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.3), transparent 50%)",
                filter: "blur(40px)",
              }}
            />
            
            <motion.div
              className="absolute bottom-1/3 right-0 w-[600px] h-96"
              animate={{
                x: [200, -200, 200],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.25), transparent 40%)",
                filter: "blur(50px)",
              }}
            />

            {/* Additional mist cloud */}
            <motion.div
              className="absolute top-1/2 left-1/4 w-[500px] h-80"
              animate={{
                x: [-100, 100, -100],
                y: [-50, 50, -50],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.35), transparent 45%)",
                filter: "blur(35px)",
              }}
            />
          </div>

          {/* Dark radial blob behind text */}
          <div 
            className="absolute inset-0 z-14 flex items-center justify-center"
            style={{
              background: "radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, transparent 50%)",
              filter: "blur(40px)",
            }}
          />

          {/* Subtle overlay */}
          <div className="absolute inset-0 z-15 bg-black/10" />

          {/* Text Content Layer - cleaner design */}
          <div className="relative z-20 h-full w-full flex flex-col justify-center items-center gap-y-8 px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center space-y-6 max-w-4xl"
            >
              <h1 
                className="text-4xl sm:text-5xl font-bold"
                style={{
                  color: "#FBCD03",
                  textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(251,205,3,0.3)",
                }}
              >
                The Earth is Alive.
              </h1>
              
              <h1 
                className="text-4xl sm:text-5xl font-bold text-white"
                style={{
                  textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)",
                }}
              >
                Every Garden is a Seed.
              </h1>
              
              <h1 
                className="text-4xl sm:text-5xl font-bold text-white"
                style={{
                  textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)",
                }}
              >
                Every seed is a promise.
              </h1>
            </motion.div>

            {/* Dust particles - LOTS OF THEM */}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`dust-${i}`}
                className="absolute pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              >
                <div 
                  className="rounded-full"
                  style={{
                    width: `${1 + Math.random() * 2}px`,
                    height: `${1 + Math.random() * 2}px`,
                    background: i % 2 === 0 
                      ? "rgba(255,255,255,0.6)"
                      : "rgba(251,205,3,0.5)",
                    boxShadow: "0 0 3px rgba(255,255,255,0.3)",
                  }}
                />
              </motion.div>
            ))}

            {/* Larger floating particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, 30 + Math.random() * 20, 0],
                  x: [-15, 15, -15],
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 10,
                }}
              >
                <div 
                  className="rounded-full"
                  style={{
                    width: `${3 + Math.random() * 4}px`,
                    height: `${3 + Math.random() * 4}px`,
                    background: "radial-gradient(circle, rgba(255,255,255,0.4), transparent)",
                    filter: "blur(1px)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator with blur background */}
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-end pb-10 text-white pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
        >
          {/* Blur background for scroll indicator */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-32 -z-10"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          
          <h3 className="text-sm mb-2 uppercase tracking-wider font-medium drop-shadow-lg relative">
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

      <div className="h-[100vh]" />
    </>
  );
};

export default EarthSection;