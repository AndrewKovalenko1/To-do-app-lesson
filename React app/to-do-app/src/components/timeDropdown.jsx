import React, { Component } from "react";

class TimeDropdown extends Component {
    state = { 
        today: 0,
        future: 0,
        past: 0
     }
    render() { 
        return (  <div className="dropdown">
        <div className="dropbtn today" ><i className="far fa-clock"></i>&nbsp;<span id="dropbtn-when-tasks">Today</span>&nbsp;&nbsp; <i className="fas fa-sort-down"></i></div>
        <div className="dropdown-content" style={{textAlignLast: 'justify'}}>
            <a data-name="Today" href="#" id="dropdown-today">Today {this.state.today}</a>
            <a data-name="Future" href="#" id="dropdown-future">Future {this.state.future}</a>
            <a data-name="Past" href="#" id = "dropdown-past">Past {this.state.past}</a>
        </div>
    </div> );
    }
}
 
export default TimeDropdown;