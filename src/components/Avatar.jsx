import React from 'react';

const Avatar = ({ src, size = 40, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "#3498db",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: size / 2.5,
        fontWeight: "bold",
        textTransform: "uppercase",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {src ? <img src={src} alt="Avatar" style={{ width: "100%", height: "100%", borderRadius: "50%" }} /> : "?"}
    </div>
  );
};

export default Avatar;
