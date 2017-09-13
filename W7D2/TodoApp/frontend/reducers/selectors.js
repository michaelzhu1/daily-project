export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  return keys.map((el) => {
    return state.todos[el];
  });
};

// export const allTodos = (state) => {
//   Object.keys(state.todos).map(id => state.todos[id]);
// };
