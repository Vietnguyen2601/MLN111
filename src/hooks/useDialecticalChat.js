import { useState, useCallback } from "react";
import { sendMessage as sendChatMessage } from "../services/chatService";

export function useDialecticalChat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [insights, setInsights] = useState([]);

  // Send message to AI
  const sendMessage = useCallback(async (userMessage) => {
    // Add user message immediately
    const userMsg = {
      id: Date.now(),
      role: "user",
      content: userMessage,
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setError(null);

    // Build history for context (last 6 messages)
    const history = [...messages.slice(-6), userMsg].map((m) => ({
      role: m.role,
      content: m.content,
    }));

    try {
      const response = await sendChatMessage(userMessage, history.slice(0, -1));

      if (response.success) {
        // Clean the message by removing the insight JSON block
        let cleanedMessage = response.message;
        cleanedMessage = cleanedMessage.replace(/```insight[\s\S]*?```/g, "").trim();

        const assistantMsg = {
          id: Date.now() + 1,
          role: "assistant",
          content: cleanedMessage,
          insight: response.insight,
        };

        setMessages((prev) => [...prev, assistantMsg]);

        // Store insight if present
        if (response.insight) {
          setInsights((prev) => [...prev, response.insight]);
        }
      } else {
        throw new Error(response.error || "Đã xảy ra lỗi");
      }
    } catch (err) {
      setError(err.message || "Đã xảy ra lỗi khi gửi tin nhắn");
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  // Clear all messages
  const clearChat = useCallback(() => {
    setMessages([]);
    setInsights([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    insights,
    sendMessage,
    clearChat,
  };
}
