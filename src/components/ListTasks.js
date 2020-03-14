import React from "react";
import "../styles.css";

const ListTasks = props => {
  const handleDoneId = id => props.handleDone(id);
  const handleCategoryId = id => props.handleCategory(id);

  return (
    <div>
      {props.list.map(task => {
        return (
          <div key={task.id} className="StyleTask">
            <h3>{task.title}</h3>
            <p>{task.date}</p>
            <p>{task.desc}</p>
            <p
              onClick={() => handleCategoryId(task.id)}
              className="StyleCategory"
            >
              {task.category}
            </p>
            <button id={task.id} onClick={() => handleDoneId(task.id)}>
              Done
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ListTasks;
