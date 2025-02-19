import React, { useState, useEffect } from "react";
import nointernet from "../images/nointernet.svg";

// import nointernet from "../images/Nointernet.jpg"
const InternetConnectionChecker = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  if (isOnline) {
    // Don't display anything when online
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.89)", // Dark semi-transparent background
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, // Ensure it appears on top of all other components
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img src={nointernet} alt="" />
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          You Are Offline
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Please check your internet connection and try again.
        </p>
      </div>
    </div>
  );
};

export default InternetConnectionChecker;
