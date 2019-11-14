import React, { Component } from "react";
class Toggle extends Component {
    state = {  }
    render() { 
        return (  <div className="flex-center checkbox-container">
        <label class="switch">
            <input type="checkbox" checked id="all-day-checker"/>
            <span className="slider round"></span>
        </label> <span className="white-space-nowrap">&nbsp; All day</span>
    </div> );
    }
}
 
export default Toggle;