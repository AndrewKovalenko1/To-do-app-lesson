import React, { Component } from "react";
class Task extends Component {
    state = {  }
    render() { 
        return ( <div className="task-section">
        <div className="icon-round text-center gray-border-color margin7">
            <span className="span-center"></span>
            <i className="fas fa-wrench fa-2x gray-icon"></i>
            <span className="span-center"></span>
        </div>
        <div className="width100 task-text">
            <p className="black-color margin-2-0">Clean appartment</p>
            <p className="gray-color margin-2-0">Home</p>
        </div>
        <div className="flex-center right-task-section">
            <p className="gray-color">All day</p>
            <div className="task-icon"><i className="fas fa-check"></i></div>
            <div className="task-icon"><i className="fas fa-trash-alt"></i></div>
        </div>
    </div> );
    }
}
 
export default Task;