import React, { Component } from "react";
import "./App.css";
import Wheel from "./Components/Wheel";
import Screen from "./Components/Screen";

const activeRef = React.createRef();
const playerRef = React.createRef();

const ref = [activeRef, playerRef];

export default class App extends Component {
  state = {
    active: 0,
    itemListSize: 4
  };

  setListSize = size => {
    this.setState({ itemListSize: size });
  };

  increaseActive = () => {
    if (this.state.active === this.state.itemListSize - 1) {
      this.setState({ active: 0 });
    } else {
      this.setState({ active: this.state.active + 1 });
    }
  };

  decreaseActive = () => {
    if (this.state.active === 0) {
      this.setState({ active: this.state.itemListSize - 1 });
    } else {
      this.setState({ active: this.state.active - 1 });
    }
  };

  handleWheelClick = () => {
    activeRef.current.click();
  };

  handlePlayPause = () => {
    if (playerRef.current.paused) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  };

  render() {
    return (
      <div className="App" id="main-app-container" draggable="false">
        <Screen
          active={this.state.active}
          ref={ref}
          setListSize={this.setListSize}
        />
        <Wheel
          increaseActive={this.increaseActive}
          decreaseActive={this.decreaseActive}
          handleWheelClick={this.handleWheelClick}
          handlePlayPause={this.handlePlayPause}
        />
      </div>
    );
  }
}
