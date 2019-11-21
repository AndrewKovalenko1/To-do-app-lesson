import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {PeriodItem} from "./periodItem";
class TimeDropdown extends Component {
    constructor(props) {
        super(props);
  this.state = {
    periods: [{name: "Today", value: 0},
              {name: "Future", value: 0},
              {name: "Past", value: 0}],
   };
}
getCurrentDate =inputDate => {
  let currTime = '';
  let currDate = new Date();
  let dateToCompare = new Date(inputDate);
  if (dateToCompare.getDate() === currDate.getDate()
  && dateToCompare.getMonth() === currDate.getMonth()
  && dateToCompare.getFullYear() === currDate.getFullYear()) {
  currTime = 'Today';
} else if ((dateToCompare.getFullYear() > currDate.getFullYear())
  || ((dateToCompare.getFullYear() === currDate.getFullYear())
    && (dateToCompare.getMonth() > currDate.getMonth()))
  || ((dateToCompare.getFullYear() === currDate.getFullYear())
    && (dateToCompare.getMonth() === currDate.getMonth())
    && (dateToCompare.getDate() > currDate.getDate()))) {
  currTime = 'Future';
} else {
  currTime = 'Past';
}
return currTime;

}

   render() {
    return (
      <div className="dropdown">
        <div className="dropbtn today">
          <FontAwesomeIcon icon="clock" />
          &nbsp;<span id="dropbtn-when-tasks">{this.props.currentPeriod}</span>&nbsp;&nbsp;
          <FontAwesomeIcon icon="sort-down" />
        </div>
        <div className="dropdown-content" style={{ textAlignLast: "justify" }}>
          {this.state.periods.map(period => (
            <PeriodItem
              onClick={(period)=>this.props.handleOnClickPeriod(period)}
              name={period.name}
              key={period.name}
              value = {this.props.tasks.filter(item=>this.getCurrentDate(item.date)===period.name).length}
             />
          ))}
        </div>
      </div>
    );
  }
}

export default TimeDropdown;
