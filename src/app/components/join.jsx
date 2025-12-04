"use client";

import { motion } from "framer-motion";
import { FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function JoinCommunity() {
  return (
    <section className="w-full 2xl:container mx-auto px-10 md:px-36 py-20 pt-0 md:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-sm:pb-120 bg-white rounded-3xl w-full px-6 py-12 md:p-10 flex items-center gap-16 shadow-[21px_36px_10px_0px_#00000040] md:pb-30 relative"
      >
        <motion.div
            animate={{
                scale: [1, 1.03, 1],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="absolute bottom-0 w-[165%] md:w-[70%] left-[-35%] md:left-[-6vw]"
>
  <Image
    src="/images/join-img.png"
    alt="btn"
    width={600}
    height={600}
    className="w-full"
  />
</motion.div>


        {/* RIGHT TEXT */}
        <div className="flex-1 text-right text-black">
          <motion.h1
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-sm:text-center text-4xl md:text-7xl font-extrabold mama"
          >
            JOIN
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="max-sm:text-center text-4xl md:text-7xl font-extrabold mt-1 mama"
          >
            COMMUNITY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-4 text-xl md:text-2xl max-sm:text-center max-w-xl ml-auto coconut"
          >
            Dan Barnard is a Magic: The Gathering player from Green Bay, Wisconsin,
            known for having one of the strangest & most extreme MTG collections in
            the world.
          </motion.p>

          <motion.a
            href=""
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="ml-auto block"
          >
            <Image
              src="/images/tg-btn.png"
              alt="btn"
              width={200}
              height={200}
              className="max-sm:mx-auto md:ml-auto w-[80%] md:w-[25%] mb-[-10vw] mt-4"
            />
          </motion.a>
        </div>

        {/* LEFT ICONS */}
        <div className="flex md:flex-col gap-2 md:gap-6 mt-auto absolute left-[25%] md:left-10 bottom-90 md:bottom-10">
          {/* Telegram */}
          <motion.div
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white cursor-pointer shadow-md"
          >
            <FaTelegramPlane size={24} />
          </motion.div>

          {/* Twitter */}
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#c28aff] text-white cursor-pointer shadow-md"
          >
            <FaTwitter size={28} />
          </motion.div>

          {/* Youtube */}
          <motion.div
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white cursor-pointer shadow-md"
          >
            <FaYoutube size={26} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
