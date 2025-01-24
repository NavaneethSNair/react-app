import React from "react";
export default function Note(props) {
  return (
    <div className="note">
      <h3 className="noteTitle">{props.title}</h3>
      <p className="noteDetails">{props.details}</p>
    </div>
  );
}
