// PersonDetails.jsx
import React from "react";
import Navbar from "./Navbar";
import Spinner from "./Spinner";

const PersonDetails = () => {
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
        <div className="person-details-content">
          <Spinner />
          {/* Add your person details content here */}
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
