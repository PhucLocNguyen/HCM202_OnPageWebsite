import { createContext, useContext, useState } from "react";
import { sendMessageToGemini } from "@/api/messages";

export interface ChatMessage {
  sender: "user" | "ai";
  text: string;
  createdAt: string;
}

interface ChatContextType {
  sendMessage: (text: string) => Promise<string>; // return AI message text
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "ai",
      text: "Xin chào, tôi là AI Chatbot chuyên trả lời những câu hỏi về quá trình phát triển tư tưởng Hồ Chí Minh giai đoạn 1930 đến 1969.",
      createdAt: new Date().toISOString(),
    },
  ]);

  const sendMessage = async (text: string) => {
    // Add user message to state
    const userMsg: ChatMessage = {
      sender: "user" as const,
      text,
      createdAt: new Date().toISOString(),
    };
    
    setMessages(prev => [...prev, userMsg]);
    
    try {
      // Send to API and get AI reply text
      const aiText = await sendMessageToGemini(text);
      
      // Add AI message to state
      const aiMsg: ChatMessage = {
        sender: "ai" as const,
        text: aiText,
        createdAt: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, aiMsg]);
      return aiText;
    } catch (error) {
      console.error("Failed to send message:", error);
      throw error;
    }
  };

  return (
    <ChatContext.Provider value={{ sendMessage, messages, setMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used inside ChatProvider");
  return ctx;
};
