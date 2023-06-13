// 1-usul
import React from "react";

export class Avatar extends React.Component {
  render() {
    return (
      <img
        className="avatar"
        src="https://img.freepik.com/free-photo/painting-jungle-scene-with-green-plant-green-leafy-plant_1340-31601.jpg?w=1380&t=st=1686192138~exp=1686192738~hmac=5dd95722708def59e92960fe6b3eea265d90d3db83e2f701503b8cca1691f7e7"
        alt=""
      />
    );
  }
}

// 2- usul

export function Avatar1() {
  return (
    <img
      className="avatar"
      src="https://img.freepik.com/free-photo/painting-jungle-scene-with-green-plant-green-leafy-plant_1340-31601.jpg?w=1380&t=st=1686192138~exp=1686192738~hmac=5dd95722708def59e92960fe6b3eea265d90d3db83e2f701503b8cca1691f7e7"
      alt=""
    />
  );
}
