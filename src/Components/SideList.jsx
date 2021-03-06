import React, { Component } from "react";
import "./SideList.css";
import { Link } from "react-router-dom";
export default class SideList extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    this.setState({ items: this.props.itemList });
  }
  render() {
    return (
      <ul>
        <li>
          <h5>{this.props.heading}</h5>
        </li>

        {this.state.items.map((item, index) => {
          if (index === this.props.active) {
            return (
              <Link
                to={item}
                ref={this.props.buttonRef}
                className="side-list-link"
              >
                <li className="active capital" key={index}>
                  {item}
                  <i
                    className="material-icons secondary-content"
                    id="active-icon"
                  >
                    keyboard_arrow_right
                  </i>
                </li>
              </Link>
            );
          } else {
            return (
              <Link to={item} className="side-list-link">
                <li key={index} className="capital">
                  {item}
                </li>
              </Link>
            );
          }
        })}
      </ul>
    );
  }
}
