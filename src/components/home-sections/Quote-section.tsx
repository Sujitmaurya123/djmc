"use client";

import React from "react";
import { motion } from "framer-motion";

const QuoteSection: React.FC = () => {
    const quotes = [
        {
            text: "ख़ुशी ही एकमात्र ऐसी चीज़ है, जो हमारे पास नहीं भी हो, फिर भी दूसरों को दे सकते हो..!!",
            // author: "सादर सुप्रभात जी 🙏",
        },
        {
            text: "Fake news is cheap to produce. Genuine journalism is expensive.",
            author: " - Toomas Hendrik Ilves",
        },
        {
            text: "जिस वक्त आप चारों तरफ़ से समस्याओं से घिर जाओ तो समझ लेना की आपके जीवन का सबसे बड़ा परिवर्तन होने वाला है।",
            // author: "सादर सुप्रभात जी 🙏",
        },
    ];

    return (
        <section className="w-full py-5 px-2 sm:px-3 lg:px-4 flex lg:flex-row flex-col items-center gap-6 ">
            {quotes.map((quote, index) => (
                <motion.div
                    key={index}
                    className="w-full max-w-xl mx-auto text-center p-6 sm:p-8 bg-white shadow-xl rounded-2xl border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                >
                    <blockquote className="text-xl sm:text-xl md:text-xl font-semibold italic text-blue-800 leading-relaxed">
                        &quot;{quote.text}&quot;
                    </blockquote>
                    <p className="mt-4 text-base sm:text-lg text-gray-700 font-medium">
                         {quote.author}
                    </p>
                </motion.div>
            ))}
        </section>
    );
};

export default QuoteSection;
