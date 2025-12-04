"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Custom SVG Icons
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function JoinCommunity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const headingVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      y: 50,
      rotateZ: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      blur: 10
    },
    visible: {
      opacity: 1,
      x: 0,
      blur: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8,
      rotateY: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -45
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.6,
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    }
  };

  return (
    <section ref={ref} className="w-full 2xl:container mx-auto px-10 md:px-36 py-20 pt-0 md:pt-40">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-sm:pb-120 bg-white rounded-3xl w-full px-6 py-12 md:p-10 flex items-center gap-16 md:pb-30 relative"
        style={{ perspective: "1000px" }}
      >
        {/* Animated Background Glow */}
       

        {/* Character Image with Advanced Animation */}
        <motion.div
          variants={imageVariants}
          className="absolute bottom-0 w-[165%] md:w-[70%] left-[-35%] md:left-[-6vw]"
        >
          <motion.img
            src="/images/join-img.png"
            alt="character"
            className="w-full"
            
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              rotateZ: 5,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <div className="flex-1 text-right text-black relative z-10">
          <motion.h1
            variants={headingVariants}
            className="max-sm:text-center text-4xl md:text-7xl font-extrabold mama"
          >
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }}
            >
              J
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.1
              }}
            >
              O
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
            >
              I
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            >
              N
            </motion.span>
          </motion.h1>

          <motion.h2
            variants={headingVariants}
            className="max-sm:text-center text-4xl md:text-7xl font-extrabold mt-1 mama"
          >
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
              }}
            >
              C
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              O
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
            >
              M
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7
              }}
            >
              M
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
              }}
            >
              U
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9
              }}
            >
              N
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.0
              }}
            >
              I
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.1
              }}
            >
              T
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2
              }}
            >
              Y
            </motion.span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="mt-4 text-xl md:text-2xl max-sm:text-center max-w-xl ml-auto coconut"
          >
            Dan Barnard is a Magic: The Gathering player from Green Bay, Wisconsin,
            known for having one of the strangest & most extreme MTG collections in
            the world.
          </motion.p>

          <motion.a
            href=""
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.15, 
              rotate: 5,
              filter: "drop-shadow(0 0 20px rgba(194, 138, 255, 0.6))"
            }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="ml-auto block"
          >
            <motion.img
              src="/images/tg-btn.png"
              alt="telegram button"
              className="max-sm:mx-auto md:ml-auto w-[80%] md:w-[25%] mb-[-10vw] mt-4"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.a>
        </div>

        {/* LEFT ICONS with Stunning Animations */}
        <div className="flex md:flex-col gap-2 md:gap-6 mt-auto absolute left-[25%] md:left-10 bottom-95 md:bottom-10 z-20">
          {/* Telegram */}
          <motion.div
            custom={0}
            variants={iconVariants}
            whileHover={{ 
              scale: 1.25, 
              rotate: 360,
              boxShadow: "0 0 25px rgba(0, 0, 0, 0.5)"
            }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white cursor-pointer shadow-md"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <TelegramIcon />
            </motion.div>
          </motion.div>

          {/* Twitter */}
          <motion.div
            custom={1}
            variants={iconVariants}
            whileHover={{ 
              scale: 1.25, 
              rotate: -360,
              boxShadow: "0 0 25px rgba(194, 138, 255, 0.7)"
            }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#c28aff] text-white cursor-pointer shadow-md"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            >
              <TwitterIcon />
            </motion.div>
          </motion.div>

          {/* Youtube */}
          <motion.div
            custom={2}
            variants={iconVariants}
            whileHover={{ 
              scale: 1.25, 
              rotate: 360,
              boxShadow: "0 0 25px rgba(0, 0, 0, 0.5)"
            }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white cursor-pointer shadow-md"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
            >
              <YoutubeIcon />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}