import React, { Component } from "react";
import "./TitleBar.css";

export default class TitleBar extends Component {
  render() {
    return (
      <div className="titleBar">
        <button>Y</button>
        <p>Hacker News</p>
        <p>new |</p>
        <p>comments |</p>
        <p>ask |</p>
        <p>jobs |</p>
        <p>submit |</p>
      </div>
    );
  }
}
