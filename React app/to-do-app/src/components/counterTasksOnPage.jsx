import React from "react";

export const CounterTasksOnPage = props => {
  let countOfAll = props.tasksToWiew.length;
  let countoOfActive = props.tasksToWiew.filter(
    item => item.status === "Active"
  ).length;
  return (
    <div className="task-counter">
      {countoOfActive} of {countOfAll}
    </div>
  );
};
