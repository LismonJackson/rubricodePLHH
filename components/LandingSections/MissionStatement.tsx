"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
const MissionStatement = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });

  // Animation setup
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* <div className="h-[100vh]" /> */}

      <section
        ref={ref}
        className="w-full h-[100vh] relative flex items-center justify-center"
      >
        <motion.div
          className="overflow-hidden flex flex-col text-4xl font-bold gap-6 text-center transition-all duration-500 fixed inset-0 justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              Remember.
            </h2>
          </motion.div>
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              Connect.
            </h2>
          </motion.div>
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              Heal.
            </h2>
          </motion.div>
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              Create.
            </h2>
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

export default MissionStatement;
