import React, { Component } from "react";
import { ButtonTo } from "./buttonTo";
import Title from "./title";
import Summary from "./summary";
import Subtitle from "./subtitle";
import IconDropdown from "./iconDropdown";
import Subject from "./subject";
import DatePicker from "./datePicker";
import TimePicker from "./timePicker";
import Toggle from "./toggle";
import ButtonNewTask from "./buttonNewTask";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { scheme: ["red-bcolor", "green-bcolor"] };
  }
  render() {
    return (
      <section>
        <div className={"flex-center main-column " + this.state.scheme[0]}>
          <p className="summary">Summary</p>
          <Summary />
          <ButtonTo className="button1" id="button-to-page-add-task" text="VIEW TASKS" path="/" history={this.props.history} />
        </div>
        <div className={"flex-center main-column " + this.state.scheme[1]}>
          <div className="header">
            <Title className="p-header text-align-right" text="New Task" />
            <Subtitle />
          </div>
          <div className="flex-center main-section2">
            <IconDropdown />
            <form id="form-add-task">
              <Subject />
              <input type="text" placeholder="What I have to do?*" id="input-what-to-do" />
              <input type="text" placeholder="Where?*" id="input-where" />
              <div class="date-container">
                <DatePicker />
                <TimePicker />
                <Toggle />
              </div>
              <span className="req-text"> *Required fields</span>
            </form>
            <ButtonNewTask />
          </div>
        </div>
      </section>
    );
  }
}

export default Form;
