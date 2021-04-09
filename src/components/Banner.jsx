import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import "./Banner.css";
import Pics from "./Pics";
import { Switch } from "react-router-dom";
const Banner = () => {
  var d = new Date();
  var n = d.getMinutes();
  const [Pics, SetPics] = useState("img/4.jpg");
  let Pictures = [
    "img/1.jpeg",
    "img/2.jpeg",
    "img/3.jpeg",
    "img/4.jpg",
    "img/2.jpg",
  ];
  useEffect(() => {
    SetPics(Pictures[Math.floor(Math.random() * Pictures.length)]);
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url( ${Pics})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents"></div>

      <div className="banner--fadeBottom" />
    </div>
  );
};

export default Banner;
