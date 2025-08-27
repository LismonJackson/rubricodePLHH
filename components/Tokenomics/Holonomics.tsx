// components/Holonomics.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: "easeInOut", delay: 0.2 },
  },
};

const headingContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.8, when: "beforeChildren" } },
};

const symbolVariants: Variants = {
  hidden: { opacity: 0, rotate: -90, scale: 0.5 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { 
      duration: 1.2, 
      ease: "easeOut",
      rotate: {
        duration: 2,
        ease: "easeInOut"
      }
    },
  },
  exit: {
    opacity: 0,
    rotate: 90,
    scale: 0.5,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const textVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { x: 50, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 1.4 + custom * 0.15,
    },
  }),
};

export default function Holonomics() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { amount: 0, once: false });
  const isRevealed = useInView(ref, { amount: 0, once: true });

  return (
    <>
      <section ref={ref} className="w-full h-screen relative overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="fixed inset-0"
          variants={fadeVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="absolute inset-0 bg-black" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(249,205,19,0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(83,146,65,0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(0,168,232,0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(249,205,19,0.15) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Animated star particles */}
        <motion.div
          className="fixed inset-0 pointer-events-none"
          variants={fadeVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14.09 8.26L20.18 8.27L15.54 12.14L17.64 18.4L12 14.54L6.36 18.4L8.46 12.14L3.82 8.27L9.91 8.26L12 2Z"
                  fill={i % 3 === 0 ? "#F9CD13" : i % 3 === 1 ? "#539241" : "#00A8E8"}
                  opacity="0.8"
                />
              </svg>
            </motion.div>
          ))}
        </motion.div>

        {/* Spotlight with pulse */}
        <motion.div
          className="fixed inset-0 pointer-events-none"
          variants={fadeVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="w-full h-full"
            animate={{
              background: [
                "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%)",
                "radial-gradient(circle at center, rgba(255,255,255,0.12), transparent 70%)",
                "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center"
          variants={fadeVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Heading with enhanced animation */}
          <motion.div
            className="flex items-center justify-center gap-4 sm:gap-6 mb-12 overflow-visible"
            variants={headingContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { 
                opacity: 1, 
                scale: 1,
                rotate: [0, 360]
              } : { 
                opacity: 0, 
                scale: 0.5 
              }}
              transition={{ 
                opacity: { duration: 1.2, ease: "easeOut" },
                scale: { duration: 1.2, ease: "easeOut" },
                rotate: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
              className="text-5xl sm:text-6xl lg:text-7xl p-2 inline-block"
              style={{
                background: "linear-gradient(135deg, #F9CD13 0%, #539241 50%, #00A8E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(249,205,19,0.6)) drop-shadow(0 0 60px rgba(83,146,65,0.4))",
              }}
            >
              🌀
            </motion.div>
            <motion.h1
              variants={textVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-wider"
              style={{
                background: "linear-gradient(135deg, #F9CD13 0%, #FFE55C 25%, #539241 50%, #00A8E8 75%, #F9CD13 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 6px 25px rgba(249,205,19,0.4)) drop-shadow(0 3px 10px rgba(0,0,0,0.9))",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                backgroundPosition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              Holonomics
            </motion.h1>
          </motion.div>

          {/* Text content with staggered animation */}
          <motion.div
            className="max-w-3xl space-y-4"
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
          >
            {[
              { text: "Value is intention in motion.", highlight: ["intention", "motion"] },
              { text: "Growth is the gift that returns.", highlight: ["gift", "returns"] },
              { text: "Tokens are vessels.", highlight: ["vessels"] },
              { text: "Wallets are portals.", highlight: ["portals"] },
              { text: "Holders are storytellers.", highlight: ["storytellers"] },
              { text: "Finance is frequency.", highlight: ["frequency"] },
              { text: "Allocation is alignment.", highlight: ["alignment"] },
            ].map((line, index) => (
              <motion.p
                key={index}
                custom={index}
                variants={lineVariants}
                className="text-xl sm:text-2xl lg:text-3xl font-light"
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                }}
              >
                {line.text.split(" ").map((word, wordIndex) => {
                  const isHighlighted = line.highlight.includes(word.replace(/[.,]/g, ""));
                  return (
                    <span key={wordIndex}>
                      {wordIndex > 0 && " "}
                      {isHighlighted ? (
                        <span
                          style={{
                            background: `linear-gradient(135deg, 
                              ${index % 3 === 0 ? "#F9CD13" : index % 3 === 1 ? "#539241" : "#00A8E8"} 0%, 
                              ${index % 3 === 0 ? "#FFE55C" : index % 3 === 1 ? "#6FAF4F" : "#00D4FF"} 100%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontWeight: 600,
                            filter: `drop-shadow(0 0 20px ${
                              index % 3 === 0 ? "rgba(249,205,19,0.5)" : 
                              index % 3 === 1 ? "rgba(83,146,65,0.5)" : 
                              "rgba(0,168,232,0.5)"
                            })`,
                          }}
                        >
                          {word}
                        </span>
                      ) : (
                        word
                      )}
                    </span>
                  );
                })}
              </motion.p>
            ))}

            {/* Final line with special styling */}
            <motion.p
              custom={7}
              variants={lineVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-8"
              style={{
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 40px rgba(249,205,19,0.3)",
              }}
            >
              <span style={{ color: "#F9CD13" }}>Peace</span>
              <span style={{ color: "rgba(255,255,255,0.8)" }}> · </span>
              <span style={{ color: "#539241" }}>Love</span>
              <span style={{ color: "rgba(255,255,255,0.8)" }}> · </span>
              <span style={{ color: "#00A8E8" }}>Harmony</span>
              <span style={{ color: "rgba(255,255,255,0.9)" }}> – in conscious flow.</span>
            </motion.p>
          </motion.div>
        </motion.div>

     
      </section>
    </>
  );
}