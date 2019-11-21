import React from "react";
import { Link } from "react-router-dom";

export const PeriodItem = props => {
  return (
       <Link
            to='#'
            onClick={() => props.onClick(props.name)}
              name={props.name}
              key={props.name}
            >{props.name}&nbsp;{props.value}  </Link>

  );
};
