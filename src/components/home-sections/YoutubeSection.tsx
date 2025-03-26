"use client";

import React from "react";
import Image from "next/image";

// Video Data with YouTube URLs
const videoData = [
    {
        id: 1,
        thumbnail: "/images/image1.jpg",
        videoUrl: "https://youtu.be/HL3uzoDiE80",
        type: "youtube",
        title: "CSJMU News"
    },
    {
        id: 2,
        thumbnail: "/images/image2.jpg",
        videoUrl: "https://youtu.be/6fulGBHsGQk",
        type: "youtube",
        title: "CSJMU News"
    },
    {
        id: 3,
        thumbnail: "/images/image3.jpg",
        videoUrl: "https://youtu.be/ue-XDSQkTGQ",
        type: "youtube",
        title: "CSJMU News"
    }
];

const YoutubeSection: React.FC = () => {
    return (
        <section className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Explore Our Videos</h2>

            {/* Video Thumbnails Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {videoData.map((video) => (
                    <a
                        key={video.id}
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg"
                    >
                        {/* Video Thumbnail */}
                        <Image
                            src={video.thumbnail}
                            alt={video.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="text-white font-semibold text-lg">{video.title}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default YoutubeSection;
