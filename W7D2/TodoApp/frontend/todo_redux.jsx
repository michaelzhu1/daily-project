import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import App from './components/app';
import Root from './components/root';
import { allTodos } from './reducers/selectors';



// function Root(props) {


  window.receiveTodo = receiveTodo;
//   window.receiveTodos = receiveTodos;
//
//
//   return (
//     <div>
//       <h1>Todo App</h1>
//     </div>
//   );
// }

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.allTodos = allTodos;
  window.store = store;

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
