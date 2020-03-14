import React, { Component } from "react";
import dice from "./dice.jpg";
export default class Games extends Component {
  render() {
    return (
      <div className="row" style={{ height: "100%" }}>
        <div className="col s12">
          <div className="row" style={{ marginBottom: 0 }}>
            <div
              className="col s12"
              style={{ paddingRight: "10%", paddingTop: "7%" }}
            >
              {" "}
              <img src={dice} style={{ width: "60%" }} />
            </div>
          </div>
          <div className="row">
            <div
              className="col s12"
              style={{ fontSize: "122%", fontFamily: "Quicksand" }}
            >
              Games
            </div>
          </div>
        </div>
      </div>
    );
  }
}
