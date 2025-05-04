"use client";

import HeaderChat from "@ui/components/base/chat/list/header-chat";
import ChatList from "@ui/components/base/chat/list/chat-list";

import { useEffect, useState } from "react";
import { Button } from "@ui/components/base/button";
import { Avatar } from "@ui/components/base/avatar";
import ChatMessages from "@ui/components/base/chat/area/list-chat";

import { messages, openChat } from "../../../data/chat";
import { Textarea } from "@ui/components/base/textarea";
import { ScrollArea } from "@ui/components/base/scroll-area";
import { useChatStore } from "@/shared/hooks/use-profile";

import {
    MessageCircle,
    MoreVertical,
    Paperclip,
    Send,
    Smile,
    X,
} from "lucide-react";

const router_breadcrumbs = [
    { label: "Table", href: "/table", isPage: true },
];

export default function ChatMessage() {
    const [activeView, setActiveView] = useState<
        "desktop" | "tablet" | "mobile"
    >("desktop");
    const [selectedChat, setSelectedChat] = useState(0);
    const [showChatsModal, setShowChatsModal] = useState(false);
    const [user, setUser] = useState<openChat | null>(null);

    // Responsive handler
    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setActiveView("mobile");
            setShowProfile(false);
        } else if (width < 1024) {
            setActiveView("tablet");
            setShowProfile(false);
        } else {
            setActiveView("desktop");
            setShowProfile(true);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const selectedChatData = chats.find((chat) => chat.id === selectedChat);
        if (selectedChatData) {
            setUser({
                id: selectedChatData.id,
                name: selectedChatData.name,
                avatar: selectedChatData.avatar,
                sender: selectedChatData.name,
                content: selectedChatData.lastMessage,
                time: selectedChatData.time,
                type: "text",
                isMe: false,
            });
        } else {
            setUser(null);
        }
    }, [selectedChat]);

    const chats = [
        {
            id: 1,
            name: "Yong Tonghyon",
            avatar:
                "https://ui-avatars.com/api/?name=Yong+Tonghyon&background=random",
            lastMessage: "What makes it different from...",
            time: "11:32 AM",
            unread: 2,
        },
        {
            id: 2,
            name: "Sarah Miller",
            avatar:
                "https://ui-avatars.com/api/?name=Sarah+Miller&background=random",
            lastMessage: "The project deadline is approaching...",
            time: "10:45 AM",
            unread: 0,
        },
        {
            id: 3,
            name: "David Chen",
            avatar:
                "https://ui-avatars.com/api/?name=David+Chen&background=random",
            lastMessage: "Can we schedule a meeting ...",
            time: "9:20 AM",
            unread: 3,
        },
        {
            id: 4,
            name: "Emma Thompson",
            avatar:
                "https://ui-avatars.com/api/?name=Emma+Thompson&background=random",
            lastMessage: "I reviewed the proposal and...",
            time: "8:15 AM",
            unread: 0,
        },
        {
            id: 5,
            name: "James Wilson",
            avatar:
                "https://ui-avatars.com/api/?name=James+Wilson&background=random",
            lastMessage: "The client loved our presentation!",
            time: "Yesterday",
            unread: 0,
        },
        {
            id: 6,
            name: "Sophia Garcia",
            avatar:
                "https://ui-avatars.com/api/?name=Sophia+Garcia&background=random",
            lastMessage: "Lets finalize the design tomorrow...",
            time: "Yesterday",
            unread: 1,
        },
        {
            id: 7,
            name: "Lucas Brown",
            avatar:
                "https://ui-avatars.com/api/?name=Lucas+Brown&background=random",
            lastMessage: "The new features are ready for testing...",
            time: "Monday",
            unread: 0,
        },
        {
            id: 8,
            name: "Isabella Martinez",
            avatar:
                "https://ui-avatars.com/api/?name=Isabella+Martinez&background=random",
            lastMessage: "Great work on the latest release!",
            time: "Sunday",
            unread: 0,
        },
    ];

    const { showProfile, toggleProfile, setShowProfile } = useChatStore();

    return (
                <div className="flex flex-col h-[100%] bg-gray-100 relative">
                    <div className="flex flex-1 overflow-hidden">
                        <div
                            className={`${
                                activeView === "mobile" && selectedChat !== null
                                    ? "hidden"
                                    : "flex"
                            } flex-col w-full sm:w-80 border-r bg-white`}
                        >
                            <HeaderChat
                                title={"Chat Message"}
                                showChatsModal={false}
                            />

                            {chats.length > 0 && (
                                <ChatList
                                    chats={chats}
                                    selectedChat={selectedChat}
                                    setSelectedChat={setSelectedChat}
                                />
                            )}
                            {chats.length === 0 && (
                                <div className="text-center text-gray-500 text-sm mt-2 space-y-2">
                                    No Contact
                                </div>
                            )}
                        </div>
                        {/* area chat message */}
                        {user !== null
                            ? (
                                <>
                                    <div
                                        className={`${
                                            activeView === "mobile" &&
                                                selectedChat === null
                                                ? "hidden"
                                                : "flex"
                                        } flex-col flex-1 bg-white`}
                                    >
                                        <div className="flex items-center justify-between p-4 border-b h-[65px]">
                                            {activeView === "mobile" &&
                                                (
                                                    <Button
                                                        variant="ghost"
                                                        className=""
                                                        size="sm"
                                                        onClick={() =>
                                                            setSelectedChat((
                                                                prev,
                                                            ) => (prev === null
                                                                ? 0
                                                                : null) as number
                                                            )}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M15 18l-6-6 6-6" />
                                                        </svg>
                                                    </Button>
                                                )}
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-8 w-8 border">
                                                    <img
                                                        src={user.avatar ||
                                                            "/placeholder.svg?height=40&width=40"}
                                                        alt={user.name ||
                                                            "unknown"}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </Avatar>
                                                <div>
                                                    <div className="font-medium text-sm">
                                                        {user.name || "unknown"}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {user.time}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() =>
                                                        setShowProfile(
                                                            !showProfile,
                                                        )}
                                                >
                                                    <MoreVertical className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                        <ChatMessages messages={messages} />
                                        <div className="p-4 border-t">
                                            <div className="flex items-end gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 flex-shrink-0"
                                                >
                                                    <Paperclip className="h-4 w-4" />
                                                </Button>
                                                <Textarea
                                                    placeholder="Write a message..."
                                                    className="min-h-20 resize-none"
                                                    rows={1}
                                                />
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 flex-shrink-0"
                                                >
                                                    <Smile className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    className="h-8 w-8 flex-shrink-0"
                                                >
                                                    <Send className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    {showProfile && (
                                        <div className="hidden lg:flex flex-col w-80 border-l bg-white">
                                            <div className="flex justify-between items-center p-[18px] border-b h-[65px]">
                                                <h2 className="font-semibold text-lg">
                                                    Profile
                                                </h2>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() =>
                                                        setShowProfile(false)}
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <ScrollArea className="flex-1">
                                                <div className="p-4 flex flex-col items-center">
                                                    <div className="w-full aspect-square max-w-[240px] bg-gray-200 rounded-lg overflow-hidden mb-4">
                                                        <img
                                                            src={user.avatar}
                                                            alt="Profile"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <h3 className="text-xl font-semibold">
                                                        {user.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 mb-6">
                                                        {user.time}
                                                    </p>

                                                    <div className="w-full space-y-6">
                                                        <div>
                                                            <h4 className="text-sm font-medium mb-2">
                                                                Bio
                                                            </h4>
                                                            <p className="text-sm">
                                                                Life is mirror,
                                                                smile at it 😊
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ScrollArea>
                                        </div>
                                    )}
                                </>
                            )
                            : (
                                <div className="flex items-center justify-center flex-1">
                                    <div className="text-center">
                                        <MessageCircle className="text-gray-500 w-12 h-12 mb-4 mx-auto" />
                                        <p className="text-gray-500">
                                            Select a contact to start a
                                            conversation.
                                        </p>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
    );
}
