import React from "react";
import YouTube from "react-youtube";
import "./ReactYoutube.css";

const Videos = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="Video">
      <YouTube
        videoId={videoId} // defaults -> null
        opts={opts}
      />
    </div>
  );
};

export default Videos;
