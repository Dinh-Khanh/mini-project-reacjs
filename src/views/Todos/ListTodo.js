import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    ListTodos: [
      { id: 1, title: "Khánh" },
      { id: 2, title: "Duyên" },
      { id: 3, title: "Khải" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    todo.id = this.state.ListTodos.length + 1;
    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
    });
    toast.success("Wow so easy!");
  };
  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.ListTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      ListTodos: currentTodo,
    });
    toast.success("Delete success!");
  };
  handleEditTodo = (todo) => {
    let { editTodo, ListTodos } = this.state;
    let isEditTodo = Object.keys(editTodo).length === 0;
    if (isEditTodo === false && editTodo.id === todo.id) {
      let ListTodosCopy = [...ListTodos];
      let indexObj = ListTodosCopy.findIndex((item) => item.id === todo.id);
      ListTodosCopy[indexObj].title = editTodo.title;
      this.setState({
        ListTodos: ListTodosCopy,
        editTodo: {},
      });
      toast.success("Update todo success");
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };
  handleChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { ListTodos, editTodo } = this.state;
    let isEditTodo = Object.keys(editTodo).length === 0;

    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {ListTodos?.length > 0 &&
            ListTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEditTodo === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            className="editTodo-input"
                            type="text"
                            value={editTodo.title}
                            onChange={(event) =>
                              this.handleChangeEditTodo(event)
                            }
                          />{" "}
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <div className="todo-child-option">
                    <button
                      className="Edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEditTodo === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="Delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListTodo;
