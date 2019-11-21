import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconItem } from "./iconItem";
class IconDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ["print", "comments", "pen-nib", "map", "plane", "car"],
      
    };
  }

  /*handleClickOnIcon = iconName => {
    if (iconName) {
      this.setState({ selectedIcon: iconName });
      if (!this.state.iconIsSelected) this.setState({ iconIsSelected: true });
    }
  };*/
  
  render() {
    return (
      <div className=" dropdown dropdown-main-button">
      {this.props.currentIcon !=="plus" ?  <div className="dropdown-additional-button" >
          <FontAwesomeIcon icon="pencil-alt" />
        </div> : null}  
        <div className= {"flex-center icon-round text-center bcolor-almost-white dropbtn " + (this.props.currentIcon ==="plus" ? " gray-border-color " : " red-border-color ")}>
          <span className="span-center"></span>
          <FontAwesomeIcon
            icon={this.props.currentIcon}
            className={this.props.currentIcon ==="plus" ? "gray-color" : "red-color"}
            size="2x"
          />
          <span className="span-center"></span>
        </div>

        <div className="dropdown-content dropdown-borders">
          <div className="flex-center green-bcolor">
            <div className="arrow-up"></div>
          </div>
          <ul>
            {this.state.icons.map(icon => (
              <IconItem onClick={(icon)=>this.props.handleOnClickIcon(icon)} iconName={icon} key={icon} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default IconDropdown;
