"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const HarmonySpectrum = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <>
      {/* <div className="h-[100vh]" /> */}

      <section
        ref={ref}
        className="relative w-full h-[100vh] bg-black overflow-hidden"
      >
        {/* Background Image (visible only on large screens and up) */}
        <motion.img
          src="/harmony-spectrum-line.png"
          alt="Harmony Spectrum Line"
          className="fixed inset-0 w-full h-full object-contain z-0 hidden lg:block"
          initial={{ opacity: 0, filter: "brightness(0.3) saturate(0.5)" }}
          animate={{ 
            opacity: inView ? 1 : 0,
            filter: inView ? [
              "brightness(1.0) saturate(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.3))",
              "brightness(2.0) saturate(1.0) drop-shadow(0 0 50px rgba(255,255,255,1.0))",
              "brightness(1.0) saturate(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.3))"
            ] : "brightness(0.3) saturate(0.5)"
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeInOut",
            filter: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Technology Blob - Aquamarine/Teal Crystal */}
        <motion.div
          className="fixed z-10 flex flex-col items-center gap-4 top-[18%] left-[5%] sm:top-[26%] sm:left-[10%] md:top-[38%] md:left-[12%] lg:top-[38%] lg:left-[10%]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: inView ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="w-28 h-28 rounded-full relative overflow-hidden"
            style={{
              background: `
                radial-gradient(ellipse at 30% 20%, #7dd3fc 0%, transparent 50%),
                radial-gradient(ellipse at 70% 80%, #22d3ee 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, #0891b2 0%, #164e63 50%, #0f172a 100%)
              `,
              border: "1px solid rgba(34, 211, 238, 0.3)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px 5px rgba(34, 211, 238, 0.4), 0 0 40px 10px rgba(34, 211, 238, 0.2), inset 0 0 20px rgba(125, 211, 252, 0.3)",
                "0 0 40px 15px rgba(34, 211, 238, 0.6), 0 0 80px 25px rgba(34, 211, 238, 0.3), inset 0 0 30px rgba(125, 211, 252, 0.5)",
                "0 0 20px 5px rgba(34, 211, 238, 0.4), 0 0 40px 10px rgba(34, 211, 238, 0.2), inset 0 0 20px rgba(125, 211, 252, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {/* Inner shine effect */}
            <motion.div
              className="absolute inset-2 rounded-full"
              style={{
                background: "radial-gradient(ellipse at 25% 25%, rgba(125, 211, 252, 0.8) 0%, transparent 70%)",
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            {/* Crystal facet reflections */}
            <motion.div
              className="absolute top-2 left-4 w-8 h-2 bg-white rounded-full"
              style={{ opacity: 0.6, filter: "blur(1px)" }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-4 right-3 w-6 h-1 bg-cyan-200 rounded-full"
              style={{ opacity: 0.5, filter: "blur(0.5px)" }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 3.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: inView ? 0 : 60, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-white font-semibold leading-tight text-[1.1rem] text-center"
            style={{
              textShadow: "0 0 10px rgba(34, 211, 238, 0.6), 0 0 20px rgba(34, 211, 238, 0.4), 0 0 30px rgba(34, 211, 238, 0.2)",
            }}
          >
            <p>
              Technology with <span className="text-cyan-400" style={{ 
                textShadow: "0 0 15px rgba(34, 211, 238, 0.8), 0 0 25px rgba(34, 211, 238, 0.6)" 
              }}>Soul.</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Nature Blob - Emerald Crystal */}
        <motion.div
          className="fixed z-10 flex flex-col items-center gap-4 bottom-[22%] left-[42%] sm:bottom-[14%] md:bottom-[12%] lg:bottom-[15.7%]"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: inView ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animate text entry from top */}
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: inView ? 0 : -60, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-white font-semibold leading-tight text-[1.1rem] text-center"
            style={{
              textShadow: "0 0 10px rgba(16, 185, 129, 0.6), 0 0 20px rgba(16, 185, 129, 0.4), 0 0 30px rgba(16, 185, 129, 0.2)",
            }}
          >
            <p>
              Nature with <span className="text-green-400" style={{ 
                textShadow: "0 0 15px rgba(16, 185, 129, 0.8), 0 0 25px rgba(16, 185, 129, 0.6)" 
              }}>Purpose.</span>
            </p>
          </motion.div>

          <motion.div
            className="w-28 h-28 rounded-full relative overflow-hidden"
            style={{
              background: `
                radial-gradient(ellipse at 30% 20%, #86efac 0%, transparent 50%),
                radial-gradient(ellipse at 70% 80%, #10b981 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, #059669 0%, #064e3b 50%, #0f172a 100%)
              `,
              border: "1px solid rgba(16, 185, 129, 0.3)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px 5px rgba(16, 185, 129, 0.4), 0 0 40px 10px rgba(16, 185, 129, 0.2), inset 0 0 20px rgba(134, 239, 172, 0.3)",
                "0 0 40px 15px rgba(16, 185, 129, 0.6), 0 0 80px 25px rgba(16, 185, 129, 0.3), inset 0 0 30px rgba(134, 239, 172, 0.5)",
                "0 0 20px 5px rgba(16, 185, 129, 0.4), 0 0 40px 10px rgba(16, 185, 129, 0.2), inset 0 0 20px rgba(134, 239, 172, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {/* Inner shine effect */}
            <motion.div
              className="absolute inset-2 rounded-full"
              style={{
                background: "radial-gradient(ellipse at 25% 25%, rgba(134, 239, 172, 0.8) 0%, transparent 70%)",
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            {/* Crystal facet reflections */}
            <motion.div
              className="absolute top-3 left-5 w-7 h-2 bg-white rounded-full"
              style={{ opacity: 0.7, filter: "blur(1px)" }}
              animate={{
                opacity: [0.5, 0.9, 0.5],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 2.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-3 right-4 w-5 h-1 bg-green-200 rounded-full"
              style={{ opacity: 0.6, filter: "blur(0.5px)" }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [0.9, 1.2, 0.9],
              }}
              transition={{
                duration: 3.2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Humanity Blob - Citrine/Amber Crystal */}
        <motion.div
          className="fixed z-10 flex flex-col items-center gap-4 top-[20%] right-[5%] sm:top-[28%] sm:right-[10%] md:top-[42%] md:right-[12%] lg:top-[40%] lg:right-[10%]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: inView ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="w-28 h-28 rounded-full relative overflow-hidden"
            style={{
              background: `
                radial-gradient(ellipse at 30% 20%, #fbbf24 0%, transparent 50%),
                radial-gradient(ellipse at 70% 80%, #f59e0b 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, #d97706 0%, #92400e 50%, #0f172a 100%)
              `,
              border: "1px solid rgba(245, 158, 11, 0.3)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px 5px rgba(245, 158, 11, 0.4), 0 0 40px 10px rgba(245, 158, 11, 0.2), inset 0 0 20px rgba(251, 191, 36, 0.3)",
                "0 0 40px 15px rgba(245, 158, 11, 0.6), 0 0 80px 25px rgba(245, 158, 11, 0.3), inset 0 0 30px rgba(251, 191, 36, 0.5)",
                "0 0 20px 5px rgba(245, 158, 11, 0.4), 0 0 40px 10px rgba(245, 158, 11, 0.2), inset 0 0 20px rgba(251, 191, 36, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {/* Inner shine effect */}
            <motion.div
              className="absolute inset-2 rounded-full"
              style={{
                background: "radial-gradient(ellipse at 25% 25%, rgba(251, 191, 36, 0.8) 0%, transparent 70%)",
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            {/* Crystal facet reflections */}
            <motion.div
              className="absolute top-2 left-3 w-9 h-2 bg-white rounded-full"
              style={{ opacity: 0.8, filter: "blur(1px)" }}
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [0.7, 1.4, 0.7],
              }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-4 right-2 w-4 h-1 bg-yellow-100 rounded-full"
              style={{ opacity: 0.7, filter: "blur(0.5px)" }}
              animate={{
                opacity: [0.5, 0.9, 0.5],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 2.9,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: inView ? 0 : 60, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-white font-semibold leading-tight text-[1.1rem] text-center"
          >
            <p>
              Humanity with <span className="text-orange-400">Vision.</span>
            </p>
          </motion.div>
        </motion.div>
      </section>
      
      <motion.div
        className="fixed inset-0 z-[5] flex flex-col items-center justify-end pb-10 text-white"
        animate={{ opacity: inView ? 1 : 0 }}
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
      <div className="h-[100vh]" />
    </>
  );
};

export default HarmonySpectrum;