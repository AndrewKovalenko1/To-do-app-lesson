import React, { Component } from "react";
class Title extends Component {
  render() {
    return <p className={this.props.className}>{this.props.text}</p>;
  }
}

export default Title;
