import React, { Component } from "react";
import { Router } from "@reach/router";
import { Home } from "./Home";
import { Exercise1 } from "./exercise1/Exercise1";
import { Exercise2 } from "./exercise2/Exercise2";
import { Exercise3 } from "./exercise3/Exercise3";
import { Exercise4 } from "./exercise4/Exercise4";
import { Exercise5 } from "./exercise5/Exercise5";

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Exercise1 path="/exercise-1" />
        <Exercise2 path="/exercise-2" />
        <Exercise3 path="/exercise-3" />
        <Exercise4 path="/exercise-4" />
        <Exercise5 path="/exercise-5" />
      </Router>
    );
  }
}

export default App;
