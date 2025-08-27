"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const StakingPhilosophy = () => {
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
        {/* Desktop Top Row */}
        <div className="hidden md:flex justify-between fixed w-full px-12 pt-16 top-16">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                Staking in this system isn't{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                passive
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                {" "}–<br />
                it's{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                powerful
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                .
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-right">
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                It's a{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                commitment
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                .<br />A{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                contribution
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                .<br />A conversation between<br />
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                time
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                {" "}and{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                truth
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

        {/* Mobile Top Row */}
        <div className="flex md:hidden flex-col fixed w-full px-8 pt-32 top-0 gap-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold">
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                Staking in this system isn't{" "}
              </span>
              <span style={{ color: "#FFD700", fontWeight: 900 }}>passive</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                {" "}–<br />it's{" "}
              </span>
              <span style={{ color: "#FFD700", fontWeight: 900 }}>powerful</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold">
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>It's a </span>
              <span style={{ color: "#FFD700", fontWeight: 900 }}>commitment</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                .<br />A{" "}
              </span>
              <span style={{ color: "#FFD700", fontWeight: 900 }}>contribution</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                .<br />A conversation between<br />
              </span>
              <span style={{ color: "#FFD700", fontWeight: 900 }}>time</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}> and </span>
              <span style={{ color: "#FFD700", fontWeight: 900 }}>truth</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>.</span>
            </h2>
          </motion.div>
        </div>

        {/* Desktop Bottom Row */}
        <div className="hidden md:flex justify-between fixed bottom-0 w-full px-12 pb-16">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                We don't{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                freeze
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                {" "}your tokens.<br />
                We{" "}
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

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-right">
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                And what grows from your{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                trust
              </span>
              <span style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.2)",
              }}>
                ...<br />
                returns in{" "}
              </span>
              <span style={{
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 15px rgba(0,0,0,0.9)",
                fontWeight: 900,
              }}>
                frequency
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

        {/* Mobile Bottom Row */}
        <div className="flex md:hidden flex-col fixed bottom-0 w-full px-8 pb-12 gap-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold">
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>We don't </span>
              <span style={{ color: "#FFD700", fontWeight: 900 }}>freeze</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                {" "}your tokens.<br />We{" "}
              </span>
              <span style={{ color: "#FFD700", fontWeight: 900 }}>plant</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}> them.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold">
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                And what grows from your{" "}
              </span>
              <span style={{ color: "#FFD700", fontWeight: 900 }}>trust</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                ...<br />returns in{" "}
              </span>
              <span style={{ color: "#FFD700", fontWeight: 900 }}>frequency</span>
              <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>.</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StakingPhilosophy;