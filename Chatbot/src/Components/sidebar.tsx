import React, { useState } from "react";
import {
  FiMoreHorizontal,
  FiTrash2,
  FiChevronDown,
  FiFolder,
  FiPlus,
  FiMessageSquare,
} from "react-icons/fi";

const recentChats: string[] = [
  "Suggestion about...",
  "Order placing help...",
  "Confirmation about...",
  "Seller accounts...",
  "Photography tools...",
];

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <aside
      className="flex flex-col"
      style={{
        width: "311px",
        height: "100vh",
        backgroundColor: "#FFF5F7",
        borderRight: "1px solid #E5DADA",
        padding: "20px 0px 20px 20px",
        boxSizing: "border-box",
      }}
    >
      {/* Logo + Title */}
      <div
        className="flex items-center gap-3 mb-6"
        style={{
          marginTop: "24px",
          marginLeft: "12px",
        }}
      >
        <img
          src="\src\assets\logo.png"
          alt="Logo"
          style={{
            width: "30px",
            height: "30px",
            objectFit: "contain",
          }}
        />
        <div
          style={{
            fontSize: "40px",
            fontWeight: 700,
            background: "linear-gradient(90deg, #FF385C 37.98%, #FF8A00 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          YSevents Ai
        </div>
      </div>

      {/* New Chat Button */}
      <button
        className="flex items-center justify-center gap-2 text-sm px-4 py-2 w-fit transition"
        style={{
          backgroundColor: "#FF385C",
          color: "white",
          height:"40px",
          width:"100px",
          marginLeft: "12px",
          marginTop: "8px",
          borderRadius: "9999px",
          outline: "none",
          border: "none",
          boxShadow: "none",
        }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <FiPlus className="text-base" style={{ color: "white" }} />
        New chat
      </button>

      {/* Recent Label */}
      <div
        className="text-sm text-gray-600 font-medium mb-2 mt-4"
        style={{ marginLeft: "12px", marginTop: "12px" }}
      >
        Recent
      </div>

      {/* Chat Items */}
      <div className="flex flex-col gap-2 mb-4" style={{ marginLeft: "12px" }}>
        {recentChats.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer text-sm group"
              style={{
                width: "247px",
                height: "44px",
                borderRadius: "16px",
                paddingLeft: "16px",
                paddingRight: "12px",
                marginRight: "8px",
                backgroundColor: isActive ? "#FF385C4D" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = "#FF385C1A";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              <div className="flex items-center overflow-hidden" style={{ flex: 1 }}>
                <FiMessageSquare
                  size={14}
                  style={{ color: "#FF385C", flexShrink: 0 }}
                />
                <span
                  className="truncate"
                  style={{
                    color: isActive ? "#FF385C" : "#000000",
                    fontSize: "14px",
                    marginLeft: "8px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item}
                </span>
              </div>
              <FiMoreHorizontal
                size={16}
                style={{ color: "#666", flexShrink: 0, marginLeft: "8px" }}
              />
            </div>
          );
        })}
      </div>

      {/* More Section */}
      <div
        className="flex items-center gap-1 text-sm cursor-pointer"
        style={{
          marginLeft: "12px",
          marginTop: "12px",
          marginBottom: "20px",
          color: "#6B6B6B",
          fontWeight: 400,
        }}
      >
        <FiChevronDown size={16} style={{ color: "#FF385C" }} />
        <span>More</span>
      </div>

      {/* Archive */}
      <div
        className="flex items-center gap-2 text-sm cursor-pointer hover:text-black"
        style={{
          marginLeft: "12px",
          marginBottom: "24px",
          color: "#333",
          fontWeight: 500,
        }}
      >
        <FiFolder size={16} style={{ color: "#333", marginRight: "10px" }} />
        <span>Manage Archive</span>
      </div>

      {/* Clear Conversation Button */}
      <button
        className="flex items-center text-sm py-2 px-4 rounded-full transition"
        style={{
          marginLeft: "12px",
          width: "247px",
          border: "1px solid #FF385C",
          color: "black",
          backgroundColor: "rgba(255, 56, 92, 0.05)",
          fontWeight: 500,
          borderRadius: "9999px",
        }}
      >
        <FiTrash2 size={16} color="#E5DADA" style={{ marginRight: "10px" }} />
        Clear Conversation
      </button>
    </aside>
  );
};

export default Sidebar;