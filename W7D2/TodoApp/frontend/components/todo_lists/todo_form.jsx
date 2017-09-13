import React from 'react';
import TodoListItem from './todo_list_item';
import {uniqueId} from '../../util/util';
import {receiveTodo} from '../../actions/todo_actions';

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title:'', body:'', done: false};
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody= this.updateBody.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  render () {
    return (
      <div>
        <label>
          Title
          <input type='text' value={this.state.title} onChange={this.updateTitle}></input>
        </label>

        <label>
          Body
          <input type='text' value={this.state.body} onChange={this.updateBody}></input>
        </label>

          <button onClick={this.handleSubmit}> New Todo </button>
      </div>
    );
  }
  updateTitle(e) {
    e.preventDefault();
    this.setState({title: e.currentTarget.value});
  }
  updateBody(e) {
    e.preventDefault();
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.props);
    const todo = Object.assign({}, this.state, {id: uniqueId()});
    this.props.receiveTodo(todo);
    this.setState({
      title: '',
      body: ''
    });
  }
}
