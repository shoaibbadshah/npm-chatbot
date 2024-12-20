// ChatbotEmbed.tsx
import React, { useState } from "react";

const ChatbotEmbed = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          cursor: "pointer",
        }}
      >
        💬
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "0",
            width: "300px",
            height: "400px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            ChatBot
          </div>
          <div
            style={{
              padding: "10px",
              overflowY: "scroll",
              height: "calc(100% - 40px)",
            }}
          >
            <p>Welcome! How can I help you?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotEmbed;
