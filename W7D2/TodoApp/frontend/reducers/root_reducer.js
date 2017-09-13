import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';

/*
combineReducers sets up your slices of state

ex:

{
  todos: {
    1: {title: "todo itme thing"},
    6: {title: "another todo"}
  }
  types_of_cats: {
    5: {type: "tabby", name: "milo"}
  }
  photos:
}
}
*/

const rootReducer = combineReducers ({
  todos: todosReducer
});

export default rootReducer;
