import React, { Component } from "react";

class Filtered extends Component {
  render() {
    const { item } = this.props;
    console.log(item);
    return <h1>Hello from Filtered</h1>;
  }
}

export default Filtered;
