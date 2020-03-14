import React, { Component } from "react";
import settings from "./settings.png";
export default class Settings extends Component {
  render() {
    return (
      <div className="row" style={{ height: "100%" }}>
        <div className="col s12">
          <div className="row" style={{ marginBottom: 0, marginTop: "16%" }}>
            <div className="col s12" style={{ paddingTop: "7%" }}>
              {" "}
              <img src={settings} style={{ width: "60%" }} />
            </div>
          </div>
          <div className="row">
            <div
              className="col s12"
              style={{ fontSize: "122%", fontFamily: "Quicksand" }}
            >
              Settings
            </div>
          </div>
        </div>
      </div>
    );
  }
}
