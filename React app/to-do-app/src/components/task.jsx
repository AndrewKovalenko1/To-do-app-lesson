import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
export const Task = props => {
  return (
     <div className="task-section" key={props.task.id}>
        <div className={`icon-round text-center margin7 ${(props.task.status==="Active")? " gray-border-color":" red-border-color"}`}>
            <span className="span-center"></span>
            <FontAwesomeIcon icon ={props.task.icon} size = "2x" className= {(props.task.status==="Active")?"gray-icon":"vertical-align-middle red-color"} />
            <span className="span-center"></span>
        </div>
        <div className="width100 task-text">
            <p className={`margin-2-0 ${(props.task.status==="Active")?" black-color":" gray-color line-through"}`} >{props.task.title}</p>
            <p className={`margin-2-0 ${(props.task.status==="Active")?" gray-color":" light-gray-color"}`}>{props.task.place}</p>
        </div>
        <div className="flex-center right-task-section">
            <p className={`gray-color ${(props.task.status==="Active")?"":" line-through"}`}>{props.task.period}</p>
            <div className="task-icon" onClick={props.actionOneTask}><FontAwesomeIcon icon={(props.task.status==="Active")?"check":"redo-alt"}/></div>
            <div className="task-icon" onClick={props.deleteOneTask}><FontAwesomeIcon icon="trash-alt"/></div>
        </div>
    </div>
  );
};
