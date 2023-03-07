import React from "react";
import "./spinner.css";

const Spinner = () => (
  <div className="sk-center">
    <div className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  </div>
);

export default Spinner;
