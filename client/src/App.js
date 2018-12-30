import React, { Component } from "react";
import "./App.css";
import TitleBar from "./components/TitleBar";
import Stories from "./components/Stories";
import { Route } from "react-router-dom";
import New from "./components/New";

class App extends Component {
  render() {
    return (
      <div className="container">
        <TitleBar />
        <Route exact path="/" component={Stories} />
        <Route path="/new" component={New} />
      </div>
    );
  }
}

export default App;
