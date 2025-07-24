"use client"
import { useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
const DustParticles = ({ count = 8 }: { count?: number }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible -z-10">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300/80 rounded-full"
          style={{
            boxShadow: "0 0 10px rgba(255, 215, 0, 1), 0 0 20px rgba(251, 191, 36, 0.5)",
            filter: "blur(0.5px)",
          }}
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 60 - 30,
            opacity: 0,
          }}
          animate={{
            x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
            y: [Math.random() * 60 - 30, Math.random() * 60 - 30, Math.random() * 60 - 30, Math.random() * 60 - 30],
            opacity: [0, 0.8, 0.6, 0],
            scale: [0.3, 1.2, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

const FictionFunction = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.6 })

  const linkVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  }

  return (
    <>
      <section ref={ref} className="w-full h-[100vh] relative overflow-hidden bg-black text-white ">
        <AnimatePresence>
          {isInView && (
            <motion.div
              key="fiction-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed top-10 left-0 w-full h-[100vh] flex flex-col justify-center items-center text-center px-4 text-2xl sm:text-4xl font-bold gap-6 z-50"
            >
              {/* Headings */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h2>
                  The world you saw is not <span className="text-amber-400">Fiction.</span>
                </h2>
                <h2>
                  It is <span className="text-amber-400">Function.</span>
                </h2>
              </motion.div>

              {/* Image wrapper with links */}
              <div className="relative">
                {/* Main Image */}
                <motion.img
                  src="/assets/images/landing/fiction.png"
                  alt="Fiction is Function"
                  className="w-[360px] sm:w-[600px] md:w-[800px] h-auto object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                />

                {/* Clockwise Animated Links with Dust Particles */}
                <motion.div
                  className="absolute top-7 left-[-10%]"
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.8}
                >
                  <div className="relative overflow-visible">
                    {/* Radial glow background */}
                    <div className="absolute inset-0 -z-20 bg-gradient-radial from-yellow-300/40 via-amber-400/20 to-transparent rounded-full blur-lg scale-150" />
                    <DustParticles count={8} />
                    <motion.a
                      href="/guardians-of-infinity"
                      className="relative z-10 text-base sm:text-lg md:text-xl font-bold transition-all duration-300 drop-shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFFF00 75%, #FFD700 100%)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
                        filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))",
                      }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      whileHover={{
                        scale: 1.1,
                        filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 1)) brightness(1.3)",
                      }}
                      whileFocus={{
                        scale: 1.05,
                        outline: "2px solid rgba(255, 215, 0, 0.7)",
                        outlineOffset: "4px",
                      }}
                    >
                      Guardians of infinity
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-[-7%] right-[-4%]"
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1.1}
                >
                  <div className="relative overflow-visible">
                    {/* Radial glow background */}
                    <div className="absolute inset-0 -z-20 bg-gradient-radial from-yellow-300/40 via-amber-400/20 to-transparent rounded-full blur-lg scale-150" />
                    <DustParticles count={8} />
                    <motion.a
                      href="/tokenomics"
                      className="relative z-10 text-base sm:text-lg md:text-xl font-bold transition-all duration-300 drop-shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFFF00 75%, #FFD700 100%)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
                        filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))",
                      }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: 0.5,
                      }}
                      whileHover={{
                        scale: 1.1,
                        filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 1)) brightness(1.3)",
                      }}
                      whileFocus={{
                        scale: 1.05,
                        outline: "2px solid rgba(255, 215, 0, 0.7)",
                        outlineOffset: "4px",
                      }}
                    >
                      Tokenomics
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-2"
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1.4}
                >
                  <div className="relative overflow-visible">
                    {/* Radial glow background */}
                    <div className="absolute inset-0 -z-20 bg-gradient-radial from-yellow-300/40 via-amber-400/20 to-transparent rounded-full blur-lg scale-150" />
                    <DustParticles count={8} />
                    <motion.a
                      href="/dao"
                      className="relative z-10 text-base sm:text-lg md:text-xl font-bold transition-all duration-300 drop-shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFFF00 75%, #FFD700 100%)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
                        filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))",
                      }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: 1,
                      }}
                      whileHover={{
                        scale: 1.1,
                        filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 1)) brightness(1.3)",
                      }}
                      whileFocus={{
                        scale: 1.05,
                        outline: "2px solid rgba(255, 215, 0, 0.7)",
                        outlineOffset: "4px",
                      }}
                    >
                      DAO
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-10 left-[-5%]"
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1.7}
                >
                  <div className="relative overflow-visible">
                    {/* Radial glow background */}
                    <div className="absolute inset-0 -z-20 bg-gradient-radial from-yellow-300/40 via-amber-400/20 to-transparent rounded-full blur-lg scale-150" />
                    <DustParticles count={8} />
                    <motion.a
                      href="/governance"
                      className="relative z-10 text-base sm:text-lg md:text-xl font-bold transition-all duration-300 drop-shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFFF00 75%, #FFD700 100%)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
                        filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))",
                      }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: 1.5,
                      }}
                      whileHover={{
                        scale: 1.1,
                        filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 1)) brightness(1.3)",
                      }}
                      whileFocus={{
                        scale: 1.05,
                        outline: "2px solid rgba(255, 215, 0, 0.7)",
                        outlineOffset: "4px",
                      }}
                    >
                      Governance
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

 <motion.div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-end pb-10 text-white pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
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
  )
}

export default FictionFunction
