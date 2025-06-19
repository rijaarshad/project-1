import React from "react";
import { Paperclip, Smile, Send } from "lucide-react";

const MessageBox: React.FC = () => {
  return (
    <div className="w-full max-w-3xl">
      <div className="border rounded-xl p-4 bg-white shadow">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Ask anything"
            className="flex-1 px-3 py-2 text-gray-700 placeholder-gray-400 bg-transparent outline-none"
          />

          <div className="flex items-center space-x-3 ml-4">
            <Paperclip className="w-5 h-5 text-gray-500 cursor-pointer" />
            <Smile className="w-5 h-5 text-gray-500 cursor-pointer" />
            <button className="bg-[#ff4d6d] text-white px-4 py-2 rounded-lg hover:bg-[#ff3558] transition">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
