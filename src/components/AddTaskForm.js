import React from "react";
import "../styles.css";

const AddTaskForm = props => {
  return (
    <div>
      <h3>Task form</h3>
      <ol>
        <li>
          <input
            type="text"
            onChange={props.handleInput}
            value={props.title}
            name="title"
            placeholder="Enter title"
          />
        </li>
        <li>
          <input
            type="date"
            onChange={props.handleInput}
            value={props.date}
            name="date"
          />
        </li>
        <li>
          <textarea
            type="text"
            onChange={props.handleInput}
            name="desc"
            value={props.desc}
            placeholder="Enter desc"
          />
        </li>
      </ol>
      <button onClick={props.handleSubmit}>Submit</button>
    </div>
  );
};

export default AddTaskForm;
