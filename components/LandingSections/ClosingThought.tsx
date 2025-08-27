"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
export default function ClosingThought() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.7 });

  return (
    <section ref={ref} className="w-full h-[100vh] relative ">
      {/* Text – fixed & centered */}
      <motion.div
        className="fixed inset-0 z-10 flex items-center justify-center p-6"
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-3xl text-center space-y-8">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 text-4xl md:text-6xl font-extrabold uppercase tracking-wider drop-shadow-xl">
            🌟 Closing Thought
          </h2>
          <p className="text-gray-200 text-lg md:text-2xl leading-relaxed tracking-wide drop-shadow-md">
            Maybe your land is waiting. Not to be{" "}
            <span className="text-white font-semibold">sold</span>. But to be{" "}
            <span className="text-white font-semibold">seen again</span> – with
            new eyes.
          </p>
          <p className="text-gray-200 text-lg md:text-2xl leading-relaxed tracking-wide drop-shadow-md">
            To be walked – together.
            <span className="text-white font-medium">Barefoot</span>. Into the{" "}
            <span className="text-white font-semibold">future</span>.
          </p>
          <p className="text-gray-200 text-lg md:text-2xl leading-relaxed tracking-wide drop-shadow-md">
            <span className="text-yellow-300 font-semibold">Peace.</span>
            <span className="text-yellow-300 font-semibold">Love.</span>
            <span className="text-yellow-300 font-semibold">Harmony.</span>
            And <span className="text-white font-medium">You</span>.
          </p>
        </div>
      </motion.div>

      {/* Background Blob */}
      <motion.div
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none"
        animate={{
          opacity: inView ? 1 : 0,
          scale: [1, 1.1, 1],
        }}
        transition={{
          opacity: { duration: 1.5, ease: "easeInOut" },
          scale: {
            duration: 5,
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
            background: "radial-gradient(circle, #ff66aa55 0%, #ff0066aa 80%)",
            filter: "blur(120px)",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>
           <motion.div
                              className="fixed inset-0 z-[60] flex flex-col items-center justify-end pb-10 text-white pointer-events-none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: inView ? 1 : 0 }}
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
  );
}
