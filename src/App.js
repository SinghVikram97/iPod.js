import React, { Component } from "react";
import "./App.css";
import Wheel from "./Components/Wheel";
import Screen from "./Components/Screen";

export default class App extends Component {
  state = {
    active: 0
  };
  increaseActive = () => {
    if (this.state.active === 3) {
      this.setState({ active: 0 });
    } else {
      this.setState({ active: this.state.active + 1 });
    }
  };

  decreaseActive = () => {
    if (this.state.active === 0) {
      this.setState({ active: 3 });
    } else {
      this.setState({ active: this.state.active - 1 });
    }
  };
  render() {
    return (
      <div className="App">
        <Screen active={this.state.active} />
        <Wheel
          increaseActive={this.increaseActive}
          decreaseActive={this.decreaseActive}
        />
      </div>
    );
  }
}
