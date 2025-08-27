"use client";

import React, { useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
export default function FoundationalCircle() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  // Animation variants
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2, when: "beforeChildren" } },
    exit: { transition: { staggerChildren: 0.1, when: "afterChildren" } },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", ease: "easeOut", duration: 0.6 },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  // Team members data
  const teamMembers = [
    { id: 1, name: "Mathias", link: "#" },
    { id: 2, name: "Sonja", link: "#" },
    { id: 3, name: "Volker", link: "#" },
    { id: 4, name: "Monika", link: "#" },
    { id: 5, name: "Lisa", link: "#" },
    { id: 6, name: "Stephan", link: "#" },
    { id: 7, name: "Andrea", link: "#" },
    { id: 8, name: "Nico", link: "#" },
  ];

  return (
    <section ref={ref} className="w-full h-screen relative overflow-hidden bg-black">
      <AnimatePresence>
        {isInView && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center bg-black bg-opacity-20 backdrop-blur-sm"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            
            {/* Subtle glow effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at center, rgba(255,224,102,0.05), transparent 60%)",
              }}
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl w-full">
              {/* Header */}
              <motion.h4
                variants={headerVariants}
                className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFE066] via-[#FFE060] to-[#7B245A]"
              >
                THE FOUNDATIONAL CIRCLE
              </motion.h4>

              {/* Description */}
              <motion.p
                variants={textVariants}
                className="text-lg leading-relaxed text-[#FFE060] max-w-3xl mx-auto mb-12"
              >
                "The ones who lit the first fire." These are the original{" "}
                <span className="text-white font-bold">vision holders</span>.
                The{" "}
                <span className="text-white font-bold">initiators</span>.
                The{" "}
                <span className="text-white font-bold">builders</span>.
                The{" "}
                <span className="text-white font-bold">seed-planters</span>.
                They didn't create this to be seen – they created this so others
                could belong.
              </motion.p>

              {/* Team Members Grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto"
              >
                {teamMembers.map(({ id, name, link }, index) => (
                  <motion.a
                    key={id}
                    href={link}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    {/* Circle with gradient */}
                    <div className="relative">
                      <div 
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, #FFE066, #7B245A)",
                          padding: "3px",
                        }}
                      >
                        {/* Inner circle with gradient background */}
                        <div 
                          className="w-full h-full rounded-full flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, 
                              ${index % 4 === 0 ? "rgba(255,224,102,0.2), rgba(123,36,90,0.3)" : 
                                index % 4 === 1 ? "rgba(123,36,90,0.2), rgba(255,224,102,0.3)" :
                                index % 4 === 2 ? "rgba(255,224,96,0.2), rgba(255,224,102,0.3)" :
                                "rgba(123,36,90,0.3), rgba(255,224,96,0.2)"}
                            ), #111111`,
                          }}
                        >
                          <span className="text-3xl sm:text-4xl font-black"
                                style={{
                                  background: "linear-gradient(135deg, #FFE066, #FFE060)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  backgroundClip: "text",
                                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                                }}>
                            {name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        style={{
                          background: "radial-gradient(circle, rgba(255,224,102,0.4), transparent 60%)",
                          filter: "blur(25px)",
                        }}
                      />
                    </div>
                    
                    {/* Name */}
                    <span className="mt-3 text-sm sm:text-base font-semibold uppercase tracking-wide text-white group-hover:text-[#FFE060] transition-colors duration-300">
                      {name}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
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
    </section>
  );
}