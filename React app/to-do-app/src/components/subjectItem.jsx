import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SubjectItem = props => {
  return (
    <div className="dropdown-blocks">
      <Link
        to="#"
        onClick={() => props.onClick(props.subject)}
        name={props.name}
        key={props.name}
      >
        {props.name}{" "}
        <FontAwesomeIcon
          icon="circle"
          size="xs"
          className={"circle-menu-position " + props.color}
        />
      </Link>
    </div>
  );
};
