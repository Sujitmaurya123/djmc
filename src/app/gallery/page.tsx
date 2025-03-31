// pages/journalism-gallery.tsx
"use client"

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
    "/images/gallery10.jpg",
    "/images/gallery11.jpg",
    "/images/gallery12.jpg",
    "/images/gallery13.jpg",
    "/images/gallery14.jpg",
    "/images/gallery15.jpg",
    "/images/gallery16.jpg",
    "/images/gallery17.jpg",
    "/images/gallery18.jpg",
    "/images/gallery19.jpg",
    "/images/gallery20.jpg",
    "/images/gallery21.jpg",
    "/images/gallery22.jpg",
    "/images/gallery23.jpg",
    "/images/gallery24.jpg",
    "/images/gallery25.jpg",
    "/images/gallery26.jpg",
    "/images/gallery27.jpg",
    "/images/gallery28.jpg",
    "/images/gallery29.jpg",
    "/images/gallery30.jpg",
    "/images/gallery31.jpg",
    "/images/gallery32.jpg",
    "/images/gallery33.jpg",
];

const JournalismGallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <Head>
                <title>Department of Journalism & Mass Communication</title>
            </Head>

            <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
                {/* Department Header */}
                <div className=" mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold text-white">
                        Department of Journalism & Mass Communication
                    </h1>
                    <p className="mt-4 text-lg text-white">
                        Explore the vibrant moments captured from various events, workshops,
                        and activities conducted by the department.
                    </p>
                </div>

                {/* Gallery Section */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-semibold text-white mb-6">
                        Photo Gallery
                    </h2>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="relative cursor-pointer group"
                                onClick={() => setSelectedImage(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover rounded-xl shadow-md transform transition duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0  bg-opacity-30 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-3xl w-full">
                            <button
                                className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-200"
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕
                            </button>
                            <Image
                                src={selectedImage}
                                alt="Selected"
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default JournalismGallery;
