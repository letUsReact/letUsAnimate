import React from "react";
import "./Typing.css";
const Typing = () => {
  return (
    <div
      style={{
        height: "fit-content",
        width: "fit-content",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className="dot">
        <div className="dot-one"></div>
      </div>
      <div className="dot">
        <div className="dot-two"></div>
      </div>
      <div className="dot">
        <div className="dot-three"></div>
      </div>
    </div>
  );
};

export default Typing;
