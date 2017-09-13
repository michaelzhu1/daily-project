import React from 'react';
import TodoListItem from './todo_list_item';
import {TodoForm} from './todo_form';


class TodoList extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.todos);
  }
  render() {
    const todoItems = this.props.todos.map ((todo) => (
      <TodoListItem key = {`todo_list_item${todo.id}`}
        todo = {todo}
        receiveTodo = {this.props.receiveTodo}
        removeTodo = {this.props.removeTodo}
        updateTodo = {this.props.updateTodo} />
      )
    );


    return (
      <div>
        <ul>
          { todoItems }
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
