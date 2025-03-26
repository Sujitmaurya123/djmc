// pages/blog.tsx
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

// Define BlogPost Interface
interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    slug: string;
}

// Sample Blog Data
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Sunita Williams: NASA Astronaut's Journey",
        excerpt:
            "Sunita Williams, a veteran NASA astronaut, has inspired millions with her journey to space and her remarkable achievements.",
        imageUrl: "/images/sunita_williamsa.jpg",
        slug: "sunita-williams-nasa-journey",
    },
    {
        id: 2,
        title: "NASA's Artemis Mission: Returning to the Moon",
        excerpt:
            "NASA's Artemis program aims to land the first woman and the next man on the Moon, paving the way for future exploration.",
        imageUrl: "/images/artemis_mission.jpeg",
        slug: "nasa-artemis-moon-mission",
    },
    {
        id: 3,
        title: "International Space Station: Life in Orbit",
        excerpt:
            "Learn about life aboard the International Space Station, where astronauts conduct scientific research and experience microgravity.",
        imageUrl: "/images/iss_life.jpeg",
        slug: "life-in-international-space-station",
    },
    { 
        id: 4,
        title: "NASA's Mars Rover Perseverance: Exploring the Red Planet",
        excerpt:
            "Perseverance rover explores the Martian surface, searching for signs of ancient life and paving the way for human exploration.",
        imageUrl: "/images/mars_rover.jpeg",
        slug: "nasa-mars-rover-perseverance",
    },
    {
        id: 5,
        title: "Future of Space Travel: NASA's Ambitious Plans",
        excerpt:
            "NASA's future missions include deep space exploration, human missions to Mars, and advancements in space technology.",
        imageUrl: "/images/space_travel.jpeg",
        slug: "future-of-space-travel",
    },
];

const Blog: NextPage = () => {
    return (
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8">
            {/* Header Section */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                 Blogs
                </h1>
               
            </div>

            {/* Blog Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                    >
                        {/* Blog Image */}
                        <div className="relative w-full h-56">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>

                        {/* Blog Content */}
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-4">
                                {post.excerpt}
                            </p>

                            {/* Read More Link */}
                            <Link href={`/blog/${post.slug}`}>
                                
                                    Read More
                                
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
