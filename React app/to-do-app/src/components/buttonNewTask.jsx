import React, { Component } from "react";
class ButtonNewTask extends Component {
    state = {  }
    render() { 
        return ( <div className = "div-btn-add-task" id="div-btn-add-task">
        <button className="button1 button-form-add-task" disabled id="button-add-task" type="submit" form = "form-add-task">ADD TASK</button>
    </div> );
    }
}
 
export default ButtonNewTask;