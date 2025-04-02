"use client";

import React, { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// FAQ Data
const faqData = [
    {
        question: "Where is DJMC located in CSJMU?",
        answer: "DJMC is located within Chhatrapati Shahu Ji Maharaj University, Kanpur campus."
    },
    {
        question: "What courses does DJMC, CSJMU offer?",
        answer: "DJMC offers undergraduate (BAJMC) and postgraduate (MAJMC)(PGDJMC) programs in Journalism and Mass Communication and MA in Film making (MAFM)."
    },
    {
        question: "What are the eligibility criteria for BAJMC and MAJMC?",
        answer: "For BAJMC: 10+2 (any stream) from a recognized board. For MAJMC, PGDJMC and MAFM: Graduation in any discipline from a recognized university."
    },
    {
        question: "Is there an entrance exam for admission?",
        answer: "Admission may be based on merit or entrance exams (if applicable)."
    },
    {
        question: "What is the admission process?",
        answer: "The admission process includes online application (Samarth portal), document verification, and payment of fees."
    },
    {
        question: "What are the important admission dates and deadlines?",
        answer: "Admission dates first week of July. Visit the CSJMU official website (csjmu.ac.in) for the latest notifications."
    },
    {
        "question": "How can I apply for admission?",
        "answer": "Applications can be submitted online through the university’s website/Samarth Portal."
    },
    {
        "question": "What documents are required for admission?",
        "answer": "The required documents include Mark sheets (10th, 12th, and graduation for MAJMC), Transfer Certificate (TC), Character Certificate, Aadhaar Card, and recent passport-size photographs."

    },
    {
        "question": "What subjects are covered in the BAJMC/MAJMC/PGDJMC and MAFM program?",
        "answer": "The subjects covered include Print & Electronic Media, Digital Journalism, Public Relations & Advertising, Graphic Design, Media Laws & Ethics, Broadcast Journalism, Photojournalism & Documentary Production, and Film Making."

    },
    {
        "question": "Is the course available in Hindi or English?",
        "answer": "The program is available in both Hindi and English."
    },
    {
        "question": "Does the course include practical training and internships?",
        "answer": "Yes, students undergo internships with media houses and work on live projects."
    },
    {
        "question": "Are there any workshops or guest lectures in the program?",
        "answer": "Yes, workshops, guest lectures, and industry interactions are organized regularly."
    },
    {
        "question": "What is the total course fee for BAJMC/PGSJMC/MAJMC and MAFM?",
        "answer": "Fee details visit the CSJMU official website(csjmu.ac.in) for the latest structure."
    },
    {
        "question": "Are there any scholarships or financial aid options available?",
        "answer": "Yes, scholarships are available for meritorious students, SC/ST/OBC/EWS candidates (as per government norms), and through state and central government schemes."
        
    },
    {
        "question": "Can the fees be paid in instalments?",
        "answer": "Yes, the university may allow instalment-based payments. Contact the admission office for details."
    },
    {
        "question": "Does DJMC offer placement support?",
        "answer": "Yes, the institute provides placement assistance through campus drives and industry tie-ups."
    },
    {
        "question": "Are internships provided by the institute?",
        "answer": "Yes, internships are a mandatory part of the course, with opportunities in media houses, PR firms, and advertising agencies."
    },
    {
        "question": "Does DJMC provide career counselling for students?",
        "answer": "Yes, the departments offer career guidance for job placements and higher studies."
    },
    {
        "question": "What facilities are available for journalism students?",
        "answer": "Tv Studio Media Lab Computer LabLibrary Editing room" 
        
    },
    {
        "question": "Is hostel accommodation available for students?",
        "answer": "Yes, both boy’s and girl’s hostels are available on the campus."
    },
    {
        "question": "Can I visit the campus before applying?",
        "answer": "Yes, campus visits are allowed. Contact the admission office for scheduling a visit."
    },
    {
        "question":"Name of the Head of Department",
        "answer":"Dr Vishal Sharma, "
    },
    {
        "question": "Contact number",
        "answer": "9026760033"
    },
    {
        "question": "Who is the Vice Chancellor of CSJMU",
        "answer": "Prof. Vinay Kumar Pathak"
    },
    {
        "question": "Who is the registrar of CSJMU",
        "answer": "Dr Anil Kumar Yadav"
    },
    {
        "question": "for More Information",
        "answer": "Please contact to the Department"
    }
];

// Configure Fuse.js options
const fuseOptions = {
    keys: ["question"],
    includeScore: true,
    threshold: 0.4, // Lower value = more accurate match
};

const fuse = new Fuse(faqData, fuseOptions);

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
    const [input, setInput] = useState<string>("");

    // Create a ref for the chat container
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom on new message
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    // Find best match using Fuse.js
    const getBestMatch = (input: string) => {
        const results = fuse.search(input);
        if (results.length > 0 && results[0].score && results[0].score <= 0.4) {
            return results[0].item.answer;
        } else {
            return "Sorry,Please contact the respective department.";
        }
    };

    // Handle user input and send response
    const handleSendMessage = (inputText: string) => {
        if (!inputText.trim()) return;

        const userMessage = { sender: "user" as const, text: inputText };
        setMessages((prev) => [...prev, userMessage]);

        // Get best match answer
        const botResponse = getBestMatch(inputText);

        const botMessage = { sender: "bot" as const, text: botResponse };
        setMessages((prev) => [...prev, botMessage]);
        setInput("");
    };

    // Handle button click to show predefined answers
    const handleButtonClick = (question: string) => {
        handleSendMessage(question);
    };

    // Clear chat messages
    const handleClearChat = () => {
        setMessages([]);
    };

    return (
        <div className="w-full max-w-4xl mx-auto h-[400px] sm:h-[400px] md:h-[400px] flex flex-col justify-between border border-gray-300 shadow-lg rounded-lg bg-white sm:mt-0 mt-0 ">
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                {/* <h3 className="text-lg font-semibold">Ask a Question</h3> */}
                {/* Circle Image with Namaste */}
                <div className="flex  items-center">

                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500">
                    <Image
                        src="/chatimage.png" // Replace with your image URL
                        alt="Namaste"
                        width="20"
                        height="20"
                        className="w-full h-full object-cover"
                    />
                    
                </div>
                <div>
                    <span>Ask</span>
                <h3 className="text-sm font-semibold">Currenta</h3>
                </div>
                </div>

                <Button
                    onClick={handleClearChat}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                    Clear Chat
                </Button>
            </div>

            {/* Top 2 Suggested Questions */}
            <div className="flex flex-wrap gap-2 bg-gray-100 p-2 sm:px-4 sm:py-3 justify-center">
                {faqData.slice(0, 2).map((faq, index) => (
                    <Button
                        key={index}
                        onClick={() => handleButtonClick(faq.question)}
                        className="bg-blue-600 text-white px-3 py-1 text-sm md:text-base rounded-lg hover:bg-blue-700 transition"
                    >
                        {faq.question}
                    </Button>
                ))}
            </div>

            {/* Chat Messages with Scroll */}
            <div
                ref={chatContainerRef}
                className="flex-1 p-4 overflow-y-auto bg-gray-100 space-y-2 max-h-[55%]"
            >
                {messages.length === 0 ? (
                    <div className="text-center text-gray-500">No messages yet. Ask a question!</div>
                ) : (
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-lg max-w-[85%] sm:max-w-[75%] lg:max-w-[70%] ${msg.sender === "user"
                                ? "bg-blue-600 text-white self-end ml-auto"
                                : "bg-gray-50 text-gray-700"
                                }`}
                        >
                            <strong>{msg.sender === "user" ? "You:" : "Bot:"}</strong> {msg.text}
                        </div>
                    ))
                )}
            </div>

            {/* Chat Input */}
            <div className="flex p-2 sm:p-3 border-t bg-gray-800 rounded-b-lg items-center space-x-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault(); // Prevents form submission in case it's inside a form
                            handleSendMessage(input);
                        }
                    }}
                    placeholder="Type your question..."
                    className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
                <Button
                    onClick={() => handleSendMessage(input)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Send
                </Button>
            </div>
        </div>
    );
};

export default Chatbot;
