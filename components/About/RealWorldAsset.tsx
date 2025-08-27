"use client";

import React, { useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
const RealWorldAsset = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const words = ["Soil", "Water", "Trees", "Life"];

  // stagger each word into view, 0.5s apart, sliding up from below (y: 50px)
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5, duration: 0.6, ease: "easeOut" },
    }),
  };

  const colors: Record<string, string> = {
    Soil: "#A67C00",
    Water: "#00ADEF",
    Trees: "#539241",
    Life: "#F9CD13",
  };

  return (
    <>
      <section ref={ref} className="w-full h-[100vh] relative overflow-hidden">
        <AnimatePresence>
          {isInView && (
            <motion.div
              key="real-world-asset-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="
                fixed inset-0
                bg-black text-white z-50
                flex flex-col items-center justify-center
                px-6 text-center overflow-hidden
              "
            >
              {/* Words appear one by one, sliding up from below, always colored & glowing */}
              <div className="relative z-10 flex flex-col items-center space-y-6">
                {words.map((word, i) => (
                  <motion.div
                    key={word}
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl sm:text-6xl font-bold"
                    style={{
                      color: colors[word],
                      textShadow: `0 0 8px ${colors[word]}, 0 0 16px ${colors[word]}`,
                    }}
                  >
                    {word}
                  </motion.div>
                ))}
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
      {/* Spacer to allow scrolling */}
      {/* <div className="h-[100vh]" /> */}
    </>
  );
};

export default RealWorldAsset;
