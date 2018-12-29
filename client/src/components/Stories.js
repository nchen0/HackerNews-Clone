import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStories } from "../actions";

class Stories extends Component {
  componentDidMount() {
    this.props.fetchStories();
  }
  render() {
    console.log("this.props is: ", this.props.stories);
    return (
      <div>
        <h1>Hi</h1>
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
