import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PeriodItem } from "./periodItem";
import * as Functions from "../functions";

class TimeDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: ["Today", "Future", "Past"]
    };
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropbtn today">
          <FontAwesomeIcon icon="clock" />
          &nbsp;<span>{this.props.currentPeriod}</span>&nbsp;&nbsp;
          <FontAwesomeIcon icon="sort-down" />
        </div>
        <div className="dropdown-content text-align-last-justify">
          {this.state.periods.map(period => (
            <PeriodItem
              onClick={period => this.props.handleOnClickPeriod(period)}
              name={period}
              key={period}
              value={
                this.props.tasks.filter(
                  item => Functions.getCurrentDate(item.date) === period
                ).length
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TimeDropdown;
