import React from "react";
import { Link } from "react-router-dom";

export const ButtonNewTask = props => {
  let className =
    props.taskFill === false
      ? "button2 button-form-add-task"
      : "button1 button-form-add-task-active";
  return (
    <div className="div-btn-add-task">
      <Link
        to="#"
        onClick={() => props.onClick(props.name)}
        type="submit"
        form="form-add-task"
        className={className}
      >
        ADD TASK{" "}
      </Link>
    </div>
  );
};
