import React, { Component } from "react";
import ButtonTo from "./buttonTo";
import Title from "./title";
import TimeDropdown from "./timeDropdown";
import CounterTasksOnPage from "./counterTasksOnPage";
import NoTaskSection from "./noTaskSection";
import StatusFilter from "./statusFilter";
import ActionButton from "./actionButton";
import Greetings from "./greetings";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { scheme: ["green-bcolor", "red-bcolor"] };
  }
  nextPath(path) {
    this.props.history.push(path);
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
          <ButtonTo
            className="button1"
            id="button-to-page-add-task"
            text="ADD TASK"
            path="/form"
            history={this.props.history}
          />
        </div>
      </section>
    );
  }
}

export default ToDo;
