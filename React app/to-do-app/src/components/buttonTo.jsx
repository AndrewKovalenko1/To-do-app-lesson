import React from "react";
import { Link } from "react-router-dom";

export const ButtonTo = props => {
  return (
    <Link className={props.className} to={props.path}>
      {props.text} 
    </Link>
  );
};
