"use client";

import React from "react";
import Image from "next/image";

const Chaticon: React.FC = () => {
    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            {/* Chatbot Icon Button */}
            <button
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 shadow-xl flex items-center justify-center hover:bg-blue-700 focus:outline-none transition-all"
            >
                {/* Circular Image */}
                <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border-4 border-blue-600">
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
                    <svg className="w-16 h-16 sm:w-20 sm:h-20">
                        <circle
                            cx="50%"
                            cy="50%"
                            r="40%"
                            fill="transparent"
                            stroke="blue"
                            strokeWidth="8"
                        />
                    </svg>

                    {/* Circular Text */}
                    <div className="absolute w-full h-full flex items-center justify-center">
                        {/* Rotated Text Around Icon */}
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                            {/* Top Text */}
                            <p
                                className="absolute text-[8px] sm:text-[10px] font-semibold text-white"
                                style={{
                                    top: 0,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                }}
                            >
                                Currenta
                            </p>

                            

                           

                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default Chaticon;
