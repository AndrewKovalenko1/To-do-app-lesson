import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ActionButton = props => {
  return (
    <div className="task-icon" onClick={props.onClick}>
      <FontAwesomeIcon icon={props.className} />
    </div>
  );
};
