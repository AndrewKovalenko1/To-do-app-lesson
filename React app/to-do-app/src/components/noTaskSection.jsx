import React, { Component } from "react";
class NoTaskSection extends Component {
    render() { 
        return ( <div className="flex-center no-task text-center" id = "no-task-section">
        <i className="fas fa-calendar-alt fa-3x"></i>
        <p className="font-size14" id="label-no-tasks">No tasks for today</p>
    </div> );
    }
}
 
export default NoTaskSection;