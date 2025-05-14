export function getFilteredTodos(todos, searchQuery) {
	return todos.filter((todo) =>
		todo.title.toLowerCase().includes(searchQuery.trim().toLowerCase()),
	);
}
