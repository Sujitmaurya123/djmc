"use client";

import React from "react";
import { motion } from "framer-motion";

const QuoteSection: React.FC = () => {
    return (
        <section className="w-full py-8 px-4  flex justify-center items-center">
            <div className="max-w-4xl mx-auto text-center p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
                <motion.blockquote
                    className="text-2xl md:text-4xl font-semibold italic text-blue-800 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    &quot;Fake news is cheap to produce. Genuine journalism is expensive.&quot;
                </motion.blockquote>
                <motion.p
                    className="mt-2 text-lg text-gray-700 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    — Toomas Hendrik Ilves
                </motion.p>
            </div>
        </section>
    );
};

export default QuoteSection;
