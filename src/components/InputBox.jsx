import React, { useState, useRef } from "react";

function InputBox(props) {
  const [idea, setIdea] = useState("");
  const [description, setDescription] = useState("");

  const descriptionInputRef = useRef(null); // This helps us point at the second box

  function handleIdea(event) {
    const newIdea = event.target.value;
    setIdea(newIdea);
  }  

  function handleDescription(event) {
    const newDescription = event.target.value;
    setDescription(newDescription);
  }

  function handleAdd() {
    props.onAdd(idea, description);
    setIdea(""); // clearing up the input idea
    setDescription(""); // clearing up the input description
  }

  return (
    <div className="inputBox">
      <input
        name="idea"
        onChange={handleIdea}
        autoComplete="off"
        onKeyDown={(event) => {
          // event.key === "Enter" &&
          // (event.preventDefault(), //stop weird browser things
          // descriptionInputRef.current.focus()) // jump in to the second box
          /** Even thouh the above code looks cool the clarity and the
           * readablity is the most important */

          if (event.key === "Enter") {
            event.preventDefault();
            descriptionInputRef.current.focus();
          }
        }}
        type="text"
        placeholder="Idea"
        value={idea}
      />
      <textarea
        name="description"
        ref={descriptionInputRef} // this is the box that we point out earlier
        onChange={handleDescription}
        autoComplete="off"
        onKeyDown={(event) => {
          // event.key === "Enter" && handleAdd(); // even though this looks cool
          // it doesn't work every time
          if (event.key === "Enter") {
            event.preventDefault();
            handleAdd();
          }
        }}
        type="text"
        placeholder="Description ..."
        value={description}
        rows="4"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default InputBox;
