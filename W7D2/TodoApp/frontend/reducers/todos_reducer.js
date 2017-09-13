import { RECEIVE_TODOS } from "../actions/todo_actions";
import { RECEIVE_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions/todo_actions";
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
  let newobj = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      // debugger;
      action.todos.forEach((el) => {
        newState[el.id] = el;
      });
      return newState;
    case RECEIVE_TODO:
      newobj[action.todo.id] = action.todo;
      let newcopy = merge({}, state, newobj);
      return newcopy;
    case REMOVE_TODO:
      // console.log(action);
      let id = action.todo.id;
      let newresult = merge({}, state);
      delete newresult[id];
      return newresult;
    case UPDATE_TODO:
      let newupdate = merge({}, state);
      console.log(action.todo.done);
      newupdate[action.todo.id].done = !action.todo.done;
      // console.log(newupdate[action.todo.done]);
      console.log(newupdate);
      return newupdate;
    default:
      return state;
  }
};


export default todosReducer;
