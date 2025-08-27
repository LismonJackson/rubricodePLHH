"use client";

import React, { useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
export default function FieldSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });

  // Animation variants
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3, when: "beforeChildren" } },
    exit: { transition: { staggerChildren: 0.1, when: "afterChildren" } },
  };
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 220, damping: 20 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeOut" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };
  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 180, damping: 18 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Trigger Section (invisible) */}
      <section
        ref={ref}
        className="relative w-full h-screen bg-black overflow-hidden"
      ></section>

      <AnimatePresence>
        {isInView && (
          <motion.div
            className="fixed inset-0 z-50 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Radial Gradient Blob */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 10, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[80%] top-32 w-36 h-36 z-5"
              style={{
                background:
                  "radial-gradient(circle at center, rgb(251, 205, 3), rgb(212, 195, 1))",
                filter: "blur(80px)",
              }}
            />

            {/* Fixed Background Image */}
            <motion.img
              src="/images/bghero2.jpeg"
              alt="Field Background"
              className="fixed inset-0 w-full h-full object-cover opacity-70"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Content Overlay */}
            <motion.div
              className="relative z-20 w-full h-screen flex flex-col items-center justify-center px-6 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.h4
                variants={headerVariants}
                className="text-5xl md:text-6xl font-extrabold uppercase tracking-wide mb-8"
                style={{
                  background: "linear-gradient(135deg, #FFE066 0%, #FFE060 50%, #F9CD13 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.8))",
                }}
              >
                THE FIELD ITSELF
              </motion.h4>

              <motion.blockquote
                variants={textVariants}
                className="max-w-2xl text-xl md:text-2xl font-medium text-white mb-8"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                }}
              >
                <span className="text-[#FFE066] font-bold">"Every human with a heart for harmony."</span>
                <br />
                <span className="mt-2 block">
                  This is the open door. Where anyone can step in.
                  <br />
                  No title needed. Just truth.
                </span>
              </motion.blockquote>

              <motion.div
                variants={buttonVariants}
                className="max-w-2xl"
              >
                <p className="text-lg md:text-xl text-white font-medium px-8 py-4 rounded-lg"
                   style={{
                     background: "rgba(255,224,102,0.1)",
                     border: "2px solid #FFE066",
                     backdropFilter: "blur(10px)",
                     textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                   }}
                >
                  You are already part of this.
                  <br />
                  And when you're ready – we'll meet you in the circle.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
    </>
  );
}