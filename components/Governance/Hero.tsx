"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import InfinityLoop from "@/components/InfinityLoop";
import Image from "next/image";
export function GovernanceHero() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sentinelRef, { amount: 0.5, once: false });

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3, when: "beforeChildren" } },
  };

  const itemVariants: Variants = {
    hidden: (_: number) => ({ opacity: 0, y: 30 }),
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", ease: "easeOut", duration: 0.7 },
    },
    exit: (_: number) => ({
      opacity: 0,
      y: -30,
      transition: { duration: 0.3 },
    }),
  };

  // Updated lines to reflect new governance narrative
  const lines = [
    "This all started with one person. One vision. One voice.",
    "A man sitting in silence, investing not just money – but belief.",
    "Creating from scratch. Not knowing if it would work. Only knowing that he had to try.",
    "Because if he didn't speak, if he didn't act, if he didn't give his vision a voice – nothing would move.",
    "This is the essence of Governance.",
  ];

  return (
    <>
      {/* trigger */}
      <div ref={sentinelRef} className="w-full h-screen" />

      <AnimatePresence>
        {isInView && (
          <motion.section
            key="governance-hero"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* 1) Infinity-loop background */}
            <motion.div
              className="fixed inset-0 -z-20 pointer-events-none pb-20 -mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <InfinityLoop />
            </motion.div>

            {/* 2) Gold-brown gradient overlay */}
            <motion.div
              className="fixed inset-0 -z-10 bg-gradient-to-br from-[#4E2A1E]/50 via-[#3A1F0B]/30 to-[#D4AF37]/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* 3) Content */}
            <motion.div
              className="relative z-30 max-w-3xl px-6 text-center space-y-4 mt-52"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <motion.h2
                variants={itemVariants}
                className="
                  font-montserrat text-4xl md:text-5xl lg:text-6xl
                  font-bold tracking-tight
                  bg-gradient-to-r from-[#D4AF37] via-[#FFE066] to-[#D4AF37]
                  bg-clip-text text-transparent
                "
                whileHover={{ scale: 1.02 }}
              >
                🗳 GOVERNANCE – A VOICE THAT BECOMES A MOVEMENT
              </motion.h2>

              {lines.map((text, idx) => (
                <motion.p
                  key={idx}
                  custom={idx}
                  variants={itemVariants}
                  className="
                    text-lg font-semibold text-white
                    drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]
                  "
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>


          </motion.section>
        )}
      </AnimatePresence>
        <motion.div
                          className="fixed inset-0 z-[50] flex flex-col items-center justify-end pb-10 text-white"
                          animate={{ opacity: isInView ? 1 : 0 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                          <h3 className="text-sm mb-2 uppercase tracking-wider">
                            Keep Scrolling
                          </h3>
                          <div className="animate-bounce w-6 h-6 relative">
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
