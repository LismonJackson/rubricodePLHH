"use client";

import React, { useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import InfinityLoop from "@/components/InfinityLoop";

const SpiritSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const headingVariants: Variants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <>
      <section
        ref={ref}
        className="w-full h-[100vh] relative overflow-hidden bg-black"
      >
        <AnimatePresence>
          {isInView && (
            <motion.div
              key="spirit-section-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center px-6 overflow-hidden"
            >
              {/* Top heading - OUR SPIRIT */}
              <motion.h2
                variants={headingVariants}
                className="
                  text-3xl sm:text-4xl font-extrabold
                  bg-gradient-to-r from-[#87CEEB] via-[#4682B4] to-[#1E90FF]
                  bg-clip-text text-transparent
                  uppercase tracking-wide
                  mb-8
                "
              >
                OUR SPIRIT
              </motion.h2>

              {/* Infinity loop */}
              <div className="w-[800px] h-[400px] relative -mt-44 mb-28">
                <InfinityLoop />
              </div>

              {/* Content below infinity */}
              <div className="relative z-10 max-w-4xl space-y-6 text-center -mt-16">
                {/* Main heading */}
                <motion.h3
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className="
                    text-3xl sm:text-4xl font-extrabold
                    bg-gradient-to-r from-[#F9CD13] via-[#A67C00] to-[#539241]
                    bg-clip-text text-transparent
                    uppercase tracking-wide
                  "
                >
                  PEACE, LOVE & HARMONY
                </motion.h3>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  className="text-lg sm:text-xl text-white/90"
                >
                  for more{" "}
                  <span className="font-bold text-[#F9CD13] uppercase">
                    HUMANITY
                  </span>
                </motion.p>

                {/* Bottom text */}
                <motion.p
                  variants={textVariants}
                  className="
                    text-lg sm:text-xl
                    italic
                    text-white/90
                    drop-shadow-lg
                    mt-8
                  "
                >
                  Not a name. Not a brand. A choice. A path. A system. A
                  feeling. If something in you remembers it – you were always
                  part of us.
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default SpiritSection;