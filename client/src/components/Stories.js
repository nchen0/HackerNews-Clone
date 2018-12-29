import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStories } from "../actions";
import Story from "./Story.js";

class Stories extends Component {
  componentDidMount() {
    this.props.fetchStories();
  }
  render() {
    const { stories } = this.props.stories;
    return (
      <div>
        {stories.map((story, i) => {
          return <Story key={i} story={story} />;
        })}
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
