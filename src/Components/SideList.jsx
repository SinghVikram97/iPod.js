import React, { Component } from "react";
import "./SideList.css";
export default class SideList extends Component {
  state = {
    items: ["Songs", "Albums", "Artists", "Playlists"]
  };
  render() {
    console.log(this.props.active);
    return (
      <ul>
        <li>
          <h5>iPod.js</h5>
        </li>

        {this.state.items.map((item, index) => {
          if (index === this.props.active) {
            return (
              <li className="active" key={index}>
                {item}
                <i
                  className="material-icons secondary-content"
                  id="active-icon"
                >
                  keyboard_arrow_right
                </i>
              </li>
            );
          } else {
            return <li key={index}>{item}</li>;
          }
        })}
      </ul>
    );
  }
}
