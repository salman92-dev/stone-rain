"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
export default function Roadmap() {
  const [hoveredPhase, setHoveredPhase] = useState(null);

  const roadmapData = [
    {
      id: 1,
      title: "PHASE 01",
      items: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      ]
    },
    {
      id: 2,
      title: "PHASE 02",
      items: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      ]
    },
    {
      id: 3,
      title: "PHASE 03",
      items: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  const characterVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 8,
        delay: 0.5
      }
    }
  };

  return (
    <div className="roadmap relative py-50 md:py-20 2xl:container mx-auto px-6 md:px-36 ">
         {/* Character Image */}
      <motion.div
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 12,
          delay: 0.3
        }}
        className="absolute w-full md:w-[40%] right-0 md:right-30 top-90 md:top-0 z-4 pointer-events-none"
      >
        <motion.img
          src="/images/roadmap-charac.png"
          alt="Roadmap Character"
          className="w-full h-auto"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Sparkles around character */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </motion.div>
        ))}
      </motion.div>
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section with Title and Character */}
        <div className="flex items-start justify-between mb-12">
          {/* Title */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <h1
              className="max-sm:mb-60 text-6xl md:text-7xl md:text-8xl text-white leading-tight mama"
            >
              OUR<br />ROADMAP
            </h1>
          </motion.div>
        </div>

        {/* Roadmap Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {roadmapData.map((phase, index) => {
            const isCenter = index === 1;
            
            return (
              <motion.div
                key={phase.id}
                variants={cardVariants}
                onHoverStart={() => setHoveredPhase(phase.id)}
                onHoverEnd={() => setHoveredPhase(null)}
                className="relative"
              >
                <motion.div
                  className={`max-sm:pt-20 p-12 shadow-2xl h-full border-2 rounded-t-[120px] border-[#000] ${
                    isCenter 
                      ? 'max-sm:mt-0 mt-[-3vw] bg-white border-12 border-[#CF8EFF] outline-2 outline-[#000]' 
                      : 'bg-[#7939A8]'
                  }`}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Phase Title */}
                  <motion.h3
                    className={`text-3xl md:text-4xl mb-6 mama tracking-[5px]${
                      isCenter ? ' text-black' : ' text-white'
                    }`}
                  >
                    {phase.title}
                  </motion.h3>

                  {/* Phase Items */}
                  <div className="space-y-4">
                    {phase.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-start space-x-3 coconut text-2xl"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + itemIndex * 0.1 }}
                      >
                        <span
                          className={`font-bold text-lg flex-shrink-0 ${
                            isCenter ? 'text-gray-900' : 'text-white'
                          }`}
                        >
                          -
                        </span>
                        <p
                          className={`leading-relaxed ${
                            isCenter ? 'text-black' : 'text-white'
                          }`}
                        >
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover glow effect */}
                  {hoveredPhase === phase.id && (
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background: isCenter 
                          ? 'radial-gradient(circle at center, rgba(147, 51, 234, 0.1), transparent)'
                          : 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent)',
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}