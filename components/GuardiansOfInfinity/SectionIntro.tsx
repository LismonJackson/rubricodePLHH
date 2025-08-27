"use client";

import React, { useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import InfinityLoop from "@/components/InfinityLoop";
import Image from "next/image";
export default function SectionIntro() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { amount: 0.5 });

  // Variants
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3, when: "beforeChildren" } },
    exit: { transition: { staggerChildren: 0.2, when: "afterChildren" } },
  };

  // Title animation
  const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 180, damping: 20 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.4 } },
  };

  // Text animation with directional slide using custom
  const textVariants: Variants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction * 50,
      y: 20,
      scale: 0.95,
    }),
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { type: "tween", ease: "easeOut", duration: 0.7 },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction * -50,
      y: 20,
      transition: { duration: 0.3 },
    }),
  };

  return (
    
    <div ref={wrapperRef} className="relative w-full h-screen">
      <AnimatePresence>
        {isInView && (
          <motion.section 
            className="fixed inset-0 overflow-hidden flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Darker Themed Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4E2A1E]/50 via-[#3A1F0B]/30 to-[#D4AF37]/40" />

            {/* Main Content Container */}
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center max-w-4xl px-6"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {/* Infinity Loop */}
              <motion.div
                className="mb-8 w-[600px] h-[300px] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <InfinityLoop />
              </motion.div>

              {/* Title */}
              <motion.h2
                variants={titleVariants}
                className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-[0_4px_8px_rgba(212,175,55,0.5)] mb-8"
                whileHover={{ scale: 1.05 }}
              >
                THE TEAM –{" "}
                <span className="text-[#FFE066]">GUARDIANS OF INFINITY</span>
              </motion.h2>

              {/* Text Paragraphs */}
              <div className="space-y-4 text-center">
                {[
                  [
                    -1,
                    "We stand as a ",
                    "concentric circle of purpose",
                    ", uniting diverse voices across continents.",
                  ],
                  [
                    1,
                    "Our shared vision ",
                    "illuminates pathways",
                    " for transformative collaboration.",
                  ],
                  [
                    -1,
                    "Every contribution echoes, empowering us to ",
                    "forge a legacy",
                    " of lasting impact.",
                  ],
                  [
                    1,
                    "Real change begins when we ",
                    "show up together",
                    ", crafting tomorrow.",
                  ],
                ].map(([dir, pre, highlight, post], idx) => (
                  <motion.p
                    key={idx}
                    custom={dir}
                    variants={textVariants}
                    className="text-lg text-white"
                    whileHover={{ scale: 1.02 }}
                  >
                    {pre}
                    <span className="text-[#FFE066] font-semibold">
                      {highlight}
                    </span>
                    {post}
                  </motion.p>
                ))}
              </div>
            </motion.div>

          </motion.section>
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
    </div>
  );
}