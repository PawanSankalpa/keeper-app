import React from "react";

function Card(props) {
  function handleDelete() {
    props.onDelete(props.index);
  }

  return (
    <div className="card">
      <h2 style={props.titleStyling}> {props.idea}</h2>
      <p style={props.paragraphStyling}> {props.description}</p>
      <button className="deleteButton" onClick={handleDelete}>
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  );
}

export default Card;
