import React from "react";
import "./Owner.css";
import { Link } from "react-router-dom";
const Owner = () => {
  return (
    <div className="Owner">
      <div className="Profile">
        <img src="img/owner.jpg" />
      </div>
      <div className="Info">
        <h1>
          Hey I am Shahzaib Nazar ,First Class Cricketer and PCB Certified Coach
          .In this Academy ,I will enhance your cricket skills
        </h1>
      </div>
    </div>
  );
};

export default Owner;
