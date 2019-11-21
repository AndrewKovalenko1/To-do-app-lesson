import React, { Component } from "react";
import { ButtonTo } from "./buttonTo";
import Title from "./title";
import PeriodDropdown from "./periodDropdown";
import {CounterTasksOnPage} from "./counterTasksOnPage";
import {NoTaskSection} from "./noTaskSection";
import StatusFilter from "./statusFilter";
import {ActionButton} from "./actionButton";
import {Greetings} from "./greetings";
import * as ApiService from "../api";
import {Task} from "./task";

class ToDo extends Component {
  constructor() {
    super();
    this.state = {tasks: [],
    period: "Today",
    status: "All",
    tasksToView: [],
    lastId: 0,
    iconAction: "check" };
  }

  componentDidMount() {
    ApiService.getTasks().then(tasks => {
      this.setState({ tasks: (tasks.default===undefined)?tasks :tasks.default },()=>{this.filterTasks()});
    });
  }

  handleOnClickPeriod = period => {
    if (period) {
         this.setState({ period: period },()=>{this.filterTasks()});
         
    }

    }
    handleOnChangeStatus = event =>{
      if (event.target.value ==="Done"){
        this.setState({iconAction: "redo-alt"});
      } 
      else if(event.target.value ==="All"){
      let status = (this.state.tasksToView.filter(item=>item.status==="Active").length>0)?"check":"redo-alt";
      this.setState({iconAction: status});

      }
      else {
        this.setState({iconAction: "check"});
      }
      this.setState({ status: event.target.value},()=>{this.filterTasks()});

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

    filterTasks = () =>{
      console.log(this.state.period);
     console.log(this.state.status);
      if(this.state.status==="All"){
        this.setState({tasksToView: this.state.tasks.filter(item=>this.getCurrentDate(item.date)===this.state.period)},
        ()=>{
          if(this.state.status==="All"){
            let status = (this.state.tasksToView.filter(item=>item.status==="Active").length>0)?"check":"redo-alt";
            this.setState({iconAction: status});
        }})
      } else {
        this.setState({tasksToView: this.state.tasks.filter(item=>this.getCurrentDate(item.date)===this.state.period && item.status===this.state.status)})
      }
    }

    actionAllTasks=()=>{
      if(this.state.tasksToView.length===0){
        return;
      }
      let arrId = this.state.tasksToView.map(item=>item.id);
      ApiService.editTasks(arrId,this.state.iconAction).then(tasks => {
        this.setState({ tasks: (tasks.default===undefined)?tasks :tasks.default },()=>{this.filterTasks()});
      });
    }
    actionOneTask=item=>{
      let currAction = (item.status==="Active")?"check":"redo-alt";
      let arrId = [item.id];

     ApiService.editTasks(arrId,currAction).then(tasks => {
        this.setState({ tasks: (tasks.default===undefined)?tasks :tasks.default },()=>{this.filterTasks()});
      });
    }
    deleteAllTasks=()=>{
      if(this.state.tasksToView.length===0){
        return;
      }
      let arrId = this.state.tasksToView.map(item=>item.id);
      ApiService.deleteTasks(arrId).then(tasks => {
        this.setState({ tasks: (tasks.default===undefined)?tasks :tasks.default },()=>{this.filterTasks()});
      });
    }
    deleteOneTask=item=>{
      let arrId = [item.id];

      ApiService.deleteTasks(arrId).then(tasks => {
        this.setState({ tasks: (tasks.default===undefined)?tasks :tasks.default },()=>{this.filterTasks()});
      });
    }
  render() {
    return (
      <section>
        <div className="flex-center main-column green-bcolor">
          <div className="header">
            <Title className="p-header" text="My Tasks" />
            <PeriodDropdown handleOnClickPeriod = {this.handleOnClickPeriod} currentPeriod = {this.state.period} tasks = {this.state.tasks}/>
            <CounterTasksOnPage tasksToWiew = {this.state.tasksToView}/>
          </div>
          {(this.state.tasksToView.length > 0) ? 
          <div className="flex-center main-section1">
            {this.state.tasksToView.map(item=><Task task = {item} key={item.id} actionOneTask = {()=>this.actionOneTask(item)}
            deleteOneTask = {()=>this.deleteOneTask(item)}/>)}
          </div>
          : <NoTaskSection status = {this.state.status} period = {this.state.period}/>}

          <div className="footer-left">
            <StatusFilter currentStatus = {this.state.status}  onChange = {(event)=>this.handleOnChangeStatus(event)}/>
            <div className="filter-task2">
              <ActionButton className={this.state.iconAction} onClick = {this.actionAllTasks}/>
              <ActionButton className="trash-alt" onClick = {this.deleteAllTasks}/>
            </div>
          </div>
        </div>

        <div className="flex-center main-column red-bcolor">
          <p className="hi">Hi!</p>
          <Greetings isTasks = {this.state.tasks.length>0}/>
          <ButtonTo className="button1" text="ADD TASK" path="/form" />
        </div>
      </section>
    );
  }
}

export default ToDo;
