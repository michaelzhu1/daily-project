import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <li>{this.props.todo.title}</li>
        <button onClick={this.handleRemove}>Delete</button>
        <button onClick={this.handleUpdate}>{this.props.todo.done ? "Undo" : "Done"}</button>
      </div>
    );
  }
  handleRemove(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  handleUpdate(e) {
    e.preventDefault();
    // console.log(this.state);
    this.props.updateTodo(this.props.todo);
  }



}

export default TodoListItem;
