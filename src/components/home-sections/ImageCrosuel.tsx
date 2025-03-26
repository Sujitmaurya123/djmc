"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const slides = [
    {
        image: "/images/image1.jpg",
        title: "News1",
        description: "The Department of Journalism and Mass Communication at Chhatrapati Shahu Ji Maharaj University, Kanpur, is dedicated to nurturing future media professionals with a strong foundation in ethical journalism, communication skills, and critical thinking. The department offers a dynamic curriculum that blends theoretical knowledge with practical exposure through fieldwork, industry visits, and hands-on training.",
        link: "/landscape"
    },
    {
        image: "/images/image2.jpg",
        title: "News2",
        description: "Emphasizing creativity, innovation, and professionalism, the department prepares students to excel in the fast-paced media landscape. Equipped with modern facilities and experienced faculty, it aims to develop responsible journalists and media experts who can contribute effectively to society while upholding the principles of truth and integrity.",
        link: "/city"
    },
    {
        image: "/images/image3.jpg",
        title: "News3",
        description: "The Department of Journalism and Mass Communication at Chhatrapati Shahu Ji Maharaj University, Kanpur, is dedicated to nurturing future media professionals with a strong foundation in ethical journalism, communication skills, and critical thinking. The department offers a dynamic curriculum that blends theoretical knowledge with practical exposure through fieldwork, industry visits, and hands-on training.",
        link: "/mountains"
    },
    {
        image: "/images/image4.jpg",
        title: "News4",
        description: "Emphasizing creativity, innovation, and professionalism, the department prepares students to excel in the fast-paced media landscape. Equipped with modern facilities and experienced faculty, it aims to develop responsible journalists and media experts who can contribute effectively to society while upholding the principles of truth and integrity.",
        link: "/ocean"
    },
    {
        image: "/images/image5.jpg",
        title: "News4",
        description: "The Department of Journalism and Mass Communication at Chhatrapati Shahu Ji Maharaj University, Kanpur, is dedicated to nurturing future media professionals with a strong foundation in ethical journalism, communication skills, and critical thinking. The department offers a dynamic curriculum that blends theoretical knowledge with practical exposure through fieldwork, industry visits, and hands-on training.",
        link: "/safari"
    }
];

const ImageCarousel: React.FC = () => {
    return (
        <div className="w-full mx-auto flex justify-center py-10">
            <Carousel className="w-full max-w-7xl">
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3 flex justify-center"
                        >
                            <div className="p-2 w-full">
                                <Card className="overflow-hidden shadow-lg">
                                    <CardContent className="flex flex-col items-center p-0">
                                        {/* Image */}
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-[30vh] object-cover rounded-t-lg"
                                        />
                                        {/* Text Content */}
                                        <div className="p-4 text-center">
                                            <h3 className="text-lg font-semibold">{slide.title}</h3>
                                            <p className="text-white text-sm mt-2">{slide.description}</p>
                                            {/* Link Button */}
                                            <Link href={slide.link}>
                                                <span className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                                                    Learn More
                                                </span>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
