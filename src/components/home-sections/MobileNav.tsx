"use client"
import Link from "next/link";
import { useState } from "react";




const MobileNav: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isSATOpen, setIsSATOpen] = useState(false);
   



    const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Close dropdown when a link inside is clicked
        if ((e.target as HTMLElement).tagName === "A") {
            setIsSATOpen(false);
            onClose();
        }
    };




    return (
        <div className="flex flex-col space-y-3 p-4">

            <Link href="/" className="text-lg font-medium transition-colors hover:text-black/80 cursor-pointer">
                Home
            </Link>
            <Link href="/abouts" className="text-lg font-medium transition-colors hover:text-black/80 cursor-pointer">
                Abouts
            </Link>
           
            <Link href="/blogs" className="text-lg font-medium transition-colors hover:text-black/80 cursor-pointer">
                Blogs
            </Link>
            <Link href="/contactus" className="text-lg font-medium transition-colors hover:text-black/80 cursor-pointer">
                Contact Us
            </Link>
            {/* Resource Section */}
            <div >
                <span
                    onClick={() => setIsSATOpen(!isSATOpen)}

                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    Resource {isSATOpen ? "▲" : "▼"}
                </span>
                {isSATOpen && (
                    <div onClick={handleDropdownClick}
                        className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">

                        <ul className="space-y-2">
                            <li>
                                <Link href="/courses" className="hover:text-black">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-black">
                                    Gallery
                                </Link>
                            </li>
                        
                        </ul>
                    </div>
                )}
            </div>



            
            
            {/* Free Demo */}
            {/* <span
                className="text-xl text-balance font-medium transition-colors hover:text-black/80 cursor-pointer text-gray-700"
                onClick={() => setIsFreeDemoOpen(true)}
            >
                Free Demo
            </span>
            <Button onClick={() => setIsFreeDemoOpen(true)} className="text-purple-600 bg-white hover:bg-purple-700 hover:text-white rounded-3xl text-xl">
                Sign up for free
            </Button> */}
          
        </div>
    );
};

export default MobileNav;

{/* Test Prep Section */ }
{/* <div>
                        <span
                            onClick={toggleTestPrep}
                            className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                        >
                            Test Prep {isTestPrepOpen ? "▲" : "▼"}
                        </span>
                        {isTestPrepOpen && (
                            <div className="mt-2 pl-4 max-h-[300px] overflow-y-auto ">
                                <div>
                                    <h3 className="text-lg font-semibold text-red-600 mb-2">SAT</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/about-sat">About SAT</Link>
                                        </li>
                                        <li>
                                            <Link href="/sat-Digital-Exam-PatternandFAQ">
                                                SAT Digital Exam Pattern and FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/sat-2024-25-test-dates">
                                                SAT 2024-25 Test DATES
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/sat-fees-structure">Fees Structure</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-red-600 mb-2">IB</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/ib">IB</Link>
                                        </li>
                                        <li>
                                            <Link href="/ib-curriculam">IB Curriculum</Link>
                                        </li>
                                        <li>
                                            <Link href="/ib-course-coaching-details">
                                                Course Structure and Coaching Details
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/ib-online-coaching-technology">
                                                Online Coaching and Technology Integration
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/ib-fees-scheduling-registration">
                                                Fees, Scheduling, and Registration
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-red-600 mb-2">GRE</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/gre">GRE </Link>
                                        </li>
                                        {/* <li>
                  <Link href="/gre-online-prep">GRE Online Prep</Link>
                </li>
                <li>
                  <Link href="/gre-overview">GRE Overview</Link>
                </li>
                <li>
                  <Link href="/gre-wordsapp">GRE WordsApp</Link>
                </li>
                <li>
                  <Link href="/gre-syllabus">GRE Syllabus</Link>
                </li>
                <li>
                  <Link href="/gre-eligibility">GRE Eligibility 2024</Link>
                </li>
                <li>
                  <Link href="/gre-test-series">GRE Test Series</Link>
                </li> */}
{/* </ul>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-red-600 mb-2">GMAT</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/gmat-prep">GMAT Prep</Link>
                                        </li> */}
{/* <li>
                  <Link href="/gmat-practice-test">GMAT Practice Test</Link>
                </li>
                <li>
                  <Link href="/gmat-online-prep">GMAT Online Prep</Link>
                </li>
                <li>
                  <Link href="/gmat-books">GMAT Books</Link>
                </li>
                <li>
                  <Link href="/gmat-exam-dates">GMAT Exam Dates</Link>
                </li>
                <li>
                  <Link href="/gmat-syllabus">GMAT Syllabus</Link>
                </li>
                <li>
                  <Link href="/gmat-eligibility">GMAT Eligibility</Link>
                </li> */}
{/* </ul>
                                </div>
                            </div>
                        )}
                    </div>  */}

