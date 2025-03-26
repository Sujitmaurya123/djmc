"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Chaticon: React.FC = () => {
    return (
        <motion.div
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Chatbot Icon Button */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-2xl flex items-center justify-center transition-all"
            >
                {/* Circular Image */}
                <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border-4 border-blue-600 shadow-lg">
                    <Image
                        src="/chatimage.png" // Add this image to the public folder
                        alt="AskDISHA Icon"
                        width={64}
                        height={64}
                        className="rounded-full"
                    />
                </div>

                {/* Circular Text Wrapper */}
                <div className="absolute w-full h-full flex items-center justify-center">
                    {/* Rotating Circular Text */}
                    <div
                        className="relative w-24 h-24 sm:w-28 sm:h-28"
                    >
                        {/* Circular Text */}
                        <p className="absolute text-[8px] sm:text-[10px] font-bold text-white tracking-wide"
                            style={{
                                top: 0,
                                left: "50%",
                                transform: "translateX(-50%)",
                            }}
                        >
                            <span className="text-yellow-400">Ask</span> Currenta
                        </p>
                    </div>
                </div>

                {/* Ripple Effect on Hover */}
                <div className="absolute inset-0 w-full h-full rounded-full bg-blue-500 opacity-30 animate-ping"></div>
            </motion.button>
        </motion.div>
    );
};

export default Chaticon;
