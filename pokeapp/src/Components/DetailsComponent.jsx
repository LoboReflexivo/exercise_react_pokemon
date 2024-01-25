import React from "react";

export default function DetailsComponent(props) {
  const { id, name, url } = props;

  return (
    <div>
      <div>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>url: {url}</p>
      </div>
      <hr />
    </div>
  );
}
