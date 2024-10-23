"use client";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok,FaGithub } from "react-icons/fa";
import Link from "next/link";
import removeAccents from "remove-accents"; // Thư viện chuyển đổi không dấu

// Import các phản hồi từ tệp riêng
import botResponses from "@/botResponses";

const FloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState<string[]>([]);

  useEffect(() => {
    // Tự động gửi lời chào sau 2 giây khi chatbot được mở
    const greetingTimeout = setTimeout(() => {
      if (showChatbot) {
        setResponses((prev) => [
          ...prev,
          "Chào bạn! Mình là Linh, developer. Bạn cần giúp gì hôm nay?"
        ]);
      }
    }, 2000);

    return () => clearTimeout(greetingTimeout);
  }, [showChatbot]);

  const toggleLinks = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Chuyển đổi tiếng Việt không dấu thành có dấu
    const normalizedMessage = removeAccents(message.trim().toLowerCase());

    const botResponse =
      botResponses[normalizedMessage] ||
      "Xin lỗi, mình không hiểu câu hỏi của bạn. Bạn có thể thử lại bằng tiếng Việt, tiếng Anh hoặc tiếng Hàn không dấu.";

    setResponses([...responses, `Bạn: ${message}`, `Linh (Chatbot): ${botResponse}`]);
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-2">
      <div className="flex space-x-2">
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="bg-green-500  p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          {showChatbot ? "✖️" : "💬"}
        </button>
        <button
          onClick={toggleLinks}
          className="bg-blue-500  p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          {isOpen ? "✖️" : "🔗"}
        </button>
      </div>

      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col items-end space-y-2">
        <Link
            href="https://facebook.com"
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            < FaGithub/>
          </Link>
          <Link
            href="https://facebook.com"
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://twitter.com"
            className="bg-blue-400 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://linkedin.com"
            className="bg-blue-700 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://instagram.com"
            className="bg-pink-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://tiktok.com"
            className="bg-black text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </Link>
        </div>
      )}

      {showChatbot && (
        <div className="absolute bottom-16 right-0 bg-slate-600 rounded-lg shadow-lg p-4 w-80 border border-gray-300 transition-transform transform hover:scale-105">
          <h3 className="font-bold text-lg mb-2 text-white">Linh (Chatbot)</h3>
          <div className="h-48 overflow-y-auto mb-2 p-2 border border-gray-200 rounded-lg bg-gray-800">
            {responses.map((response, index) => (
              <p
                key={index}
                className={`mb-2 text-white ${
                  response.startsWith("Bạn:") ? "text-right" : "text-left text-blue-400"
                }`}
              >
                {response}
              </p>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="border border-gray-300 text-gray-800 rounded-l-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập câu hỏi..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
