import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNew } from "../actions";

class New extends Component {
  componentDidMount() {
    if (this.props.new.length < 20) {
      this.props.fetchNew();
    }
  }
  render() {
    console.log("newStory is: ", this.props);
    return (
      <ol>
        {this.props.new.map(story => {
          return (
            <li>
              <a href={story.url}>{story.title}</a>
              <div>
                {story.score} points by {story.by}
              </div>
            </li>
          );
        })}
      </ol>
    );
  }
}

const mapStateToProps = state => {
  return {
    new: state.new
  };
};

export default connect(
  mapStateToProps,
  { fetchNew }
)(New);
