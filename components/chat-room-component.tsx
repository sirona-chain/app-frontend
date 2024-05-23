import { AvatarImage, AvatarFallback, Avatar } from "../components/ui/avatar";
import { ScrollArea } from "../components/ui/scroll-area";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export function ChatRoomComponent() {
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
                                <div className="flex items-end justify-start">
                                    <div className="max-w-xs p-3 bg-white rounded-md shadow">
                                        <p className="text-sm">
                                            Hello! How can I assist you today?
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-end justify-end">
                                    <div className="max-w-xs p-3 bg-blue-100 rounded-md shadow">
                                        <p className="text-sm">
                                            I am feeling a bit anxious today.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                    <div className="mt-4">
                        <div className="flex space-x-2">
                            <Input
                                className="flex-1"
                                placeholder="Type your message..."
                            />
                            <Button variant="secondary">Send</Button>
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
