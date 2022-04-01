import React from "react";
import { toast } from "react-toastify";
import "./AddTodo.scss";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("Missing title!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          className="todo-input"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <button
          type="button"
          className="todo-add-btn"
          onClick={() => this.handleAddTodo()}
        >
          ADD
        </button>
      </div>
    );
  }
}

export default AddTodo;
