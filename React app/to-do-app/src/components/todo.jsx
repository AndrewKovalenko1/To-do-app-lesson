import React, { Component } from "react";
import { ButtonTo } from "./buttonTo";
import Title from "./title";
import TimeDropdown from "./timeDropdown";
import CounterTasksOnPage from "./counterTasksOnPage";
import NoTaskSection from "./noTaskSection";
import StatusFilter from "./statusFilter";
import ActionButton from "./actionButton";
import Greetings from "./greetings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as ApiService from "../api";

class ToDo extends Component {
  constructor() {
    super();
    this.state = { scheme: ["green-bcolor", "red-bcolor"], tasks: [] };
  }

  componentDidMount() {
    ApiService.getTasks().then(tasks => {
      this.setState({ tasks: tasks.default });
    });
  }

  render() {
    return (
      <section>
        <div className={"flex-center main-column " + this.state.scheme[0]}>
          <div className="header">
            <Title className="p-header" text="My Tasks" />
            <TimeDropdown />
            <CounterTasksOnPage />
          </div>
          <NoTaskSection />

          <div className="footer-left">
            <StatusFilter />
            <div className="filter-task2">
              <ActionButton className="check" id="action-all-tasks" />
              <ActionButton className="trash-alt" id="trash-all-tasks" />
            </div>
          </div>
        </div>

        <div className={"flex-center main-column " + this.state.scheme[1]}>
          <p className="hi">Hi!</p>
          <Greetings />
          <ButtonTo className="button1" text="ADD TASK" path="/form" />
        </div>
      </section>
    );
  }
}

export default ToDo;
