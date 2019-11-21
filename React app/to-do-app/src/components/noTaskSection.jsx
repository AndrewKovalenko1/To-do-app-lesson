import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NoTaskSection = props => {
  return (
     <div className="flex-center no-task text-center">
        <FontAwesomeIcon icon="calendar-alt" size = "3x"/>
        <p className="font-size14">No {(props.status==="All")?"": props.status} tasks for {props.period}</p>
    </div>
  );
};
