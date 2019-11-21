import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubjectItem } from "./subjectItem";

export const SubjectDropdown = props => {
  let selectedSubject =
    props.subject === null ? props.subjects[0] : props.subject;
  return (
    <div className="dropdown form-menu-container">
      <input
        type="text"
        value={selectedSubject.name}
        className="dropbtn input-in-div2"
        disabled
      />
      <FontAwesomeIcon
        icon="circle"
        size="xs"
        className={"circle-position " + selectedSubject.color + " errspan"}
      />
      <div className="dropdown-content">
        {props.subjects.map(subject => (
          <SubjectItem
            onClick={subject => props.handleOnClickSubject(subject)}
            subject={subject}
            name={subject.name}
            key={subject.name}
            color={subject.color}
          />
        ))}
      </div>
    </div>
  );
};
