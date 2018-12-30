import React, { Component } from "react";
import "./App.css";
import TitleBar from "./components/TitleBar";
import Stories from "./components/Stories";
import { Route, withRouter } from "react-router-dom";
import New from "./components/New";
import Comment from "./components/Comment";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="container">
        <TitleBar />
        <Route exact path="/" component={Stories} />
        <Route path="/new" component={New} />
        {this.props.stories.map(story => {
          return (
            <Route
              path={`/item=${story.id}`}
              render={props => <Comment {...props} story={story} />}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
