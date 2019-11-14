import React, { Component } from "react";
class TimePicker extends Component {
    state = {  }
    render() { 
        return (  <input type="text" onFocus="(this.type='time')" className="time-in-div" placeholder="What time?*" id="input-when-time"/> );
    }
}
 
export default TimePicker;