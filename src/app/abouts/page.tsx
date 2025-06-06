// pages/index.tsx
import FacultyGallery from "@/components/Faculty-gallery";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-5 text-justify max-w-6xl ">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white sm:text-3xl text-center mb-8">
                  VC / HOD&apos;s  Message & About The Department
                </h1>
            </div>
            

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* HOD's Message */}
                <div className="mb-6 lg:mb-0 bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center lg:text-left">
                        Vice Chancellor’s Message
                    </h2>
                    <div className="relative w-50 h-50  rounded-full  overflow-hidden mx-auto lg:mx-0 mb-4 shadow-lg">
                        <Image
                            src="/images/vc_sir.jpg"
                            alt="HOD's Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center lg:text-left">
                        Dear All
                        Since its establishment in 2004 the Department of Journalism and Mass Communication of the CSJM University, Kanpur has been engaged in providing quality education to young students in various branches of Journalism. This includes BAJMC, MAJMC, PGDJMC, MA(Film Making) and PhD. DJMC has a pool of dedicated and qualified faculty, adequate research and educational facilities, a state-of-art curriculum of studies. This provides an excellent environment for academic excellence and the inculcation of a spirit of learning and exchange of knowledge. This has enabled the students of DJMC to achieve excellence in both academics and co-curricular activities. The Department is forging ahead to create Anchors, Reporters and professionals. I hope that DJMC will grow in the future towards becoming one of the leading Journalism institutes in the country. It gives me immense pleasure to convey my wishes for the development of this Institute. I would like to express my full support and best wishes to all faculty, staff members and the students for their future aspirations.
                    </p>
                    
                    <div className="mt-6 text-center lg:text-left">
                        <ul className="text-gray-700 font-semibold text-sm sm:text-base">
                            <li>Prof. Vinay Kumar Pathak</li> 
                            <li>Vice Chancellor CSJM University, Kanpur</li> 
                        </ul>
                    </div>
                </div>
                {/* About The Department */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center lg:text-left">
                        About The Department
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 text-center lg:text-left">
                        Chhatrapati Shahu Ji Maharaj University&apos;s Department of Journalism and Mass Communication
                        functions with the motto of &quot;Building Intellectuals of Tomorrow&quot;. This idea is achieved by preparing
                        students to be vanguards for the ordinary citizens of society. Media studies courses are developed
                        keeping in mind the overall development of the students while training them to be highly compatible with
                        the latest innovations and developments in all domains of the media profession. The faculty members of
                        the Media Studies programme are all Doctorate from various sectors of Media Studies and nurture the
                        desire for responsible and creative expression in the students.
                    </p>
                    <div className="text-center lg:text-left">
                        <a
                            href="/brochure_2023-24.pdf"
                            className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:shadow-outline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Brochure 2025-26
                        </a>
                    </div>
                </div>
                {/* HOD's Message */}
                <div className="mb-6 lg:mb-0 bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center lg:text-left">
                        HOD&apos;s  Message
                    </h2>
                    <div className="relative w-70 h-45  overflow-hidden mx-auto lg:mx-0 mb-4 shadow-lg">
                        <Image
                            src="/images/hod_img.jpg"
                            alt="HOD's Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center lg:text-left">
                        Since its inception, the Department of Journalism and Mass Communication has exhibited academic
                        excellence in all spheres of Media Education. We are committed to excellence, knowledge, innovation,
                        entrepreneurship, and comprehensive growth of education. We recognize the hidden potential and
                        strengths of our students, enabling them to learn, grow, and evolve into successful media professionals.
                    </p>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed text-center lg:text-left">
                        The atmosphere at DJMC focuses on evolving effective, efficient, confident, and knowledgeable
                        professionals with global thinking and a futuristic mindset. Insights on communication skills, goal
                        setting, time management, development of positive attitude & problem-solving approaches, team building,
                        values & ethics are delivered through classroom discussions, fieldwork, and industry visits.
                    </p>
                    <div className="mt-6 text-center lg:text-left">
                        <p className="text-gray-700 font-semibold text-sm sm:text-base">
                            Dr. Vishal Sharma
                        </p>
                    </div>
                </div>

                
            </div>
            <div>
                <FacultyGallery/>
            </div>

            {/* Department Contact */}
            <div className="mt-12 py-8 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg text-center shadow-md">
                <h3 className="text-lg font-semibold mb-3">Department Contact</h3>
                <p className="text-sm sm:text-base leading-relaxed">
                    Department of Journalism and Mass Communication Chhatrapati Shahu Ji Maharaj University Kanpur, Uttar Pradesh, India.
                </p>
                {/* <div className="mt-4 text-sm">
                    <p>Email: <a href="mailto:info@university.com" className="underline hover:text-gray-200">info@university.com</a></p>
                    <p>Phone: <a href="tel:+919876543210" className="underline hover:text-gray-200">+91-9876543210</a></p>
                </div> */}
            </div>
        </div>
    );
};

export default Home;
