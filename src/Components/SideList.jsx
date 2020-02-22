import React, { Component } from "react";
import "./SideList.css";
export default class SideList extends Component {
  render() {
    return (
      <ul>
        <li>
          <h5>iPod.js</h5>
        </li>
        <li>Songs</li>
        <li className="active">
          Albums{" "}
          <i className="material-icons secondary-content" id="active-icon">
            keyboard_arrow_right
          </i>
        </li>
        <li>Artists</li>
        <li>Playlists</li>
      </ul>
    );
  }
}
