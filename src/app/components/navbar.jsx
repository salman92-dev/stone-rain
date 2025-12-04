"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTelegramPlane, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-transparent py-6 px-6 md:px-48 relative z-50"
    >
      {/* MAIN NAVBAR */}
      <motion.div
        layout
        className="navbar flex items-center justify-between md:justify-between rounded-xl px-6 md:px-10 py-3 shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
      >
        {/* LEFT LINKS */}
        <div className="hidden md:flex items-center gap-40 mr-16">
          {["ABOUT", "TOKENOMICS"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="font-extrabold text-black text-lg hover:text-[#9b6dff] transition-colors mama"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* LOGO CENTER (desktop) / LEFT (mobile) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 250 }}
          className="max-sm:hidden absolute left-[47%] flex items-center justify-center bg-[#FEFBF2] rounded-xl p-3 border-4 border-[#000]"
        >
          <Image
            src="/images/logo2.png"
            alt="logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </motion.div>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-10 ml-16">
          <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 200 }}>
            <Link
              href="#community"
              className="font-extrabold text-black text-lg hover:text-[#9b6dff] transition-colors mama"
            >
              COMMUNITY
            </Link>
          </motion.div>

          <div className="flex items-center gap-2">
            {[
              { icon:  "/images/tg.png", link: "#" },
              { icon: "/images/x.png", link: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ scale: 1.2, rotate: i === 0 ? -5 : 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 rounded-md bg-[#c6a9ff] flex items-center justify-center text-black"
              >
                <Image src={social.icon} alt="social" width={80} height={80} className="w-40"/>
              </motion.a>
            ))}
          </div>
        </div>

        {/* MOBILE: logo left, toggle right */}
        <div className="flex w-full justify-between items-center md:hidden">
          <div className="flex items-center gap-3 border-4 border-[#000] rounded-xl p-2 absolute left-4 bg-[#FEFBF2]">
            <Image
              src="/images/logo2.png"
              alt="logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-black ml-auto"
          >
            {isOpen ? (
              <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }}>
                <FaTimes size={24} />
              </motion.div>
            ) : (
              <FaBars size={24} />
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden bg-[#f6eddb] rounded-2xl mt-3 p-6 shadow-lg"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="flex flex-col gap-4 text-center"
            >
              {["ABOUT", "TOKENOMICS", "COMMUNITY"].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="font-extrabold text-black text-lg hover:text-[#9b6dff] transition-colors mama"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              {/* Social Icons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex justify-center gap-3 mt-3"
              >
                {[
                  { icon: "/images/tg.png", link: "#" },
                  { icon: "/images/x.png", link: "#" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ scale: 1.2, rotate: i === 0 ? -5 : 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-10 h-10 rounded-md bg-[#c6a9ff] flex items-center justify-center text-black"
                  >
                    <Image src={social.icon} alt="social" width={80} height={80} className="w-40"/>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
