"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ChatPage() {
  const [socket, setSocket] = useState(null);
  const [input, setInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]); // State for chat messages
  const [currentTime, setCurrentTime] = useState(""); // State for the latest server time
  const [bgColor, setBgColor] = useState("bg-purple-500"); // State for background color, aligned with main page theme
  const colorIndex = useRef(0); // Ref to track the current color index
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom when chat messages change
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const ws = new WebSocket(`${protocol}://${window.location.host}/ws/chat`);
    ws.onopen = () => {
      console.log("Connected to chat WebSocket");
      setSocket(ws);
    };
    ws.onmessage = (event) => {
      try {
        const messageObj = JSON.parse(event.data);
        if (messageObj.type === "time") {
          // Handle time updates
          setCurrentTime(messageObj.data);
          // Update the background color to match main page gradients
          const colors = [
            "bg-purple-500",
            "bg-teal-500",
            "bg-purple-600",
            "bg-teal-600",
          ];
          colorIndex.current = (colorIndex.current + 1) % colors.length;
          setBgColor(colors[colorIndex.current]);
        } else if (messageObj.type === "chat") {
          // Handle chat messages
          setChatMessages((prev) => [...prev, messageObj.data]);
        }
      } catch (error) {
        console.error("Failed to parse message:", error);
      }
    };
    ws.onclose = () => {
      console.log("Disconnected from chat WebSocket");
      setSocket(null);
    };
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN && input.trim()) {
      socket.send(input);
      // Add your own message to the chatMessages array
      setChatMessages((prev) => [...prev, `You: ${input}`]);
      setInput("");
    }
  };

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 py-12 text-gray-100">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400">
          Live Chat
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Welcome to the live chat! Connect with others in real-time.
        </p>
      </motion.header>
      <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
        {/* Messages Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative mb-4 sm:mb-6 h-64 sm:h-96 overflow-y-auto bg-gray-900 rounded-lg p-3 sm:p-4"
        >
          {/* Render the Server Time at the Top */}
          {currentTime && (
            <div className="sticky top-0 z-10 flex justify-center mb-4">
              <div
                className={`inline-block px-3 py-1 rounded-lg text-gray-900 break-words transition-colors duration-500 ${bgColor}`}
                style={{ maxWidth: "80%" }}
              >
                Server Time: {currentTime}
              </div>
            </div>
          )}
          {/* Messages List */}
          <div className="flex flex-col space-y-3">
            {/* Render Chat Messages Below the Time */}
            {chatMessages.map((msg, idx) => (
              <motion.div
                key={`chat-${idx}`}
                initial={{ opacity: 0, x: msg.startsWith("You:") ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`flex ${
                  msg.startsWith("You:") ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-lg break-words max-w-[80%] shadow-md ${
                    msg.startsWith("You:")
                      ? "bg-gradient-to-r from-purple-500 to-teal-400 text-gray-900"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {msg}
                </div>
              </motion.div>
            ))}
            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
        </motion.div>
        {/* Input Area */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Type your message..."
            className="flex-1 w-full sm:w-auto px-4 py-2 bg-gray-900 text-gray-100 rounded-lg border border-gray-600 focus:border-teal-400 focus:outline-none placeholder-gray-500 text-base"
          />
          <button
            onClick={sendMessage}
            disabled={!socket}
            className={`w-full sm:w-auto px-5 py-2 rounded-lg font-bold transition-colors text-base ${
              socket
                ? "bg-gradient-to-r from-purple-500 to-teal-400 text-gray-900 hover:from-teal-400 hover:to-purple-500"
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            Send
          </button>
        </div>
        {/* Connection Status */}
        <div className="mt-4 text-sm text-center">
          {socket ? (
            <span className="text-teal-400">Connected to chat</span>
          ) : (
            <span className="text-red-400">Disconnected from chat</span>
          )}
        </div>
      </div>
    </div>
  );
}
