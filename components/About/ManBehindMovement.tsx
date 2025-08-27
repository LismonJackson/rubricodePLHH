"use client";

import React, { useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
const blobVariants: Variants = {
  visible: {
    scale: [1, 1.3, 1],
    opacity: [0.4, 0.25, 0.4],
    transition: {
      duration: 8, // Slower animation for smoother performance
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  exit: {
    scale: 4,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ManBehindMovement = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  return (
    <>
      <section
        ref={ref}
        className="w-full h-[100vh] relative overflow-hidden bg-black"
      >
        <AnimatePresence mode="wait">
          {isInView && (
            <motion.div
              key="man-behind-movement-wrapper"
              className="fixed inset-0 flex items-center justify-center px-8 text-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Optimized corner blobs - using CSS transforms instead of motion */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { pos: "top-0 left-0", delay: "0s" },
                  { pos: "top-0 right-0", delay: "2s" },
                  { pos: "bottom-0 left-0", delay: "4s" },
                  { pos: "bottom-0 right-0", delay: "6s" },
                ].map((item) => (
                  <div
                    key={item.pos}
                    className={`absolute ${item.pos} w-80 h-80`}
                    style={{
                      animation: `pulse 8s ${item.delay} infinite ease-in-out`,
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(14,228,163,0.4), transparent 70%)",
                        filter: "blur(120px)", // Reduced blur for better performance
                        transform: "translate3d(0,0,0)", // Force GPU acceleration
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 z-5" />

              {/* Main content with optimized animations */}
              <div className="relative z-10 max-w-4xl space-y-10">
                {/* Title */}
                <motion.div
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h2
                    className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-tight"
                    style={{
                      background: "linear-gradient(135deg, #F9CD13 0%, #FFE55C 25%, #539241 75%, #6FAF4F 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.8))",
                      letterSpacing: "0.05em",
                    }}
                  >
                    THE MAN BEHIND
                    <span className="block">THE MOVEMENT</span>
                  </h2>
                </motion.div>

                {/* First paragraph */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed"
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                    letterSpacing: "0.02em",
                  }}
                >
                  I ignited the light of{" "}
                  <span style={{ 
                    color: "#F9CD13", 
                    fontWeight: 600,
                    textShadow: "0 2px 8px rgba(0,0,0,0.9)"
                  }}>
                    Peace, Love & Harmony
                  </span>
                  {" "}– but it is the{" "}
                  <span style={{ 
                    color: "#14E4A3", 
                    fontWeight: 600,
                    textShadow: "0 2px 8px rgba(0,0,0,0.9)"
                  }}>
                    Guardians of Infinity
                  </span>
                  {" "}who make it shine and carry it into the world.
                </motion.p>

                {/* Second paragraph */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="text-lg sm:text-xl lg:text-2xl leading-relaxed"
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                    letterSpacing: "0.02em",
                  }}
                >
                  My deepest calling is to unite those who choose to live in harmony with the{" "}
                  <span style={{ 
                    color: "#FFE55C", 
                    fontWeight: 600,
                    textShadow: "0 2px 6px rgba(0,0,0,0.8)"
                  }}>
                    four sacred pillars
                  </span>{" "}
                  of our world:
                </motion.p>

                {/* Four Pillars - simplified animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  className="flex flex-wrap justify-center gap-4 my-8"
                >
                  {[
                    { text: "Mother Nature", color: "#539241" },
                    { text: "The Animal Kingdom", color: "#14E4A3" },
                    { text: "Humanity", color: "#F9CD13" },
                    { text: "Conscious Technology", color: "#FFE55C" }
                  ].map((pillar) => (
                    <span
                      key={pillar.text}
                      className="text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wide"
                      style={{
                        color: pillar.color,
                        textShadow: `0 3px 10px rgba(0,0,0,0.9)`,
                      }}
                    >
                      {pillar.text}
                    </span>
                  ))}
                </motion.div>

                {/* Final statement */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-medium italic leading-relaxed"
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    textShadow: "0 3px 12px rgba(0,0,0,0.9)",
                    letterSpacing: "0.03em",
                  }}
                >
                  Together, we can create a future where these pillars stand in{" "}
                  <span style={{ 
                    background: "linear-gradient(135deg, #F9CD13 0%, #14E4A3 50%, #539241 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 700,
                    fontStyle: "normal",
                  }}>
                    perfect alignment
                  </span>
                  {" "}– as a living symphony of{" "}
                  <span style={{ color: "#14E4A3", fontWeight: 600 }}>balance</span>,{" "}
                  <span style={{ color: "#F9CD13", fontWeight: 600 }}>beauty</span>, and{" "}
                  <span style={{ color: "#539241", fontWeight: 600 }}>belonging</span>.
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CSS Animation for blobs */}
        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.4;
            }
            50% {
              transform: scale(1.3);
              opacity: 0.25;
            }
          }
        `}</style>
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

export default ManBehindMovement;