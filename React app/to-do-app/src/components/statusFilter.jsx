import React, { Component } from "react";
class StatusFilter extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="filter-task">
            <label><input type="radio" name="filtask" value = "All" defaultChecked /><span>All</span></label>
            <label><input type="radio" name="filtask" value = "Done" /><span>Done</span></label>
            <label><input type="radio" name="filtask" value = "Active"/><span>Active</span></label>
        </div>
         );
    }
}
 
export default StatusFilter;