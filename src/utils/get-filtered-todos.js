export function getFilteredTodos(todos, query) {
	return todos.filter((todo) =>
		todo.title.toLowerCase().includes(query.trim().toLowerCase()),
	);
}
