import React, { Component } from "react";

class CounterTasksOnPage extends Component {
    state = { 
        active: 0,
        total:  0
     }
    render() { 
        return (  <div className="task-counter" id='task-counter'>
        {this.state.active} of {this.state.total}
    </div> );
    }
}
 
export default CounterTasksOnPage;