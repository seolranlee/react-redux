import React, { Component } from "react";
class DisplayNumber extends Component {
  render() {
    console.log("Display Number");
    return (
      <div>
        <h1>Display Number {this.props.unit}</h1>
        <input type="text" value={this.props.number} readOnly />
      </div>
    );
  }
}

export default DisplayNumber;
