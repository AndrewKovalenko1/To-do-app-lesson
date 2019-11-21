import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Summary = props => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td className="td-left" colSpan="2">
            All things
          </td>
          <td className="td-right">
            {props.subjects.reduce((sum, current) => sum + current.value, 0)}
          </td>
        </tr>
        {props.subjects.map(item => {
          return (
            <tr key={item.name}>
              <td className="td-left">{item.name}</td>
              <td className="td-center">
                <FontAwesomeIcon
                  icon="circle"
                  size="xs"
                  className={item.color}
                />
              </td>
              <td className="td-right">{item.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
