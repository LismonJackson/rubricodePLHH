"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
const StakingHero = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, {
    amount: 0.5,
    once: false,
  });

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden text-white flex pt-20"
    >
      <div className="w-full h-full flex flex-col justify-between">
        {/* Top Row */}
        <div className="flex justify-between fixed w-full px-12 pt-16 top-16">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                You don't stake to{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                earn
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                .
                <br />
                You stake to{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                anchor
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                .
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-end fixed bottom-0 w-full px-12 pb-16">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-right text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                You don't{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                lock
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                {" "}your tokens.
                <br />
                You{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                plant
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                {" "}them.
              </span>
            </h2>
          </motion.div>
        </div>
      </div>
      <motion.div
                className="fixed inset-0 z-[60] flex flex-col items-center justify-end pb-10 text-white pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
              >
                <h3 className="text-sm mb-2 uppercase tracking-wider font-medium drop-shadow-lg">
                  Scroll for immersive experience
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
};

export default StakingHero;