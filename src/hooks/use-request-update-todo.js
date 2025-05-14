import axios from 'axios';
import { API_URL } from '../constants';

export function useRequestUpdateTodo(setTodos, setIsLoading, setEditingId) {
	function handleUpdate(id, newTitle) {
		if (!newTitle.trim()) return;
		const todoId = id;
		setIsLoading(true);

		setTimeout(() => {
			axios
				.patch(`${API_URL}/${todoId}`, {
					title: newTitle.trim(),
				})
				.then((response) => {
					setTodos((prevTodo) =>
						prevTodo.map((todo) =>
							todo.id === response.data.id
								? { ...todo, title: response.data.title }
								: todo,
						),
					);
					console.log('Задача обновлена, ответ сервера: ', response.data);
				})
				.catch((error) => console.error('Ошибка:', error))
				.finally(() => {
					setIsLoading(false);
					setEditingId(null);
				});
		}, 2500);
	}

	return handleUpdate;
}
