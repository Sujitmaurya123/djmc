"use client";

import React from "react";
import { motion } from "framer-motion";

const QuoteSection: React.FC = () => {
    return (
        <section className="w-full py-16  flex justify-center items-center px-4 ">
            <div className="max-w-3xl text-center mt-8">
                <motion.blockquote
                    className="text-2xl md:text-3xl font-semibold italic text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    &quot;The only way to do great work is to love what you do.&quot;
                </motion.blockquote>
                <p className="mt-4 text-lg text-gray-600">- Steve Jobs</p>
            </div>
        </section>
    );
};

export default QuoteSection;
