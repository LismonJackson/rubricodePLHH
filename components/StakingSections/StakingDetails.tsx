"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const StakingDetails = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, {
    amount: 0.5,
    once: false,
  });

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  const tiers = [
    { years: "1 year", frequency: "Initiation", apy: "11%" },
    { years: "2 years", frequency: "Connection", apy: "22%" },
    { years: "3 years", frequency: "Trust", apy: "33%" },
    { years: "4 years", frequency: "Foundation", apy: "44%" },
    { years: "5 years", frequency: "Expansion", apy: "55%" },
    { years: "6 years", frequency: "Integration", apy: "66%" },
    { years: "7 years", frequency: "Mastery", apy: "77%" },
    { years: "8 years", frequency: "Infinity", apy: "77%" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden text-white pt-20"
      >
        {/* Desktop layout */}
        <div className="hidden md:flex fixed w-full px-12 top-1/2 transform -translate-y-1/2 flex-row justify-between items-start gap-12">
          {/* Left Text */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: isInView ? 0 : -100,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold max-w-xl"
          >
            <h2>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                The deeper you{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                root
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                , the more you{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                receive
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                {" "}–<br />
                not just in tokens, but in{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 25px rgba(255,215,0,0.5), 0 3px 10px rgba(0,0,0,0.8)",
                fontWeight: 700,
              }}>
                influence
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                ,{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 25px rgba(255,215,0,0.5), 0 3px 10px rgba(0,0,0,0.8)",
                fontWeight: 700,
              }}>
                access
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                , and{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 25px rgba(255,215,0,0.5), 0 3px 10px rgba(0,0,0,0.8)",
                fontWeight: 700,
              }}>
                alignment
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                .
              </span>
            </h2>
          </motion.div>

          {/* Right Table */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: isInView ? 0 : 100,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-xl"
          >
            <div className="grid grid-cols-3 table-fixed w-full font-bold mb-8 gap-x-6 text-xl lg:text-2xl">
              <div style={{
                color: "#FFD700",
                textShadow: "0 0 25px rgba(255,215,0,0.5), 0 3px 10px rgba(0,0,0,0.8)",
                fontWeight: 800,
              }}>
                Commitment
              </div>
              <div style={{
                color: "#FFD700",
                textShadow: "0 0 25px rgba(255,215,0,0.5), 0 3px 10px rgba(0,0,0,0.8)",
                fontWeight: 800,
              }}>
                Frequency
              </div>
              <div style={{
                color: "#FFD700",
                textShadow: "0 0 25px rgba(255,215,0,0.5), 0 3px 10px rgba(0,0,0,0.8)",
                fontWeight: 800,
              }}>
                APY
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col gap-y-5"
            >
              {tiers.map((tier, i) => (
                <motion.div
                  key={i}
                  variants={rowVariants}
                  className="grid grid-cols-3 table-fixed w-full gap-x-6 text-lg lg:text-xl"
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                  }}
                >
                  <div className="font-medium">{tier.years}</div>
                  <div className="font-medium italic" style={{
                    color: i === 7 ? "#FFD700" : "rgba(255, 255, 255, 0.9)",
                    textShadow: i === 7 ? "0 0 20px rgba(255,215,0,0.5)" : "0 2px 10px rgba(0,0,0,0.8)",
                  }}>
                    {tier.frequency}
                  </div>
                  <div className="font-bold" style={{
                    color: "#FFD700",
                    textShadow: "0 0 15px rgba(255,215,0,0.4), 0 2px 8px rgba(0,0,0,0.8)",
                  }}>
                    {tier.apy}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden flex-col gap-y-12 px-8 text-center pt-8">
          {/* Top Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold"
          >
            <h2>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                The deeper you{" "}
              </span>
              <span style={{ color: "#FFD700", fontWeight: 900 }}>root</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                , the more you{" "}
              </span>
              <span style={{ color: "#FFD700", fontWeight: 900 }}>receive</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                {" "}–<br />
                not just in tokens, but in{" "}
              </span>
              <span style={{ color: "#FFD700", fontWeight: 700 }}>influence</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>, </span>
              <span style={{ color: "#FFD700", fontWeight: 700 }}>access</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>, and </span>
              <span style={{ color: "#FFD700", fontWeight: 700 }}>alignment</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>.</span>
            </h2>
          </motion.div>

          {/* Table Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="grid grid-cols-3 table-fixed w-full font-bold mb-6 gap-x-3 text-base">
              <div style={{ color: "#FFD700", fontWeight: 800 }}>
                Commitment
              </div>
              <div style={{ color: "#FFD700", fontWeight: 800 }}>
                Frequency
              </div>
              <div style={{ color: "#FFD700", fontWeight: 800 }}>
                APY
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col gap-y-4"
            >
              {tiers.map((tier, i) => (
                <motion.div
                  key={i}
                  variants={rowVariants}
                  className="grid grid-cols-3 table-fixed w-full gap-x-3 text-sm sm:text-base"
                  style={{ color: "rgba(255, 255, 255, 0.9)" }}
                >
                  <div className="font-medium">{tier.years}</div>
                  <div className="font-medium italic" style={{
                    color: i === 7 ? "#FFD700" : "rgba(255, 255, 255, 0.9)",
                  }}>
                    {tier.frequency}
                  </div>
                  <div className="font-bold" style={{ color: "#FFD700" }}>
                    {tier.apy}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Spacer to allow scroll out */}
      <div className="h-[50vh]"></div>
    </>
  );
};

export default StakingDetails;