import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../constants';

export function useRequestDeleteTodo(setTodos, setIsLoading) {
	const navigate = useNavigate();

	function handleDelete(id) {
		setIsLoading(true);
		const todoId = id;
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
				navigate('/');
			});
	}
	return handleDelete;
}
