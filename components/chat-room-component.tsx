"use client";

import { AvatarImage, AvatarFallback, Avatar } from "../components/ui/avatar";
import { ScrollArea } from "../components/ui/scroll-area";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import {
    createConversationsByUserId,
    getConversationsByUserId,
    sendMessageAndGetResponse,
} from "../lib/api";

interface Message {
    role: "system" | "user" | "assistant";
    content: string;
}

const USER_ID = "9bd8b4f1-bacc-4bdf-8e37-b1a0c5ff253b";

export function ChatRoomComponent() {
    const [input, setInput] = useState("");
    const [conversationId, setConversationId] = useState(
        "your_conversation_id_here"
    );
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const call = async () => {
            let conversations = await getConversationsByUserId(USER_ID);
            let latestConversation;

            if (!conversations.length) {
                latestConversation = await createConversationsByUserId(USER_ID);
            } else {
                latestConversation = conversations[0];
            }
            console.log({ latestConversation });

            setConversationId(latestConversation.id);
        };
        call().catch(console.error);
    }, []);

    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    const handleSendMessage = async () => {
        try {
            const data = await sendMessageAndGetResponse(
                USER_ID,
                conversationId,
                input
            );

            setMessages([
                ...messages,
                { role: "user", content: input },
                { role: "assistant", content: data.text },
            ]);
            setInput("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className="flex h-screen bg-[#e6f7f8]">
            <div className="w-1/4 p-4 border-r border-gray-200">
                <div className="flex items-center space-x-3 mb-6">
                    <Avatar>
                        <AvatarImage
                            alt="User avatar"
                            src="/placeholder.svg?height=40&width=40"
                        />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">User</span>
                </div>
                <ScrollArea className="border rounded-md h-[calc(100vh-150px)]">
                    <div className="flex flex-col space-y-4 p-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-white rounded-full p-2">
                                <HomeIcon className="h-5 w-5 text-gray-600" />
                            </div>
                            <span className="text-gray-600">Dashboard</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-blue-100 rounded-md p-2">
                            <div className="bg-white rounded-full p-2">
                                <TextIcon className="h-5 w-5 text-blue-600" />
                            </div>
                            <span className="text-blue-600">Chat</span>
                        </div>
                    </div>
                </ScrollArea>
            </div>
            <div className="w-3/4 p-8">
                <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-hidden">
                        <ScrollArea className="h-full">
                            <div className="space-y-4 p-4">
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${
                                            message.role === "assistant"
                                                ? "justify-start"
                                                : "justify-end"
                                        }`}
                                    >
                                        <div
                                            className={`max-w-xs p-3 ${
                                                message.role === "user"
                                                    ? "bg-blue-100 text-right"
                                                    : "bg-white text-left"
                                            } rounded-md shadow`}
                                        >
                                            <p className="text-sm">
                                                {message.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                    <div className="mt-4">
                        <div className="flex space-x-2">
                            <Input
                                className="flex-1"
                                placeholder="Type your message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <Button
                                variant="secondary"
                                onClick={handleSendMessage}
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HomeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    );
}

function TextIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 6.1H3" />
            <path d="M21 12.1H3" />
            <path d="M15.1 18H3" />
        </svg>
    );
}
