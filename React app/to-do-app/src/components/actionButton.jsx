import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class ActionButton extends Component {
    state = {  }
    render() { 
        return ( <div className="task-icon">
            <FontAwesomeIcon icon={this.props.className}  />
            
            </div> );
    }
}
 
export default ActionButton;