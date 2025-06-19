import React from "react";

const Header: React.FC = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        backgroundColor: "#FF385C",
        height: "63px",
        padding: "0 24px",
        boxSizing: "border-box",
      }}
    >
      {/* Back Button */}
      <button
        className="flex items-center"
        style={{
          background: "none",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            width: 0,
            height: 0,
            marginTop:"20px",
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderRight: "10px solid white",
            display: "inline-block",
            marginRight: "10px",
          }}
        ></span>
        <span
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
            
          }}
        >
          Back
        </span>
      </button>

      {/* Right Side (placeholder for future use) */}
      <div className="flex items-center gap-4">
        {/* Language selector and profile are handled in LanguageSelector component */}
      </div>
    </header>
  );
};

export default Header;