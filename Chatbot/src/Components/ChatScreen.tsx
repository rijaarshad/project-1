import React from "react";
import MessageBox from "./MessageBox";
import Prompts from "./Prompts ";

const ChatScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center px-4 py-8">
      {/* Logo */}
      <img
        src="/logo.png" // Replace with your logo path or component
        alt="Chatbot Logo"
        className="w-14 h-14 mb-4"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">
        Hi, I am <span className="text-orange-500">YSevents Ai</span>
      </h1>
      <p className="text-lg text-gray-700 mb-8">What can I help with?</p>

      {/* Message Input */}
      <MessageBox />

      {/* Predefined Prompt Buttons */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Prompts text="Lorem ipsum" color="blue" />
        <Prompts text="Lorem ipsum" color="orange" />
        <Prompts text="Lorem ipsum" color="yellow" />
        <Prompts text="Lorem ipsum" color="green" />
      </div>
    </div>
  );
};

export default ChatScreen;
