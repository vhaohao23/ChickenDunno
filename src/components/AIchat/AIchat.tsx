"use client";
import { GoogleGenAI } from "@google/genai";
import React, { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

interface Message {
    id: number;
    content: string;
    sender: "user" | "contact";
    timestamp: string;
}

const AIchat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const ai = new GoogleGenAI({ apiKey: "AIzaSyBptQuQvQuAWepcmE_V17Xq7L5LUEhjIhU" });

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const reply = async (content: string) => {
        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: content,
            });
            
            const aiResponse = response.text || "I'm sorry, I couldn't generate a response.";
            
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    id: prevMessages.length + 1,
                    content: aiResponse,
                    sender: "contact",
                    timestamp: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                },
            ]);
        } catch (error) {
            console.error("Error generating AI response:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    id: prevMessages.length + 1,
                    content: "Sorry, I encountered an error. Please try again.",
                    sender: "contact",
                    timestamp: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                },
            ]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    id: prevMessages.length + 1,
                    content: message,
                    sender: "user",
                    timestamp: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                },
            ]);
            setMessage("");
            reply(message);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {isOpen && (
                <div className="fixed bottom-24 right-5 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
                    <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                        <h3 className="text-lg font-semibold">AI Assistant</h3>
                        <button 
                            onClick={toggleChat}
                            className="text-white hover:text-gray-200 transition-colors"
                        >
                            <FaTimes />
                        </button>
                    </div>
                    
                    <div className="flex-1 p-4 overflow-y-auto space-y-3">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`max-w-[80%] p-3 rounded-2xl ${
                                    msg.sender === "user"
                                        ? "bg-blue-600 text-white ml-auto rounded-br-none"
                                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                                }`}
                            >
                                <div className="text-sm">{msg.content}</div>
                                <div className="text-xs mt-1 opacity-70">{msg.timestamp}</div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 flex gap-2">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}

            <button
                onClick={toggleChat}
                className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
            >
                <FaRobot className="text-2xl" />
            </button>
        </div>
    );
};

export default AIchat;
