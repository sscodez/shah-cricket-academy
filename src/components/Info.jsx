import React from "react";
import "./Info.css";
const Info = () => {
  return (
    <div className="info">
      <div className="Image_Info">
        <img src="img/1.jpg" className="Image" />
      </div>
      <div className="CaptionInfo">
        <h1>WHAT IS THE SHAH ACADEMY ACADEMY'S PURPOSE?</h1>
        <h2 className="Caption_Info_text">
          The Shah Cricket Academy has been established in order to give
          Cricketers of any age, gender, ability and location access to high
          quality cricket coaching. Our principles are to encourage players to :{" "}
        </h2>
        <ul>
          <li className="lists">
            Enjoy all aspects of the game and develop a healthy competitive
            spirit
          </li>
          <li className="lists">Express their own natural talents</li>
          <li className="lists">
            Understand that team objectives are more important than individual
            performances
          </li>
          <li className="lists">
            Appreciate excellence and enjoy the success of other players
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
