"use client";

import React, { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { Button } from "@/components/ui/button";

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
            return "Sorry, I couldn't find an answer to your question.";
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
                <h3 className="text-lg font-semibold">Ask a Question</h3>
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
