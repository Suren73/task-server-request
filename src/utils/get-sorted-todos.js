export function getSortedTodos(todos, sortByAlphabet) {
	return todos.sort((a, b) => {
		if (sortByAlphabet) {
			return a.title.localeCompare(b.title);
		}
		return 0; // Без сортировки
	});
}
