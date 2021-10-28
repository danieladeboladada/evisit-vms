import React from "react";
import "./index.css";

export const Authentication = ({ children }) => {
  return (
    <div className="login-body">
      <div className="login-container">
        <div></div>
        {children}
      </div>
    </div>
  );
};
