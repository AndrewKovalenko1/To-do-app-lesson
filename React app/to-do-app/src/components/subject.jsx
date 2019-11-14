import React, { Component } from "react";
class Subject extends Component {
    state = {  }
    render() { 
        return ( <div className="dropdown form-menu-container">
        <input type="text" value="Business" className="dropbtn input-in-div2" disabled id="input-type-of-task" />

        <span className="fas fa-circle fa-xs circle-position turquoise-color errspan" id="curr-type-of-task-icon" />

        <div className="dropdown-content" id = "type-task-dropdown">
            <div className="dropdown-blocks">
                <a href="#"  data-name="Business" data-color = "turquoise-color">
                    Business <i className="fas fa-circle fa-xs turquoise-color circle-menu-position" />
                </a>
            </div>
            <div className="dropdown-blocks">
                <a href="#" data-name="Personal" data-color = "yellow-color">
                    Personal <i className="fas fa-circle fa-xs yellow-color circle-menu-position"/>
                </a>
            </div>
            <div className="dropdown-blocks">
                <a href="#" data-name="Family" data-color = "blue-color">
                    Family <i className="fas fa-circle fa-xs blue-color circle-menu-position"/>
                </a>
            </div>
            <div className="dropdown-blocks">
                <a href="#" data-name="Work" data-color = "violet-color">
                    Work <i className="fas fa-circle fa-xs violet-color circle-menu-position"/>
                </a>
            </div>
        </div>
    </div> );
    }
}
 
export default Subject;