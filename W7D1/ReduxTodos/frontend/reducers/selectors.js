export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  return keys.map((el) => {
    return state.todos[el];
  });
};
