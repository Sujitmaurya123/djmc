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
        image: "/images/news7.jpeg",
        title: "News6",
        description: "फेक न्यूज और मिसइन्फॉर्मेशन से निपटना आज की सबसे बड़ी चुनौती: प्रो. तनु डंग",
        link: "/news6"
    },
    {
        image: "/images/news1.jpg",
        title: "News1",
        description: "राजनीति विज्ञान विभाग एवं IIPA कानपुर शाखा द्वारा “एआई और सुशासन” पर राष्ट्रीय संगोष्ठी आयोजित",
        link: "/news1"
    },
    {
        image: "/images/news2.jpg",
        title: "News2",
        description: "सीएसजेएमयू पत्रकारिता विभाग की एआई क्रांति: लॉन्च किया न्यूज़ पोर्टल और चैटबॉट ‘करंटा’",
        link: "/news2"
    },
    {
        image: "/images/news3.jpg",
        title: "News3",
        description: "सीएसजेएमयू और आर्ट ऑफ़ लिविंग के बीच एमओयू, छात्रों के समग्र विकास की दिशा में बड़ा कदम",
        link: "/news3"
    },
    {
        image: "/images/news4.jpeg",
        title: "News4",
        description: "सीएसजेएमयू द्वारा उन्नत भारत अभियान के तहत ग्राम शेखूपुर में स्वास्थ्य शिविर का आयोजन",
        link: "/news4"
    },
    {
        image: "/images/news5.jpg",
        title: "News5",
        description: "सीएसजेएमयू में ‘एक राष्ट्र एक चुनाव’ विषय पर जिला स्तरीय यूथ पार्लियामेंट प्रतियोगिता का समापन",
        link: "/news5"
    },
   
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
