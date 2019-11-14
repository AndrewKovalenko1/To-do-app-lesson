import React, { Component } from "react";
class DatePicker extends Component {
    state = {  }
    render() { 
        return ( <input type="text" onFocus="(this.type='date')" className="input-in-div" placeholder="When?*" id="input-when"></input> );
    }
}
 
export default DatePicker;