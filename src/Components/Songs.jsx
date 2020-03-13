import React, { Component } from "react";
import SideList from "./SideList";
import bg from "./bg.jpeg";
export default class Songs extends Component {
  componentDidMount() {
    this.props.setListSize(3);
  }

  render() {
    console.log(this.props.path);
    return (
      <div className="row">
        <div className="col s6" style={{}}>
          <SideList
            active={this.props.active}
            buttonRef={this.props.buttonRef}
            itemList={this.props.itemList}
            heading={this.props.heading}
          />
        </div>
        <div
          className="col s6"
          style={{
            backgroundImage: `url(${bg})`,
            height: "292px"
          }}
        ></div>
      </div>
    );
  }
}
