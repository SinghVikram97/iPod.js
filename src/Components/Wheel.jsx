import React, { Component } from "react";
import { createRef } from "react";
import ZingTouch from "zingtouch";
import "./Wheel.css";
import next from "./next.svg";
import play from "./play.svg";
import prev from "./prev.svg";

export default class Wheel extends Component {
  wheelContainer = createRef();
  centerBtn = createRef();
  mainContainer = createRef();
  componentDidMount() {
    let wheelRegion = ZingTouch.Region(this.mainContainer.current, true, false);
    wheelRegion.bind(this.wheelContainer.current, "rotate", e => {
      console.log("Wheel");
    });
    let centerRegion = ZingTouch.Region(this.centerBtn.current);

    centerRegion.bind(this.centerBtn.current, "tap", e => {
      console.log("Center");
    });

    centerRegion.bind(this.centerBtn.current, "rotate", () => {});
  }

  render() {
    return (
      <div id="main-container" ref={this.mainContainer}>
        <div id="wheel-container" ref={this.wheelContainer}></div>
        <a id="center-btn" ref={this.centerBtn} href="#/" draggable="false"></a>
        <div id="menu">MENU</div>
        <div id="next">
          <img src={next} id="nextImg" alt="next" draggable="false" />
        </div>
        <div id="play">
          <img src={play} id="playImg" alt="play" draggable="false" />
        </div>
        <div id="prev">
          <img src={prev} id="prevImg" alt="prev" draggable="false" />
        </div>
      </div>
    );
  }
}
