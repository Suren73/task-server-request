import axios from 'axios';
import { API_URL } from '../constants';

export function useRequestDeleteTodo(setTodos, setIsLoading) {
	function handleDelete(id) {
		setIsLoading(true);
		const todoId = id;
		setTimeout(() => {
			axios
				.delete(`${API_URL}/${todoId}`)
				.then((response) => {
					setTodos((prevTodo) =>
						[...prevTodo].filter((todo) => todo.id !== response.data.id),
					);
					console.log('Задача удалена, ответ сервера: ', response.data);
				})
				.catch((error) => console.error('Ошибка:', error))
				.finally(() => {
					setIsLoading(false);
				});
		}, 2500);
	}
	return handleDelete;
}
