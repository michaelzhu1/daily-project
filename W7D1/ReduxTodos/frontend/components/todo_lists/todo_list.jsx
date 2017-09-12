import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this);

    return (
      <ul>
        {this.props.todos.forEach(todo => {
        <li> todo.title</li>
        })
      }
      </ul>
    );
  }
}

export default TodoList;
