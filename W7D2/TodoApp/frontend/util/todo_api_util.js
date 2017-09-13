export const fetchTodos = function () {
  return $.ajax({
    method: 'GET',
    url: '/api/todos'
  });
};
