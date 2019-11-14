import React, { Component } from "react";
import Layout from "./components/layout";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

class App extends Component {
  render() {
    return <Layout />;
  }
}

export default App;
