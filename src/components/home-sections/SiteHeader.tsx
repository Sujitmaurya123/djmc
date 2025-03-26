"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    
} from "@/components/ui/sheet";
import Image from "next/image";
import Resources from "./Resources";
import MobileNav from "./MobileNav";









export function SiteHeader() {

    const [isOpen] = useState(false);
    // mobile open sheet and close 
    const [isOpenMobile, setIsOpenMobile] = useState(false);


    const toggleSheet = (open: boolean) => {
        setIsOpenMobile(open);
    };

    const handleClose = () => {
        setIsOpenMobile(false);
    }



    return (
        <header className="sticky top-0 z-50 bg-white w-full border-b text-gray-800 pr-4">
            <div className="container flex h-16 items-center w-auto justify-between">
                <div className="ml-4 md:ml-8 lg:ml-[80px] mr-4 flex items-center space-x-3 md:space-x-4">
                    <Link href="/" className="flex items-center space-x-3 sm:space-x-4">
                        {/* Logo Section */}
                        <Image
                            src="/csjm-logo.png"
                            alt="Department Logo"
                            width={100}
                            height={100}
                            style={{ objectFit: "cover" }}
                            className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px] rounded-full"
                        />

                        {/* Text Section */}
                        <div className="text-left">
                            {/* Visible only on large screens */}
                            <span className="   font-semibold text-headingcol ">
                                Department of Journalism and Mass Communication
                            </span>
                            <br />
                            <span className="  text-gray-600">
                                (Chhatrapati Shahu Ji Maharaj University, Kanpur)
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <Sheet open={isOpenMobile} onOpenChange={toggleSheet}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="pr-0 bg-purple-100 dark:bg-gray-900 z-50"
                    >
                        {/* <SheetTitle className="text-left text-2xl font-bold ml-4 text-headingcol">
                            Projectile 45
                        </SheetTitle> */}
                        <MobileNav onClose={handleClose} />
                    </SheetContent>
                </Sheet>
                {/* Desktop Navigation */}
                <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-4 ">
                    <nav className="flex items-center space-x-4 gap-8 ">
                        <Link href="/" className="text-lg font-medium transition-colors hover:text-black/80 cursor-pointer">
                            Home
                        </Link>
                        <Link href="/abouts" className="text-lg font-medium transition-colors hover:text-black/80 cursor-pointer">
                            Abouts
                        </Link>
                        <Resources />
                        <Link href="/blog" className="text-lg font-medium transition-colors hover:text-black/80 cursor-pointer">
                            Blog
                        </Link>
                        <Link href="/contactus" className="text-lg font-medium transition-colors hover:text-black/80 cursor-pointer">
                            Contact Us
                        </Link>
                       

                        {/* <TestPrepDropdown />
                        <Link href="/new-fees" className="text-lg font-medium transition-colors hover:text-black/80 cursor-pointer">
                            Fees Structure
                        </Link> */}


                        {/* <span

                            className=" text-lg font-medium transition-colors hover:text-black/80 cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        >
                            Free Demo
                        </span> */}

                        {/* <Button onClick={() => setIsOpen(true)}
                            className="text-purple-600 bg-white hover:bg-purple-700 hover:text-white rounded-3xl text-lg cursor-pointer"

                        >
                            Sign up for free
                        </Button> */}

                    </nav>
                </div>
            </div>
            {isOpen && (<div >
               
            </div>)}
        </header>
    );
}