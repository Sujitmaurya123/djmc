// pages/blog.tsx
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

// Define BlogPost Interface
interface BlogPost {
    id: number;
    title: string;
    
    imageUrl: string;
    slug: string;
}

// Sample Blog Data
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "भ्रामक खबरों व वीडियो की सत्यता की जांच",
        
        imageUrl: "/images/blog1.png",
        slug: "blog1",
    },
    {
        id: 2,
        title: "विश्वविद्यालय में विकसित करने योग्य कौशल जो संचार उद्योग में नियोक्ताओं द्वारा मांगे जाते हैं",
       
        imageUrl: "/images/blog2.png",
        slug: "blog2",
    },
    {
        id: 3,
        title: "साइबर क्राइम की अंधेरी दुनिया: हकीकत, खतरे और सुरक्षा की जरूरत",
        
        imageUrl: "/images/blog3.jpg",
        slug: "blog3",
    },
    { 
        id: 4,
        title: "साहब का जूता…",
        imageUrl: "/images/blog4.png",
        slug: "blog4",
    },
    // {
    //     id: 5,
    //     title: "Future of Space Travel: NASA's Ambitious Plans",

    //     imageUrl: "/images/space_travel.jpeg",
    //     slug: "future-of-space-travel",
    // },
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


                            {/* Read More Link */}
                            <Link href={`/blog/${post.slug}`} className="text-blue-800">
                                
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
