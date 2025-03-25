// pages/contact.tsx
import ContactForm from "@/components/ContactForm";
import type { NextPage } from "next";


const Contact: NextPage = () => {
    return (
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-blue-800 sm:text-4xl mb-4">
                    Contact Us
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Get in touch with the Department of Journalism and Mass Communication.
                    We are here to answer any questions you may have about our programs, courses, and events.
                </p>
            </div>

            {/* Contact Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                        Send Us a Message
                    </h2>
                    <ContactForm />
                </div>

                {/* Contact Details */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                        Contact Information
                    </h2>
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            <span className="font-semibold">Address:</span><br />
                            Department of Journalism and Mass Communication,<br />
                            Chhatrapati Shahu Ji Maharaj University,<br />
                            Kanpur, Uttar Pradesh, India.
                        </p>
                        {/* <p className="text-gray-700">
                            <span className="font-semibold">Email:</span><br />
                            <a
                                href="mailto:info@university.com"
                                className="text-blue-600 hover:underline"
                            >
                                info@university.com
                            </a>
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Phone:</span><br />
                            <a
                                href="tel:+919876543210"
                                className="text-blue-600 hover:underline"
                            >
                                +91-9876543210
                            </a>
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Office Hours:</span><br />
                            Monday - Friday: 9:00 AM - 5:00 PM
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;




// 'use client';
// import React from 'react';
// import { NextPage } from 'next';
// import { useRouter } from 'next/navigation';
// import { Button } from '@/components/ui/button';

// const Page: NextPage = () => {
//     const router = useRouter();

//     const handleNavigate = () => {
//         router.push('/'); // Navigate to the home page
//     };

//     return (
//         <main className="flex flex-col items-center justify-center min-h-screen  p-6">
//             <div className="text-center">
//                 <h1 className="text-5xl font-bold text-gray-800 mb-4">Coming Soon</h1>
//                 <p className="text-xl text-gray-600 mb-8">
//                     We’re working hard to bring something amazing. Stay tuned for updates!
//                 </p>
//                 <Button
//                     className="bg-blue-600 text-white hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 rounded-lg px-6 py-3 transition duration-300"
//                     onClick={handleNavigate}
//                     aria-label="Notify Me Button"
//                 >
//                     Notify Me
//                 </Button>
//             </div>

//         </main>
//     );
// };

// export default Page;



