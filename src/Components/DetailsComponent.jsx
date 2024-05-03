import React from "react";

export default function DetailsComponent(props) {
  const { id, name, url, height, weight, type } = props;
  console.log("DetailsComponent", type); //para visualizar array y objetos mejor de esta forma

  return (
    <div>
      <div>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>url: {url}</p>
        <h2>Details:</h2>
        <p>height: {height}</p>
        <p>weight: {weight}</p>
        <ul>
          {type.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
}
