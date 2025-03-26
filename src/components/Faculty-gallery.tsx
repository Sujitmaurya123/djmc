"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FacultyMember {
    id: number;
    name: string;
    designation: string;
    imageUrl: string;
}

const facultyData: FacultyMember[] = [
    {
        id: 1,
        name: "Dr. Yogendra Kumar Pandey",
        designation: "Head of Department",
        imageUrl: "/images/faculty1.png",
    },
    {
        id: 2,
        name: "Dr. Jitendra Dabral",
        designation: "Assistant Professor",
        imageUrl: "/images/faculty2.jpeg",
    },
    {
        id: 3,
        name: "Dr. Rashmi Gautam",
        designation: "Associate Professor",
        imageUrl: "/images/faculty3.jpeg",
    },
    {
        id: 4,
        name: "Dr. Diwakar Awasthi",
        designation: "Lecturer",
        imageUrl: "/images/faculty4.jpeg",
    },
    {
        id: 5,
        name: "Dr. Omshankar Gupta",
        designation: "Lecturer",
        imageUrl: "/images/faculty5.jpeg",
    },
    {
        id: 6,
        name: "Dr. Vishal Sharma",
        designation: "Lecturer",
        imageUrl: "/images/faculty6.png",
    },
    {
        id: 7,
        name: "Sagar Kanojia",
        designation: "Lecturer",
        imageUrl: "/images/faculty7.png",
    },
    {
        id: 8,
        name: "Prem Kishore Shukla",
        designation: "Lecturer",
        imageUrl: "/images/faculty8.jpeg",
    },
];

const FacultyGallery: React.FC = () => {
    const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(
        null
    );

    return (
        <section className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
                Meet Our Faculty
            </h2>

            {/* Grid of Faculty Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {facultyData.map((faculty) => (
                    <div
                        key={faculty.id}
                        className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg border border-gray-200"
                        onClick={() => setSelectedFaculty(faculty)}
                    >
                        <Image
                            src={faculty.imageUrl}
                            alt={faculty.name}
                            width={300}
                            height={300}
                            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-4 bg-white">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {faculty.name}
                            </h3>
                            {/* <p className="text-sm text-gray-600">{faculty.designation}</p> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Faculty Details */}
            {selectedFaculty && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedFaculty(null)}
                        >
                            ✖
                        </button>
                        <Image
                            src={selectedFaculty.imageUrl}
                            alt={selectedFaculty.name}
                            width={400}
                            height={400}
                            className="w-full h-64 object-cover rounded-md"
                        />
                        <h3 className="mt-4 text-xl font-bold text-gray-800">
                            {selectedFaculty.name}
                        </h3>
                        <p className="text-gray-600">{selectedFaculty.designation}</p>
                        <p className="mt-2 text-sm text-gray-700">
                            {selectedFaculty.name} is a renowned faculty member specializing
                            in various fields of media and journalism.
                        </p>
                        <button
                            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                            onClick={() => setSelectedFaculty(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Our Prestigious Faculty
                </h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-gray-800">
                    <li className="bg-white shadow-lg p-4 rounded-lg hover:bg-blue-50 transition">
                        Dr. Arvind Kumar Singh
                    </li>
                    <li className="bg-white shadow-lg p-4 rounded-lg hover:bg-blue-50 transition">
                        Dr. Tanu Dang
                    </li>
                    <li className="bg-white shadow-lg p-4 rounded-lg hover:bg-blue-50 transition">
                        Dr. Pradeep Nair
                    </li>
                    <li className="bg-white shadow-lg p-4 rounded-lg hover:bg-blue-50 transition">
                        Dr. Vishal Sharma
                    </li>
                    <li className="bg-white shadow-lg p-4 rounded-lg hover:bg-blue-50 transition">
                        Dr. Yogendra Kumar Pandey
                    </li>
                    <li className="bg-white shadow-lg p-4 rounded-lg hover:bg-blue-50 transition">
                        Dr. Jitendra Dabral
                    </li>
                    <li className="bg-white shadow-lg p-4 rounded-lg hover:bg-blue-50 transition">
                        Dr. Rashmi Gautam
                    </li>
                    <li className="bg-white shadow-lg p-4 rounded-lg hover:bg-blue-50 transition">
                        Dr. Diwakar Awasthi
                    </li>
                    <li className="bg-white shadow-lg p-4 rounded-lg hover:bg-blue-50 transition">
                        Dr. Om Shankar Gupta
                    </li>
                    <li className="bg-white shadow-lg p-4 rounded-lg hover:bg-blue-50 transition">
                        Mr. Prem Kishore Shukla
                    </li>
                    <li className="bg-white shadow-lg p-4 rounded-lg hover:bg-blue-50 transition">
                        Mr. Sagar Kanojia
                    </li>
                </ul>
            </div>

        </section>
    );
};

export default FacultyGallery;
