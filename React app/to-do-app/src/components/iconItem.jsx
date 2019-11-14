import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconItem = props => {
  return (
    <li onClick={() => props.onClick(props.iconName)}>
      <FontAwesomeIcon icon={props.iconName} className="blue-color" size="lg" />
    </li>
  );
};
