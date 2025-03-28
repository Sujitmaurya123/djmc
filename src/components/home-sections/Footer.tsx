"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Briefcase, PhoneCall, Newspaper, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 ">
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {/* Left Section - Logo & Description */}
                <div className="flex flex-col space-y-4">
                    <Image
                        src="/csjm-logo.png"
                        alt="MyBrand Logo"
                        width={150}
                        height={50}
                        className="opacity-90 hover:opacity-100 transition-opacity"
                    />

                    {/* <p className="text-gray-400 text-base leading-relaxed">
                        Creating amazing experiences with cutting-edge solutions.
                    </p> */}
                </div>

                {/* Middle Section - Quick Links */}
                <div className="flex flex-col space-y-3">
                    <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
                    <Link href="/about" className="group flex items-center text-gray-400 hover:text-white transition">
                        <Home className="w-5 h-5 mr-2 group-hover:text-blue-400" /> About Us
                    </Link>
                    <Link href="/services" className="group flex items-center text-gray-400 hover:text-white transition">
                        <Briefcase className="w-5 h-5 mr-2 group-hover:text-green-400" /> Services
                    </Link>
                    <Link href="/contact" className="group flex items-center text-gray-400 hover:text-white transition">
                        <PhoneCall className="w-5 h-5 mr-2 group-hover:text-yellow-400" /> Contact
                    </Link>
                    <Link href="/blog" className="group flex items-center text-gray-400 hover:text-white transition">
                        <Newspaper className="w-5 h-5 mr-2 group-hover:text-red-400" /> Blog
                    </Link>
                </div>

                {/* Right Section - Social Media Links */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link href="https://facebook.com" target="_blank">
                            <div className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition">
                                <Facebook className="w-6 h-6 text-gray-400 hover:text-white" />
                            </div>
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <div className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition">
                                <Twitter className="w-6 h-6 text-gray-400 hover:text-white" />
                            </div>
                        </Link>
                        <Link href="https://instagram.com" target="_blank">
                            <div className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition">
                                <Instagram className="w-6 h-6 text-gray-400 hover:text-white" />
                            </div>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank">
                            <div className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition">
                                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center text-gray-500 text-sm mt-4 border-t border-gray-700 pt-2">
                © {new Date().getFullYear()} Department of Journalism and Mass Communication
                (Chhatrapati Shahu Ji Maharaj University, Kanpur)
. All Rights Reserved.
            </div>
            {/* <div className="text-center text-gray-500 text-sm mt-0 border-gray-700 pt-1">
                Developed By{" "}
                <Link
                    href="https://sujit-portfolio-delta.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                    Sujit Kumar
                </Link>
            </div> */}

        </footer>
    );
};

export default Footer;
