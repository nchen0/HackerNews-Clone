import React, { Component } from "react";
import "./TitleBar.css";

export default class TitleBar extends Component {
  render() {
    return (
      <div className="titleBar">
        <img className="logo" src="./img/y18.gif" />
        <p className="title">Hacker News</p>
        <p className="categories">new |</p>
        <p className="categories">comments |</p>
        <p className="categories">ask |</p>
        <p className="categories">jobs |</p>
        <p className="categories">submit |</p>
      </div>
    );
  }
}
