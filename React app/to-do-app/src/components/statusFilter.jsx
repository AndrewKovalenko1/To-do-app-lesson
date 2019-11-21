import React, { Component } from "react";
class StatusFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusArray: ["All","Done","Active"]
        };
        
      }
    
      render() { 
        return ( 
        <div className="filter-task">
         {this.state.statusArray.map(status => (
              <label key={status}><input type="radio" name="filtask" value = {status} defaultChecked = {(status === this.props.currentStatus)}
              onChange={this.props.onChange} /><span>{status}</span></label>

            ))}
           </div>
         );
    }
}
 
export default StatusFilter;