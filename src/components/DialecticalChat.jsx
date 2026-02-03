import { useState, useRef, useEffect } from "react";
import { useDialecticalChat } from "../hooks/useDialecticalChat";
import { SAMPLE_PROBLEMS } from "../services/chatService";
import InsightCard from "./InsightCard";

export default function DialecticalChat() {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const { messages, isLoading, error, sendMessage, clearChat } =
    useDialecticalChat();

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input.trim());
      setInput("");
    }
  };

  const handleSampleClick = (problem) => {
    if (!isLoading) {
      sendMessage(problem);
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <section className="dialectical-chat section" id="ai-consultant">
      <div className="dialectical-chat__container">
        {/* Header */}
        <header className="dialectical-chat__header">
          <span className="dialectical-chat__icon">★</span>
          <div>
            <h2 className="dialectical-chat__title">AI Tư Vấn Biện Chứng</h2>
            <p className="dialectical-chat__subtitle">
              Phân tích vấn đề đời sống theo triết học Mác-Lênin
            </p>
          </div>
          {messages.length > 0 && (
            <button
              className="dialectical-chat__clear"
              onClick={clearChat}
              title="Làm mới cuộc trò chuyện"
            >
              ↻ Làm mới
            </button>
          )}
        </header>

        {/* Chat Area */}
        <div className="dialectical-chat__body">
          {/* Empty State */}
          {isEmpty && (
            <div className="dialectical-chat__empty">
              <div className="dialectical-chat__empty-icon">🤔</div>
              <h3>Bạn đang gặp vấn đề gì trong cuộc sống?</h3>
              <p>
                Chia sẻ với tôi, và tôi sẽ phân tích theo các quy luật biện chứng
                của triết học Mác-Lênin để giúp bạn tìm ra hướng giải quyết.
              </p>

              <div className="dialectical-chat__samples">
                <p className="dialectical-chat__samples-label">
                  Hoặc thử với các tình huống mẫu:
                </p>
                <div className="dialectical-chat__samples-grid">
                  {SAMPLE_PROBLEMS.map((sample) => (
                    <button
                      key={sample.id}
                      className="dialectical-chat__sample-btn"
                      onClick={() => handleSampleClick(sample.problem)}
                      disabled={isLoading}
                    >
                      {sample.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Messages */}
          {!isEmpty && (
            <div className="dialectical-chat__messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`dialectical-chat__message dialectical-chat__message--${msg.role}`}
                >
                  <div className="dialectical-chat__message-content">
                    {msg.role === "assistant" ? (
                      <>
                        <div
                          className="dialectical-chat__message-text"
                          dangerouslySetInnerHTML={{
                            __html: formatMessage(msg.content),
                          }}
                        />
                        {msg.insight && <InsightCard insight={msg.insight} />}
                      </>
                    ) : (
                      <p>{msg.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="dialectical-chat__message dialectical-chat__message--assistant">
                  <div className="dialectical-chat__message-content">
                    <div className="dialectical-chat__typing">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className="dialectical-chat__typing-text">
                      Đang phân tích biện chứng...
                    </span>
                  </div>
                </div>
              )}

              {error && (
                <div className="dialectical-chat__error">
                  <span>⚠️</span> {error}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="dialectical-chat__form">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Chia sẻ vấn đề bạn đang gặp phải..."
            className="dialectical-chat__input"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="dialectical-chat__submit"
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? "..." : "Phân tích"}
          </button>
        </form>
      </div>
    </section>
  );
}

// Helper function to format AI response with HTML
function formatMessage(text) {
  if (!text) return "";

  // Convert markdown-like formatting to HTML
  let formatted = text
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Line breaks
    .replace(/\n/g, "<br />")
    // Headers
    .replace(/^### (.*?)$/gm, '<h4 class="msg-h4">$1</h4>')
    .replace(/^## (.*?)$/gm, '<h3 class="msg-h3">$1</h3>')
    .replace(/^# (.*?)$/gm, '<h2 class="msg-h2">$1</h2>');

  return formatted;
}
