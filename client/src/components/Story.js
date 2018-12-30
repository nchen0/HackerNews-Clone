import React from "react";
import { Link, Route } from "react-router-dom";
import Comment from "./Comment";

const Story = ({ story }) => {
  return (
    <li>
      <a href={story.url}>{story.title}</a>
      <div>
        {story.score} points by {story.by}{" "}
        {story.kids ? (
          <Link to={`/item=${story.id}`}>
            <span>| {story.kids.length} comments</span>
          </Link>
        ) : null}
      </div>
      {/*<Route path={`/item=${story.id}`} component={Comment} />*/}
    </li>
  );
};

export default Story;
