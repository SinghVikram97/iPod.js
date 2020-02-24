import React, { Component } from "react";
import SideList from "./SideList";
export default class HomePage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s6">
          <SideList
            active={this.props.active}
            buttonRef={this.props.buttonRef}
          />
        </div>
        <div className="col s6">Hi</div>
      </div>
    );
  }
}
