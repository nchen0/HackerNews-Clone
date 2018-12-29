import React from "react";

const Story = props => {
  console.log("props is: ", props);
  return <div>{props.story.title}</div>;
};

export default Story;
