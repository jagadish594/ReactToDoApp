import React from "react";
import AddTaskForm from "./AddTaskForm";
import ListTasks from "./ListTasks";
import "../styles.css";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      desc: "",
      list: [],
      taskFormVisible: false,
      categories: ["shopping", "learn", "books", "tour"]
    };
  }

  handleDone = id => {
    let tempList = [...this.state.list];
    let taskIndex = tempList.findIndex(task => task.id === id);
    tempList.splice(taskIndex, 1);
    this.setState({
      list: tempList
    });
  };

  handleInput = event => {
    if (event.target.name === "title") {
      this.setState({
        title: event.target.value
      });
    }
    if (event.target.name === "date") {
      this.setState({
        date: event.target.value
      });
    }
    if (event.target.name === "desc") {
      this.setState({
        desc: event.target.value
      });
    }
  };

  handleSubmit = () => {
    let tempList = [...this.state.list];
    tempList.push({
      id: Math.random(),
      title: this.state.title,
      date: this.state.date,
      desc: this.state.desc,
      category: this.state.categories[0]
    });
    this.setState({
      list: tempList,
      taskFormVisible: false
    });
  };

  handleCategory = id => {
    let tempList = [...this.state.list];
    let taskIndex = tempList.findIndex(task => task.id === id);
    let nextCategory = this.next();
    tempList[taskIndex].category = this.state.categories[nextCategory];
    this.setState({
      list: tempList
    });
  };

  next = (() => {
    let count = 0;
    return () => {
      if (count < this.state.categories.length - 1) {
        return (count += 1);
      }
      return (count = 0);
    };
  })();

  handleAddTask = () => {
    this.setState({
      taskFormVisible: true
    });
  };

  render() {
    return (
      <div>
        <ListTasks
          list={this.state.list}
          handleDone={this.handleDone}
          categories={this.state.categories}
          handleCategory={this.handleCategory}
        />
        {this.state.taskFormVisible ? (
          <AddTaskForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            title={this.state.title}
            desc={this.state.desc}
            date={this.state.date}
          />
        ) : (
          <button onClick={this.handleAddTask}>Add Task</button>
        )}
      </div>
    );
  }
}

export default ToDo;
