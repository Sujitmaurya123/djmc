"use client";

import React, { useState } from "react";
import Chatbot from "./Chatbot";
import { Button } from "../ui/button";
import Chaticon from "./Chaticon";


const Chatboticon: React.FC = () => {
    const [showChatbot, setShowChatbot] = useState<boolean>(false);

    return (
        <div className="z-15">
           

            {/* Chatbot Button */}
            <div className="fixed bottom-6 right-6">
                <Button
                    onClick={() => setShowChatbot(!showChatbot)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
                >
                    {showChatbot ? "Close Chat" : <Chaticon/>}
                </Button>

                {/* Chatbot Modal */}
                {showChatbot && (
                    <div className="fixed bottom-16 right-6 w-80 max-h-[450px] bg-white border rounded-lg shadow-lg">
                        <Chatbot />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chatboticon;
