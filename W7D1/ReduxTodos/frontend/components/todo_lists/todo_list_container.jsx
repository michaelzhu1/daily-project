import {connect} from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selectors';
import { receiveTodo } from "../../actions/todo_actions";


const mapStateToProps = state => ({
  todos: allTodos(state)
});


const mapDispatchToProps= dispatch =>({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

// todolist
// this.props.todos
// this.props.receiveTodo
// when a button is clicked, you invoke this.props.receiveTodo
