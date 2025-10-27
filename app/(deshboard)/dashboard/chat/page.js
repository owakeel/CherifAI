"use client";
import { Plus, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../../public/logo_small_transparent.png";

export default function ChatPage() {
    const [messages, setMessages] = useState([
        { from: "ai", text: "I'd be happy to help analyze current real estate market trends..." },
        { from: "user", text: "Can you analyze the current real estate market trends?" },
        { from: "ai", text: "Sorry, I encountered an error. Please try again." },
    ]);
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages([...messages, { from: "user", text: input }]);
        setInput("");
    };

    return (

        <div className="flex bg-neutral-900 myborder rounded-lg text-white h-[90vh] w-full overflow-y-scroll scrollbar-hide">
            {/* Main Chat Section */}
            <div className="flex flex-col flex-1 p-6 min-h-[90vh] h-fit">
                <div className="flex-1 overflow-y-scroll scrollbar-hide min-h-[90vh] fit space-y-6 pr-4 ">
                    {messages.map((msg, i) => (


                        <div
                            key={i}
                            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"
                                }`}
                        >
                            <div
                                className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${msg.from === "user"
                                    ? "bg-cyan-600 text-white"
                                    : "bg-[#1a1a1a] text-gray-200"
                                    }`}
                            >

                                {
                                    msg.from === "user" ? (
                                        msg.text
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <div className="brandBg w-[35px] h-[35px] rounded-full flex items-center justify-center">
                                                <Image src={logo} alt="logo" />
                                            </div>
                                            {msg.text}
                                        </div>
                                    )
                                }

                            </div>
                        </div>

                    ))}
                </div>

                {/* Input Bar */}
                <form
                    onSubmit={sendMessage}
                    className="mt-4 flex items-center bg-[#111] border border-gray-800 rounded-full px-4 py-2 sticky bottom-10"
                >
                    <input
                        type="text"
                        placeholder="How can I help you today?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-sm px-2"
                    />
                    <button
                        type="submit"
                        className="p-2 rounded-full bg-cyan-600 hover:bg-cyan-500 transition"
                    >
                        <Send size={18} />
                    </button>
                </form>
            </div>

            {/* Sidebar (Right Side) */}
            <div className="hidden lg:flex sticky top-0 w-72 h-[90vh] bg-neutral-800 myborderLeft flex-col">
                <div className="p-4 border-b border-gray-800">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-3 py-2 text-sm text-gray-300 placeholder-gray-500"
                    />
                    <button className="w-full mt-3 bg-cyan-600 hover:opacity-90 transition text-white font-medium py-2 rounded-md flex items-center justify-center gap-2">
                        <Plus size={16} /> Start New Chat
                    </button>
                </div>

                {/* Pinned */}
                <div className="p-4 border-b border-gray-800 flex-1 overflow-y-auto">
                    <h3 className="text-sm font-semibold mb-2 text-gray-400">
                        PINNED CHATS
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:bg-[#1a1a1a] rounded-md px-2 py-1 cursor-pointer">
                            Real Estate Market Analysis
                        </li>
                        <li className="hover:bg-[#1a1a1a] rounded-md px-2 py-1 cursor-pointer">
                            Investment Strategy Discussion
                        </li>
                    </ul>

                    <h3 className="text-sm font-semibold mt-4 mb-2 text-gray-400">
                        RECENT
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:bg-[#1a1a1a] rounded-md px-2 py-1 cursor-pointer">
                            Property Valuation Query
                        </li>
                        <li className="hover:bg-[#1a1a1a] rounded-md px-2 py-1 cursor-pointer">
                            Mortgage Calculator Help
                        </li>
                    </ul>
                </div>

                {/* Bottom Profile */}
                <div className="p-4 border-t border-gray-800 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-gray-400">Pro workspace</p>
                    </div>
                    <div className="bg-cyan-600 w-8 h-8 flex items-center justify-center rounded-full text-black font-bold">
                        JD
                    </div>
                </div>
            </div>
        </div >
    );
}
