import React, { Component } from "react";
import "./TitleBar.css";
import { Link } from "react-router-dom";

export default class TitleBar extends Component {
  render() {
    return (
      <div className="titleBar">
        <img className="logo" src="./img/y18.gif" />
        <p className="title">Hacker News</p>
        <Link to="/new" className="categories">
          new |
        </Link>
        <p className="categories">comments |</p>
        <p className="categories">ask |</p>
        <p className="categories">jobs |</p>
        <p className="categories">submit</p>
      </div>
    );
  }
}
