import React from "react";
import Videos from "./Videos";
import "./ReactYoutube.css";
const ReactYoutube = ({ videoId, Caption }) => {
  return (
    <div className="ReactYoutube">
      <div className="Video">
        <Videos videoId={videoId} />
      </div>
      <div className="Caption">
        <h1>{Caption} </h1>

        <br />
        <h1> 🏏🏏🏏</h1>
      </div>
    </div>
  );
};

export default ReactYoutube;
