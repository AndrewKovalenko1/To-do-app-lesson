import React, { Component } from "react";
class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "text",
      focus: false
    };
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  onFocus() {
    this.setState({
      type: this.props.currType
    });
  }
  onBlur() {
    if (this.props.value === "") {
      this.setState({
        type: "text"
      });
    }
  }

  render() {
    return (
      <input
        type={this.state.type}
        onFocus={this.onFocus}
        onChange={this.props.onChange}
        onBlur={this.onBlur}
        className={this.props.currClassName}
        placeholder={this.props.placeholder}
        value={this.props.value}
      />
    );
  }
}

export default TimePicker;
