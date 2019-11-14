import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToDo from "./components/todo";
import Form from "./components/form";
import * as ApiService from "./api";

library.add(fas);

class App extends Component {
  componentDidMount() {
    // Fake data in localstorage
    ApiService.createApi().then(() => console.log("task was created"));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ToDo} />
          <Route path="/form" component={Form} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
