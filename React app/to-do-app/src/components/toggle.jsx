import React from "react";

export const Toggle = props => {
  return (
    <div className="flex-center checkbox-container">
      <label className="switch">
        <input type="checkbox" defaultChecked onClick={() => props.onClick()} />
        <span className="slider round"></span>
      </label>{" "}
      <span className="white-space-nowrap">&nbsp; All day</span>
    </div>
  );
};
