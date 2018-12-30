import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Comment from "./Comment";
import { fetchStories } from "../actions";
import Story from "./Story.js";
import "./Stories.css";

class Stories extends Component {
  componentDidMount() {
    if (this.props.stories.stories.length < 20) {
      this.props.fetchStories();
    }
  }
  render() {
    const { stories } = this.props.stories;
    return (
      <div>
        <ol>
          {stories.map((story, i) => {
            return <Story key={i} story={story} />;
          })}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stories: state
  };
};

export default connect(
  mapStateToProps,
  { fetchStories }
)(Stories);
