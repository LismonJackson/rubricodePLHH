"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function WhatWeDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <section ref={ref} className="w-full h-[100vh] relative ">
      {/* Text – fixed & centered */}
      <motion.div
        className="fixed inset-0 z-10 flex items-center justify-center p-6"
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-3xl text-center space-y-8">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-yellow-300 to-green-300 text-4xl md:text-6xl font-extrabold uppercase tracking-wider drop-shadow-xl">
            What We Do
          </h2>
          <p className="text-gray-200 text-lg md:text-2xl leading-relaxed tracking-wide">
            <span className="text-yellow-300 font-semibold">
              🌍 The Challenge
            </span>
            <br />
            Many farming families today are under enormous pressure.{" "}
            <span className="text-white font-medium">Give up</span> or{" "}
            <span className="text-white font-medium">push through</span>?{" "}
            <span className="text-white font-medium">Sell</span> or{" "}
            <span className="text-white font-medium">fight on</span>?
          </p>
          <p className="text-gray-200 text-lg md:text-2xl leading-relaxed tracking-wide">
            <span className="text-green-300 font-semibold">
              🌱 Our Alternative
            </span>
            <br />
            We offer you a{" "}
            <span className="text-white font-medium">third way</span>:
            <br />
            👉{" "}
            <span className="text-white font-medium">
              Shared responsibility.
            </span>{" "}
            <span className="text-white font-medium">Collective growth.</span>
          </p>
          <p className="text-gray-200 text-lg md:text-2xl leading-relaxed tracking-wide">
            With{" "}
            <span className="text-yellow-300 font-semibold">
              Peace, Love & Harmony
            </span>
            , you become part of a living network that connects real farms with
            a digital value system.{" "}
            <span className="text-white font-medium">
              Decisions made together
            </span>
            . We see you – not as a problem, but as a{" "}
            <span className="text-white font-medium">partner</span>.
          </p>
        </div>
      </motion.div>

      {/* Background Blob */}
      <motion.div
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none"
        animate={{
          opacity: inView ? 1 : 0,
          scale: [1, 1.05, 1],
        }}
        transition={{
          opacity: { duration: 1.5, ease: "easeInOut" },
          scale: {
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.5, 1],
          },
        }}
      >
        <div
          className="w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, #ffd900aa 0%, #ff660077 70%)",
            filter: "blur(120px)",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>
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
    </section>
  );
}
