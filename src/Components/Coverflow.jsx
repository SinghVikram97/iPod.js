import React, { Component } from "react";

export default class Coverflow extends Component {
  render() {
    return (
      <div
        style={{
          fontSize: "150%",
          fontFamily: "Quicksand",
          display: "flex",
          height: "100%",
          flexFlow: "column",
          alignItems: "center"
        }}
      >
        <p style={{ margin: "auto" }}>Coverflow</p>
      </div>
    );
  }
}
