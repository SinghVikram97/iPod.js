import React, { Component } from "react";
import { createRef } from "react";
import ZingTouch from "zingtouch";
import "./Wheel.css";
import next from "./next.svg";
import play from "./play.svg";
import prev from "./prev.svg";

export default class Wheel extends Component {
  nextBtn = createRef();
  playBtn = createRef();
  prevBtn = createRef();

  componentDidMount() {
    let nextRegion = ZingTouch.Region(this.nextBtn.current);
    nextRegion.bind(this.nextBtn.current, "pan", e => {
      console.log("next-btn");
    });
  }

  render() {
    return (
      <div id="main-container">
        <div id="wheel-container">
          <div id="center-btn"></div>
          <div id="menu">MENU</div>
          <div id="next" ref={this.nextBtn}>
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
