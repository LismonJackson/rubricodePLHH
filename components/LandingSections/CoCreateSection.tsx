"use client";
import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
const CoCreateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <>
      <section ref={ref} className="w-full h-[100vh] relative overflow-hidden">
        <AnimatePresence>
          {isInView && (
            <motion.div
              key="cocreate-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-[100vh] z-50"
            >
              {/* Background Image with Zoom-In Animation */}
              <motion.img
                src="/assets/images/landing/CoCreate.jpg"
                alt="Co-Create Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                animate={{ scale: [1, 1.2] }}
                transition={{
                  duration: 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Text Content */}
              <div className="relative z-10 w-full h-full flex flex-col sm:flex-row justify-between items-center sm:items-start sm:text-left text-center px-4 sm:px-10 md:px-16 py-10 text-white font-bold text-lg sm:text-2xl md:text-4xl gap-y-10 sm:gap-y-0 pt-40">
                {/* Left Text - From Left */}
                <motion.h2
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  You are not here to
                  <br />
                  <span className="text-amber-400">Follow.</span>
                </motion.h2>

                {/* Right Text - From Right */}
                <motion.h2
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                  You are here to
                  <br />
                  <span className="text-amber-400">Co-Create.</span>
                </motion.h2>
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

      <div className="h-[100vh]" />
    </>
  );
};

export default CoCreateSection;
