// components/ChatUI.tsx
"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import {
  FaTimes,
  FaPaperPlane,
  FaCheckDouble,
  FaCopy,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
import { BsDot } from "react-icons/bs";

interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  read?: boolean;
}

export default function ChatUI({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e?: FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      read: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    const userMessage = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: res.ok ? data.response : data.error || "Something went wrong.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Sorry, something went wrong.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="w-full max-w-2xl h-[90vh] bg-gray-100 rounded-lg shadow-md flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center bg-blue-200 p-4 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              🤖
            </div>
            <div>
              <h2 className="font-bold">StarklyAI</h2>
              <p className="text-green-600 text-sm flex items-center">
                <BsDot className="text-green-500 text-lg" /> Online
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-600 hover:text-black">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-4 rounded-lg shadow-md relative ${
                  msg.sender === "user"
                    ? "bg-purple-800 text-white font-semibold text-lg rounded-br-none"
                    : "bg-gray-300 text-black text-base"
                }`}
              >
                <p>{msg.text}</p>
                <span className="text-xs absolute bottom-1 right-2 opacity-70">
                  {msg.timestamp}
                </span>
                {msg.sender === "user" && msg.read && (
                  <FaCheckDouble
                    className="absolute bottom-1 left-2 text-blue-400"
                    size={12}
                  />
                )}
                {msg.sender === "bot" && (
                  <div className="flex space-x-2 mt-1 text-gray-500 text-sm">
                    <FaCopy className="cursor-pointer" />
                    <FaThumbsUp className="cursor-pointer" />
                    <FaThumbsDown className="cursor-pointer" />
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow animate-pulse">
                Typing...
              </div>
            </div>
          )}

          <div ref={messagesEndRef}></div>
        </div>

        {/* Quick Replies */}
        <div className="flex overflow-x-auto space-x-2 p-2 bg-gray-200">
          {["What is WappGPT?", "Pricing 💵", "Features ⚡", "Support 📞"].map(
            (q, i) => (
              <button
                key={i}
                className="px-3 py-1 bg-white rounded-full shadow-sm hover:bg-gray-100 text-sm"
                onClick={() => setInput(q)}
              >
                {q}
              </button>
            )
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSend}
          className="flex items-center p-4 bg-white rounded-b-lg border-t"
        >
          <textarea
            className="flex-1 border rounded-full px-4 py-2 resize-none focus:outline-none"
            rows={1}
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 disabled:opacity-50"
            disabled={loading}
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
}
