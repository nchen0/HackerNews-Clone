import React from "react";

const Story = ({ story }) => {
  console.log("story: ", story);
  return (
    <li>
      <a href={story.url}>{story.title}</a>
      <div>
        {story.score} points by {story.by} {/*| {story.kids.length} comments*/}
      </div>
    </li>
  );
};

export default Story;
