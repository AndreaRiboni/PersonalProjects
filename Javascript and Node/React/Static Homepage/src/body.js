import React from 'react';
import Jumbotron from "./navigation/jumbotron"
import Welcome from "./welcome"

const IntroStyle = {
};

export default function Body() {

    return (
      <div id="BodyContainer" style={IntroStyle}>
          <Jumbotron/>
          <Welcome/>
      </div>
    );
  }