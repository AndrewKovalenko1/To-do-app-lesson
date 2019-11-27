import React, { Component } from "react";
import { ButtonTo } from "./buttonTo";
import Title from "./title";
import { Summary } from "./summary";
import { Subtitle } from "./subtitle";
import IconDropdown from "./iconDropdown";
import { SubjectDropdown } from "./subjectDropdown";
import TimePicker from "./timePicker";
import { Toggle } from "./toggle";
import { ButtonNewTask } from "./buttonNewTask";
import * as ApiService from "../api";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskFill: false,
      toggleOn: true,
      timeValue: "",
      dateValue: "",
      iconValue: "plus",
      subject: null,
      whatValue: "",
      whereValue: "",
      subjects: [
        { name: "Business", color: "turquoise-color", value: 0 },
        { name: "Personal", color: "yellow-color", value: 0 },
        { name: "Family", color: "blue-color", value: 0 },
        { name: "Work", color: "violet-color", value: 0 }
      ],
      countOfTodayTasks: 0
    };
  }

  handleClickOnToggle = () => {
    if (this.state.toggleOn === true) {
      this.setState({ timeValue: "", timeType: "text" });
    }
    this.setState({ toggleOn: !this.state.toggleOn });
  };

  handleOnChange = (key, event) => {
    this.setState({ [key]: event.target.value });
  };

  handleOnClickIcon = iconName => {
    if (iconName) {
      this.setState({ iconValue: iconName });
    }
  };

  handleOnClickSubject = subject => {
    if (subject) {
      this.setState({ subject: subject });
    }
  };
  fillingCheking = () => {
    let allIsFill = true;
    if (
      (this.state.toggleOn === false && this.state.timeValue === "") ||
      this.state.dateValue === "" ||
      this.state.iconValue === "plus" ||
      this.state.whatValue === "" ||
      this.state.whereValue === ""
    ) {
      if (this.state.subject === null) {
        this.setState({ subject: this.state.subjects[0] });
      }
      allIsFill = false;
    }
    if (this.state.taskFill !== allIsFill) {
      this.setState({ taskFill: allIsFill });
    }
  };

  DateStringToDate = dateString => {
    let dateObj = new Date(dateString);
    dateObj.setHours(0, 0, 0, 0);
    return dateObj;
  };

  onTodayCounterUpdate = tasks => {
    const currDate = new Date();
    currDate.setHours(0, 0, 0, 0);
    const countFoToday = tasks.filter(
      task => this.DateStringToDate(task.date).getTime() === currDate.getTime()
    ).length;

    this.setState({ countOfTodayTasks: countFoToday });
  };

  onSummaryUpdate = tasks => {
    let subjects = this.state.subjects;
    for (let subject of subjects) {
      subject.value = tasks.filter(
        task => task.subject === subject.name
      ).length;
    }
    this.setState({ subjects: subjects });
  };

  handleClickAddTask = () => {
    let task = {
      subject: this.state.subject.name,
      icon: this.state.iconValue,
      title: this.state.whatValue,
      place: this.state.whereValue,
      period: this.state.toggleOn === true ? "All day" : this.state.timeValue,
      date: this.state.dateValue,
      status: "Active"
    };

    ApiService.addTask(task).then(tasks => {
      this.onTodayCounterUpdate(tasks);
      this.onSummaryUpdate(tasks);
      this.setState({
        taskFill: false,
        toggleOn: true,
        timeValue: "",
        dateValue: "",
        iconValue: "plus",
        subject: null,
        whatValue: "",
        whereValue: ""
      });
    });
  };
  componentDidUpdate() {
    this.fillingCheking();
  }
  componentDidMount() {
    ApiService.getTasks().then(tasks => {
      this.onTodayCounterUpdate(
        Object.values(tasks.tasks2)
      );
      this.onSummaryUpdate( Object.values(tasks.tasks2));
    });

  }

  render() {
    return (
      <section>
        <div className={"flex-center main-column red-bcolor"}>
          <p className="summary">Summary</p>
          <Summary subjects={this.state.subjects} />
          <ButtonTo
            className="button1"
            id="button-to-page-add-task"
            text="VIEW TASKS"
            path="/"
          />
        </div>
        <div className={"flex-center main-column green-bcolor"}>
          <div className="header">
            <Title className="p-header text-align-right" text="New Task" />
            <Subtitle countOfTasks={this.state.countOfTodayTasks} />
          </div>
          <div className="flex-center main-section2">
            <IconDropdown
              handleOnClickIcon={this.handleOnClickIcon}
              currentIcon={this.state.iconValue}
            />
            <form id="form-add-task">
              <SubjectDropdown
                subjects={this.state.subjects}
                handleOnClickSubject={this.handleOnClickSubject}
                subject={this.state.subject}
              />
              <input
                type="text"
                placeholder="What I have to do?*"
                value={this.state.whatValue}
                onChange={event => this.handleOnChange("whatValue", event)}
              />
              <input
                type="text"
                placeholder="Where?*"
                value={this.state.whereValue}
                onChange={event => this.handleOnChange("whereValue", event)}
              />
              <div className="date-container">
                <TimePicker
                  value={this.state.dateValue}
                  onChange={event => this.handleOnChange("dateValue", event)}
                  placeholder="When?*"
                  currType="date"
                  currClassName="input-in-div"
                />
                {this.state.toggleOn === false ? (
                  <TimePicker
                    value={this.state.timeValue}
                    onChange={event => this.handleOnChange("timeValue", event)}
                    placeholder="What time?*"
                    currType="time"
                    currClassName="time-in-div"
                  />
                ) : (
                  ""
                )}

                <Toggle onClick={this.handleClickOnToggle} />
              </div>
              <span className="req-text"> *Required fields</span>
            </form>
            <ButtonNewTask
              taskFill={this.state.taskFill}
              onClick={this.handleClickAddTask}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Form;
