import React, { Component } from "react";
import { connect } from "react-redux";
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
    console.log("stories page: ", this.props.stories.stories);
    const { stories } = this.props.stories;
    return (
      <ol>
        {stories.map((story, i) => {
          return <Story key={i} story={story} />;
        })}
      </ol>
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
