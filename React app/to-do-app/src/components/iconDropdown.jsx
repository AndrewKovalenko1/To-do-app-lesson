import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class IconDropdown extends Component {
    state = {  }

    componentDidMount() {
        // When the component is mounted, add your DOM listener to the "nv" elem.
        // (The "nv" elem is assigned in the render function.)
        this.addEventListener("click", this.handleClick);
      }

    componentWillUnmount() {
        // Make sure to remove the DOM listener when the component is unmounted.
        this.removeEventListener("nv-enter", this.handleClick);
      }

    

    render() { 
        return ( 
         <div className=" dropdown dropdown-main-button">
            <div className="dropdown-additional-button" id="dropdown-additional-button">
                <FontAwesomeIcon icon="pencil-alt" />
            </div>
            <div className="flex-center icon-round text-center bcolor-almost-white gray-border-color dropbtn" id="task-icon-round">
                <span className="span-center"></span>
                <i className="fas fa-plus fa-2x gray-icon"  id="task-icon"></i>
                <span className="span-center"></span>
            </div>
                
            <div className="dropdown-content dropdown-borders">
                <div className="flex-center green-bcolor">
                    <div className="arrow-up"></div>
                </div>
                <ul id = "icon-list" onClick = "">
                    <li><a href="#" data-name = "print" ><FontAwesomeIcon icon="print" className = "blue-color" size = "lg"/></a></li>
                    <li><a href="#" data-name = "comments"><FontAwesomeIcon icon="comments" className = "blue-color" size = "lg"/></a></li>
                    <li><a href="#" data-name = "pen-nib"><FontAwesomeIcon icon="pen-nib" className = "blue-color" size = "lg"/></a></li>
                    <li><a href="#" data-name = "map"><FontAwesomeIcon icon="map" className = "blue-color" size = "lg"/></a></li>
                    <li><a href="#" data-name = "plane"><FontAwesomeIcon icon="plane" className = "blue-color" size = "lg"/></a></li>
                    <li><a href="#" data-name = "car"><FontAwesomeIcon icon="car" className = "blue-color" size = "lg"/></a></li>
                    <li><a href="#" data-name = "envelope"><FontAwesomeIcon icon="envelope" className = "blue-color" size = "lg"/></a></li>
                    <li><a href="#" data-name = "user-friends"><FontAwesomeIcon icon="user-friends" className = "blue-color" size = "lg"/></a></li>
                    <li><a href="#" data-name = "camera"><FontAwesomeIcon icon="camera" className = "blue-color" size = "lg"/></a></li>
                    <li><a href="#" data-name = "headset"><FontAwesomeIcon icon="headset" className = "blue-color" size = "lg"/></a></li>
                    <li><a href="#" data-name = "video"><FontAwesomeIcon icon="video" className = "blue-color" size = "lg"/></a></li>
                    <li><a href="#" data-name = "briefcase"><FontAwesomeIcon icon="briefcase" className = "blue-color" size = "lg"/></a></li>
                </ul>
            </div>
        
    </div> );
    }
}
 
export default IconDropdown;