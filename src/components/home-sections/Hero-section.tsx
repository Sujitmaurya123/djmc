"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
    "/images/image3.jpg",
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg"
];

export function HeroSection() {
    const pluginRef = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <div className="w-full mx-auto flex justify-center">
            <Carousel
                plugins={[pluginRef.current]}
                className="w-[90vw]"
                onMouseEnter={() => pluginRef.current.stop()}
                onMouseLeave={() => pluginRef.current.reset()}
            >
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index} className="w-full flex justify-center">
                            <div className="p-4 w-[90%]">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image
                                            src={src}
                                            alt={`Slide ${index + 1}`}
                                            width={1000}
                                            height={600}
                                            className="w-full h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] object-cover rounded-lg"
                                        />
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
}
