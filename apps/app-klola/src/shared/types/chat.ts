interface BaseMessage {
    id: number;
    content: string;
    time: string;
    isMe: boolean | null;
}

interface TextMessage extends BaseMessage {
    type: "text";
    sender?: string; // Sender opsional untuk notifikasi
}

interface FileMessage extends BaseMessage {
    type: "file";
    sender: string;
    fileSize: string;
}

export type MessageChat = TextMessage | FileMessage;


export interface ChatState {
    showProfile: boolean;
    toggleProfile: () => void;
    setShowProfile: (value: boolean) => void;
}
