import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Cards from "../Cards";
import Banner from "../Banner";
import Info from "../Info";

import ReactYoutube from "../ReactYoutube";
function Home() {
  return (
    <div>
      <Banner />

      <Info />
      <ReactYoutube videoId="Nu6bQo8vZz0" Caption="Batting Drill" />
      <ReactYoutube
        videoId="0TUpaTHS6Dk"
        Caption="How to play Spin Bowling ,Tips by Shahzaib Nazar"
      />
      <Footer />
    </div>
  );
}

export default Home;
