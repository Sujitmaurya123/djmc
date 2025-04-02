import React from "react";

const MoUs = () => {
    const agreements = [
        { name: "Bundelkhand University", location: "Jhansi, UP" },
        { name: "Radio Kanpuriya FM 90.0", location: "India" },
        { name: "PATS Literary Solutions Ltd.", location: "Kanpur" },
        { name: "The Hindu Today", location: "London" },
    ];

    return (
        <div className="min-h-screen  p-6">
            <div className="max-w-4xl mx-auto  p-6 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-6">MoUs with Institutions & Industries</h1>
                <ul className="space-y-4">
                    {agreements.map((agreement, index) => (
                        <li
                            key={index}
                            className="p-4 bg-blue-100 rounded-lg shadow-md flex justify-between items-center"
                        >
                            <span className="text-lg font-semibold text-gray-700">{agreement.name}</span>
                            <span className="text-gray-900">{agreement.location}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MoUs;
