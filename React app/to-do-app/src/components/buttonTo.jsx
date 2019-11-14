import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        this.goHome = this.goHome.bind(this);    
   }
   goHome() {
    this.props.history.push(this.props.path);
  }
  render() {
    return (
      <button className={this.props.className} id={this.props.id} onClick = {this.goHome}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
