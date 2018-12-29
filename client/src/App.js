import React, { Component } from "react";
import "./App.css";
import TitleBar from "./components/TitleBar";
import Stories from "./components/Stories";

class App extends Component {
  render() {
    return (
      <div className="container">
        <TitleBar />
        <Stories />
      </div>
    );
  }
}

export default App;
