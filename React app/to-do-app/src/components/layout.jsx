import React, { Component } from "react";
import ToDo from "./todo";
import Form from "./form";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
class Layout extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ToDo} />
        <Route path="/form" component={Form} />
      </Switch>
    );
  }
}

export default Layout;
