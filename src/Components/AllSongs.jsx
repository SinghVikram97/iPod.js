import React, { Component } from "react";
import cover from "./cover.jpg";
import audioSrc from "./audio.mp3";
import "./AllSongs.css";
import { createRef } from "react";

export default class AllSongs extends Component {
  state = {
    currentTime: "",
    totalLength: ""
  };
  progressBar = createRef();
  calculateTotalValue = length => {
    let minutes = Math.floor(length / 60),
      seconds_int = length - minutes * 60,
      seconds_str = seconds_int.toString(),
      seconds = seconds_str.substr(0, 2),
      time = minutes + ":" + seconds;

    return time;
  };
  calculateCurrentValue = currentTime => {
    let current_minute = parseInt(currentTime / 60) % 60,
      current_seconds_long = currentTime % 60,
      current_seconds = current_seconds_long.toFixed(),
      current_time =
        (current_minute < 10 ? "0" + current_minute : current_minute) +
        ":" +
        (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;
  };
  handleTimeUpdate = () => {
    let player = document.getElementById("player");

    let len = player.duration;
    let current_time = player.currentTime;

    // console.log(current_time);

    // Calculate total length of value
    let totalLength = this.calculateTotalValue(len);

    // Calculate current time
    let currentTime = this.calculateCurrentValue(current_time);

    this.setState({ currentTime, totalLength }, () => {
      this.progressBar.current.value = player.currentTime / player.duration;
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row" style={{ marginTop: "14%" }}>
            <div className="col s6" style={{ paddingLeft: "4%" }}>
              <img src={cover} style={{ width: "100%" }}></img>
            </div>
            <div
              className="col s6"
              style={{ paddingTop: "4%", paddingRight: "5%" }}
            >
              <p
                style={{
                  fontSize: "120%",
                  fontWeight: "bold"
                }}
              >
                01 Firestone
              </p>
              <p
                style={{
                  fontSize: "100%",
                  color: "rgba(39, 39, 39,2)"
                }}
              >
                Kygo, Conrad Sewell
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "10%" }}>
            <div className="col s12">
              <div className="audio-player">
                <div className="audio-wrapper" id="player-container">
                  <audio
                    autoPlay={true}
                    id="player"
                    onTimeUpdate={this.handleTimeUpdate}
                  >
                    <source src={audioSrc} type="audio/mp3" />
                  </audio>
                </div>
              </div>
              <div className="player-controls">
                <span>
                  <progress
                    id="audio-progress"
                    value="0"
                    max="1"
                    ref={this.progressBar}
                  ></progress>
                </span>
                <br></br>
                <small
                  style={{ float: "left", position: "relative", left: "15px" }}
                  class="start-time"
                >
                  {this.state.currentTime}
                </small>
                <small
                  style={{
                    float: "right",
                    position: "relative",
                    right: "20px"
                  }}
                  class="end-time"
                >
                  {this.state.totalLength}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
