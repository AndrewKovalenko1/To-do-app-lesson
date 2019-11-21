import React from "react";

export const Greetings = props => {
  return (
    <p className="font-size14">
      {props.isTasks === true
        ? "Nice! Look like you have somee stuff to do, but you can have more!"
        : "Nothing to do yet? Think about let's start!"}
    </p>
  );
};
