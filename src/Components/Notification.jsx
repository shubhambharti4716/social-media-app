// Notification.jsx
import React from "react";
import Navbar from "./Navbar";
import Spinner from "./Spinner";

const Notification = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <div className="notification-content">
          <Spinner />
          {/* Add your notification content here */}
        </div>
      </div>
    </div>
  );
};

export default Notification;
