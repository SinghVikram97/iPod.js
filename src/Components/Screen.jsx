import React, { Component } from "react";
import "./Screen.css";
import SideList from "./SideList";
export default class Screen extends Component {
  render() {
    return (
      <div id="screen-container">
        <div className="row">
          <div className="col s6">
            <SideList />
          </div>
          <div className="col s6">Hi</div>
        </div>
      </div>
    );
  }
}
