import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";

const QUICK_REPLIES = [
  "Who is Tunji Babajide",
  "What are his qualifications?",
  "How can I contact him?",
  "What services does he offer?",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = async (text?: string) => {
    const content = text || input;
    if (!content.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content }]);
    setInput("");
    setTyping(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: content }),
    });

    const data = await res.json();
    setTyping(false);

    setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
  };

  const handleQuickReply = (reply: string) => {
    setShowQuickReplies(false);
    handleSend(reply);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2 sm:bottom-6 sm:right-6">
      {/* Chat UI */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[90vw] sm:w-96 h-[70vh] sm:h-[520px] bg-black/60 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold flex justify-between items-center text-sm sm:text-base">
              <span>Let's talk</span>
              <button onClick={() => setOpen(false)} className="hover:text-red-400 text-sm sm:text-base">
                ✖
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 bg-gradient-to-b from-black/60 to-black/40">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.role === "user" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`max-w-[75%] p-2 sm:p-3 rounded-2xl text-xs sm:text-sm ${
                    msg.role === "user"
                      ? "ml-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "mr-auto bg-white/10 border border-white/20 text-white backdrop-blur-md"
                  }`}
                >
                  {msg.content}
                </motion.div>
              ))}

              {typing && (
                <div className="mr-auto bg-white/10 border border-white/20 text-white backdrop-blur-md p-2 sm:p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-white/80 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-white/80 rounded-full animate-bounce delay-150"></span>
                    <span className="w-2 h-2 bg-white/80 rounded-full animate-bounce delay-300"></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {showQuickReplies && (
              <div className="p-2 sm:p-3 flex gap-2 flex-wrap bg-black/40 border-t border-white/20">
                {QUICK_REPLIES.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickReply(q)}
                    className="px-2 sm:px-3 py-1 sm:py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs sm:text-sm shadow hover:scale-105 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-2 sm:p-3 border-t border-white/20 flex items-center gap-2 bg-black/50">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 p-2 sm:p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none text-xs sm:text-sm"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-110 transition"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar Button with White Pulse */}
      <motion.button
        onClick={() => setOpen(!open)}
        style={{
          position: "relative",
          width: 90,
          height: 90,
          borderRadius: "50%",
          cursor: "pointer",
          background: "transparent",
          border: "none",
          padding: 0,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* White Pulse */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.3)",
            zIndex: 0,
            animation: "pulse 1.5s infinite",
          }}
        />

        {/* Avatar Image */}
        <Image
          src="/chatbot-2.jpg"
          alt="Chatbot Avatar"
          width={90}
          height={90}
          style={{ borderRadius: "50%", zIndex: 1 }}
        />

        {/* Pulse Keyframes */}
        <style jsx>{`
          @keyframes pulse {
            0% { transform: scale(0.8); opacity: 0.6; }
            50% { transform: scale(1.2); opacity: 0.2; }
            100% { transform: scale(0.8); opacity: 0.6; }
          }
        `}</style>
      </motion.button>
    </div>
  );
}
