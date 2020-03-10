import React, { Component } from "react";
import SideList from "./SideList";
export default class Songs extends Component {
  render() {
    console.log(this.props.path);
    return (
      <div className="row">
        <div className="col s6" style={{}}>
          <SideList
            active={this.props.active}
            buttonRef={this.props.buttonRef}
          />
        </div>
        <div className="col s6">Songs</div>
      </div>
    );
  }
}
