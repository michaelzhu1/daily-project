import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        <li>this.props.todo.title</li>
      </ul>
    );
  }
}

export default TodoListItem;
