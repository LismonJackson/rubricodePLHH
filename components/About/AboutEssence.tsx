"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const blobVariants = {
  hidden: (custom: number) => ({
    x: `${custom * -100}vw`,
    opacity: 0,
  }),
  visible: {
    x: "0vw",
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.2, 0.3],
    transition: {
      x: { type: "tween", duration: 0.6, ease: "easeOut" },
      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  },
  exit: (custom: number) => ({
    x: `${custom * 100}vw`,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  }),
};

const AboutEssence: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <section
      ref={ref}
      className="w-screen h-screen relative overflow-hidden bg-black"
    >
      {/* Animated blobs */}
      {[-1, 1].map((dir) => (
        <motion.div
          key={dir}
          custom={dir}
          variants={blobVariants}
          initial="hidden"
          animate={isInView ? "visible" : "exit"}
          className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <div
            className="w-[50vw] h-[50vw] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,217,0,0.5), transparent)",
              filter: "blur(100px)",
              mixBlendMode: "screen",
            }}
          />
        </motion.div>
      ))}

      {/* Dark overlay for better text contrast */}
      <div className="fixed inset-0 z-5 bg-black/40" />

      {/* Text content */}
      <motion.div
        className="fixed inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="max-w-3xl space-y-10">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: isInView ? 0 : -40, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-wider"
              style={{
                background: "linear-gradient(135deg, #F9CD13 0%, #FFE55C 25%, #539241 75%, #6FAF4F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 4px 20px rgba(249,205,19,0.3))",
                letterSpacing: "0.05em",
              }}
            >
              OUR ESSENCE
            </h2>
            <h3
              className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide mt-4"
              style={{
                background: "linear-gradient(135deg, #FFE55C 0%, #F9CD13 50%, #539241 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 3px 15px rgba(249,205,19,0.25))",
                letterSpacing: "0.08em",
              }}
            >
              IT'S ABOUT ALL OF US
            </h3>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: isInView ? 0 : 40, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            {/* Background glow for text */}
            <div 
              className="absolute inset-0 blur-3xl opacity-30"
              style={{
                background: "radial-gradient(ellipse at center, rgba(249,205,19,0.3), transparent 70%)",
              }}
            />
            
            <p className="relative text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed max-w-2xl mx-auto"
               style={{
                 color: "rgba(255, 255, 255, 0.95)",
                 textShadow: `
                   0 0 20px rgba(0,0,0,0.8),
                   0 2px 4px rgba(0,0,0,0.8),
                   0 0 40px rgba(249,205,19,0.2)
                 `,
                 letterSpacing: "0.02em",
               }}
            >
              This isn't about a team.
              <span className="block mt-3">
                It's about{" "}
                <span className="font-semibold" style={{ color: "#F9CD13" }}>humanity</span>,{" "}
                <span className="font-semibold" style={{ color: "#FFE55C" }}>intelligence</span>, and{" "}
                <span className="font-semibold" style={{ color: "#539241" }}>the planet</span>!
              </span>
              <span className="block mt-3">
                A sacred alliance between man, machine, and Mother Nature.
              </span>
            </p>
            
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-medium"
               style={{
                 color: "rgba(255, 255, 255, 0.9)",
                 textShadow: "0 2px 10px rgba(0,0,0,0.7), 0 0 30px rgba(83,146,65,0.3)",
                 letterSpacing: "0.08em",
               }}
            >
              Not branding. Not hype.
              <span className="block mt-3">
                An activation of harmony between technology,
              </span>
              <span className="block">
                humanity, and nature.
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
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
  );
};

export default AboutEssence;