import React, { Component } from "react";
import { createRef } from "react";
import ZingTouch from "zingtouch";
import "./Wheel.css";
import next from "./next.svg";
import play from "./play.svg";
import prev from "./prev.svg";
import { Link, withRouter } from "react-router-dom";

class Wheel extends Component {
  state = {
    currentAngle: 0,
    lastRoundAngle: 0
  };

  wheelContainer = createRef();
  centerBtn = createRef();
  mainContainer = createRef();
  componentDidMount() {
    let wheelRegion = ZingTouch.Region(this.mainContainer.current, true, false);
    let rotateEvent = new ZingTouch.Rotate({});
    wheelRegion.bind(this.wheelContainer.current, rotateEvent, e => {
      this.setState(
        { currentAngle: this.state.currentAngle + e.detail.distanceFromLast },
        () => {
          // console.log(this.state.currentAngle);
          let myAngle = this.state.currentAngle % 360;

          if (Math.abs(myAngle - this.state.lastRoundAngle) >= 20) {
            if (e.detail.distanceFromLast > 0) {
              this.props.increaseActive();
            } else {
              this.props.decreaseActive();
            }

            this.setState({ lastRoundAngle: myAngle });
          }
        }
      );
    });
    let centerRegion = ZingTouch.Region(this.centerBtn.current);

    centerRegion.bind(this.centerBtn.current, "tap", e => {
      this.props.handleWheelClick();
    });
  }

  render() {
    return (
      <div id="main-container" ref={this.mainContainer} draggable="false">
        <div id="wheel-container" ref={this.wheelContainer}></div>
        <a id="center-btn" ref={this.centerBtn} draggable="false"></a>
        <Link
          to="/"
          id="menu-link"
          draggable="false"
          onClick={() => this.props.history.go(-1)}
        >
          <div id="menu">MENU</div>
        </Link>

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

export default withRouter(Wheel);
