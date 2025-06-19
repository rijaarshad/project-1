// src/App.tsx
import React from "react";
import Sidebar from "./Components/sidebar";
import Header from "./Components/header";
import ChatScreen from "./Components/ChatScreen"; // ✅ This is the key import

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content with Sidebar and Chat */}
      <div className="flex flex-1">
        <Sidebar />

        {/* Main chat area */}
        <main className="flex-1 bg-white overflow-y-auto">
          <ChatScreen />
        </main>
      </div>
    </div>
  );
};

export default App;
