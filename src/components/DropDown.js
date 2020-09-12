import React, { Component } from "react";

class DropDown extends Component {
  state = {
    hide: false,
  };

  handleHide = () => {
    this.setState({ hide: !this.state.hide });
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        <span onClick={this.handleHide} className="drop-cont">
          <p>Resources</p>
          <i
            style={{
              display: "block",
              fontSize: "0.75rem",
              position: "unset",
              transform:
                this.state.hide === false ? "rotate(0deg)" : "rotate(90deg)",
            }}
            className="fas fa-chevron-right"
          ></i>
        </span>
        <div
          className={this.state.hide ? "draop" : "drap"}
          style={{
            position: "absolute",
            top: "20px",
            background: "white",
          }}
        >
          <p>option 1</p>
          <p>option 2</p>
          <p>option 3</p>
        </div>
      </div>
    );
  }
}

export default DropDown;
