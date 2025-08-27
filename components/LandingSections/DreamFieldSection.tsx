"use client";
import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
const DreamFieldSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  // Location marker styles - more pin-like appearance
  const markerStyle = {
    background: "linear-gradient(135deg, #FFA500 0%, #FFD700 50%, #FFA500 100%)",
    border: "2px solid #FFD700",
    boxShadow: "0 4px 15px rgba(255, 165, 0, 0.5), inset 0 1px 3px rgba(255, 215, 0, 0.4)",
  };

  // Pulsing animation for markers
  const markerAnimation = {
    scale: [1, 1.2, 1],
    boxShadow: [
      "0 4px 15px rgba(255, 165, 0, 0.5), 0 0 0px rgba(255, 215, 0, 0)",
      "0 4px 15px rgba(255, 165, 0, 0.5), 0 0 0px rgba(255, 215, 0, 0)",
      "0 4px 15px rgba(255, 165, 0, 0.5), 0 0 0px rgba(255, 215, 0, 0)",
    ],
  };

  const markerTransition = {
    duration: 2.5,
    ease: "easeInOut",
    repeat: Infinity,
  };

  // Globe filter animation
  const globeFilterAnimation = {
    filter: [
      "brightness(0.9) contrast(1.1) saturate(1.2)",
      "brightness(1.1) contrast(1.3) saturate(1.4)",
      "brightness(0.9) contrast(1.1) saturate(1.2)",
    ],
  };

  const globeFilterTransition = {
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
  };

  const Tooltip = ({
    label,
    sublabel,
  }: {
    label: string;
    sublabel: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 whitespace-nowrap text-left z-20"
    >
      <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-[#FFA500]/40">
        <div className="text-[#FFD700] font-semibold text-sm leading-tight">
          {label}
        </div>
        <div className="text-white/80 text-xs leading-tight">{sublabel}</div>
      </div>
      {/* Arrow pointing to marker */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-black/80"></div>
    </motion.div>
  );

  const LocationMarker = ({
    className,
    label,
    sublabel,
    isVisible,
    delayOrder,
  }: {
    className: string;
    label: string;
    sublabel: string;
    isVisible: boolean;
    delayOrder: number;
  }) => (
    <motion.div
      className={`group absolute ${className} z-10 cursor-pointer`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20
      }}
      transition={{
        duration: isVisible ? 0.6 : 0.3,
        ease: "easeOut",
        delay: isVisible ? 1.2 + delayOrder * 0.2 : 0,
      }}
    >
      {/* Location Pin */}
      <motion.div
        className="relative"
        animate={markerAnimation}
        transition={markerTransition}
      >
        {/* Main pin body */}
        <div 
          className="w-8 h-8 rounded-full relative"
          style={markerStyle}
        >
          {/* Inner dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
        </div>
        
        {/* Pin pointer */}
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent", 
            borderTop: "6px solid #FFA500"
          }}
        ></div>
      </motion.div>

      {/* Tooltip appears on hover */}
      <AnimatePresence>
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 hidden group-hover:block">
          <Tooltip label={label} sublabel={sublabel} />
        </div>
      </AnimatePresence>
    </motion.div>
  );

  return (
    <section
      ref={ref}
      className="relative w-full h-[100vh] overflow-hidden bg-black text-white"
    >
      <AnimatePresence>
        {isInView && (
          <motion.div
            key="dreamfield-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-[100vh] flex flex-col justify-center items-center text-center px-4 text-2xl sm:text-4xl font-bold gap-5 pt-10 z-50"
          >
            {/* Headings */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h2>
                This is not a <span className="text-[#FFA500]">Dream.</span>
              </h2>
              <h2>
                This is a <span className="text-[#539241]">Field.</span>
              </h2>
            </motion.div>

            {/* Globe & Location Markers */}
            <div className="relative">
              {/* Globe Image with animated filter */}
              <motion.img
                src="/assets/images/landing/globe.png"
                alt="Globe"
                className="w-[280px] sm:w-[400px] md:w-[500px] h-auto object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  ...globeFilterAnimation
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  opacity: { duration: 1, ease: "easeOut", delay: 0.3 },
                  scale: { duration: 1, ease: "easeOut", delay: 0.3 },
                  filter: globeFilterTransition
                }}
              />

              {/* Location Markers (staggered) */}
              <LocationMarker
                isVisible={isInView}
                delayOrder={0}
                className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                label="Garden"
                sublabel="Ghana"
              />
              <LocationMarker
                isVisible={isInView}
                delayOrder={1}
                className="top-[20%] left-[20%]"
                label="Oasis"
                sublabel="Kenya"
              />
              <LocationMarker
                isVisible={isInView}
                delayOrder={2}
                className="top-[15%] right-[25%]"
                label="Haven"
                sublabel="Rwanda"
              />
              <LocationMarker
                isVisible={isInView}
                delayOrder={3}
                className="bottom-[15%] left-1/2 -translate-x-1/2"
                label="Seed"
                sublabel="Nigeria"
              />
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
  );
};

export default DreamFieldSection;