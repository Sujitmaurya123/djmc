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
        image: "/images/event1.jpg",
        title: "Event 1",
        description: "सीएसजेएमयू में ‘एक राष्ट्र एक चुनाव’ विषय पर जिला स्तरीय यूथ पार्लियामेंट प्रतियोगिता का समापन",
        link: "/event1"
    },
    {
        image: "/images/event2.jpg",
        title: "Event 2",
        description: "सीएसजेएमयू में होली मिलन समारोह, सांस्कृतिक रंग में रंगा विश्वविद्यालय",
        link: "/event2"
    },
    {
        image: "/images/event3.jpg",
        title: "Event 3",
        description: "नाट्य प्रतियोगिता में सीएसजेएमयू को प्रथम स्थान, भाषण में दूसरा स्थान; राजभवन में हुआ राज्यस्तरीय आयोजन",
        link: "/event3"
    },
    {
        image: "/images/event4.jpg",
        title: "Event 4",
        description: "सीएसजेएमयू और नीमा फोरम के संयुक्त तत्वावधान में अंतर्राष्ट्रीय महिला दिवस पर सशक्तिकरण कार्यक्रम",
        link: "/event4"
    }
];

const EventAnnouncements: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            {/* Flex Layout for Two Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section: Carousel */}
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4">Explore Our Highlights</h2>
                    <Carousel className="w-full max-w-2xl">
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
                                                    className="w-full h-[25vh] object-cover rounded-t-lg"
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

                {/* Right Section: Likes & Announcements */}
                <div className="flex flex-col justify-center items-center  p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-white">Latest Announcements</h2>
                    <div className="space-y-4">
                        {/* Announcement Card */}
                        <ul className=" p-4  w-full list-disc">
                            {/* <h3 className="text-lg font-semibold text-blue-800">🎉 New Feature Released!</h3> */}
                            <li className="text-sm text-white">पत्रकारिता के मेधावी छात्रों को मिलेगा गणेश शंकर विद्यार्थी पुरस्कार</li>
                            <li className="text-sm text-white">विश्वविद्यालय स्तर पर सर्टिफिकेट के साथ दिया जाएगा कैश प्राइज</li>
                            <li className="text-sm text-white">आगामी सत्र 2025-26 से शुरू होगी अनूठी पहल</li>    
                            <li className="text-sm text-white">गणेश शंकर विद्यार्थी के जीवन पर तैयार होगी  डॉक्यूमेंट्री</li>
                            <li className="text-sm text-white">पत्रकारिता एवं जनसंचार विभाग द्वारा गणेश शंकर विद्यार्थी के बलिदान दिवस आयोजित कार्यक्रम में हुई घोषणा</li>
                        </ul>
                    </div>

                    {/* Like & Engagement Stats */}
                    {/* <div className="mt-6 flex space-x-6">
                        <div className="text-center">
                            <span className="text-3xl font-bold text-blue-600">1.2K</span>
                            <p className="text-gray-600 text-sm">Likes</p>
                        </div>
                        <div className="text-center">
                            <span className="text-3xl font-bold text-green-600">900</span>
                            <p className="text-gray-600 text-sm">Shares</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default EventAnnouncements;
