import React, { Component } from "react";
import "./Wheel.css";
import next from "./next.svg";
import play from "./play.svg";
import prev from "./prev.svg";
export default class Wheel extends Component {
  render() {
    return (
      <div id="main-container">
        <div id="wheel-container">
          <div id="center-btn"></div>
          <div id="menu">MENU</div>
          <div id="next">
            <img src={next} id="nextImg" alt="next" />
          </div>
          <div id="play">
            <img src={play} id="playImg" alt="play" />
          </div>
          <div id="prev">
            <img src={prev} id="prevImg" alt="prev" />
          </div>
        </div>
      </div>
    );
  }
}
