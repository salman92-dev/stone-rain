"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Tokenomics = () => {
    return (
        <div className="tokenomics relative mx-auto w-full px-12 max-sm:py-80 2xl:container">
            <motion.img 
                src="/images/token-img.png" 
                alt="alt" 
                className="absolute left-[10%] top-[85%] z-2 hidden md:top-[-13vw] md:block md:w-[80%]"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
            
            <motion.img 
                src="/images/token-img-mobile.png" 
                alt="alt" 
                className="absolute left-[10%] top-[80%] z-2 w-[90%] md:hidden md:top-[-13vw] md:w-[80%]"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
            
            <motion.img 
                src="/images/token-stand.png" 
                alt="alt" 
                className="absolute right-[0%] top-[-12.5vw] md:w-[32%]"
                initial={{ opacity: 0, x: 100, rotate: 10 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />
            
            <div className="mt-30 flex flex-col text-center max-sm:gap-1 md:w-[25%]">
                <motion.div 
                    className="rotate-[6.93deg] rounded-2xl bg-[#CF8EFF] p-10 md:p-12"
                    initial={{ opacity: 0, x: -100, rotate: -20 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 6.93 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05, rotate: 10 }}
                >
                    <h3 className="mama mb-2 text-4xl text-white">Renounced</h3>
                    <p className="coconut text-2xl text-black">Contract</p>
                </motion.div>
                
                <motion.div 
                    className="center-shadow relative z-2 rotate-[-3.99deg] rounded-2xl border-2 border-[#370D57] bg-[#FFFFFF] p-10 md:p-12"
                    initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -3.99 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 120 }}
                    whileHover={{ scale: 1.08, rotate: 0, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                >
                    <h3 className="mama mb-2 text-4xl text-[#7154C5]">Burnt</h3>
                    <p className="coconut text-2xl text-black">Liquidity</p>
                </motion.div>
                
                <motion.div 
                    className="rotate-[-12.18deg] rounded-2xl bg-[#7C66B9] p-10 md:p-12"
                    initial={{ opacity: 0, x: -100, rotate: -30 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -12.18 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05, rotate: -8 }}
                >
                    <h3 className="mama mb-2 text-4xl">0 / 0%</h3>
                    <p className="coconut text-2xl text-black">Buy/Sell Tax</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Tokenomics;