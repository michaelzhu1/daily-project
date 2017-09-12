import { RECEIVE_TODOS } from "../actions/todo_actions";
import { RECEIVE_TODO } from "../actions/todo_actions";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      // debugger;
      action.todos.forEach((el) => {
        newState[el.id] = el;
      });
      return newState;
    case RECEIVE_TODO:
      let newobj = {};
      newobj[action.todo.id] = action.todo;
      let newcopy = merge({}, state, newobj);
      return newcopy;
    default:
      return state;
  }
};


export default todosReducer;
