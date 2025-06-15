import React from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

const OnlineStatus = () => {
  const isOnline = useOnlineStatus();

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    height: "100vh",
    fontFamily: "sans-serif",
    backgroundColor: isOnline ? "#e0ffe0" : "#ffe0e0",
    color: isOnline ? "#006400" : "#8b0000",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      {isOnline ? "🟢 You are Online" : "🔴 You are Offline"}
    </div>
  );
};

export default OnlineStatus;
