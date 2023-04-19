import React from "react";

export default function Pet(props) {
  return (
    <div className="border border-black p-2">
      <h1>{props.name}</h1>
      <p>
        {props.species} - {props.age} år
      </p>
    </div>
  );
}
