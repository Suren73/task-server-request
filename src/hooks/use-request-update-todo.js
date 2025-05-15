import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../constants';

export function useRequestUpdateTodo(setTodos, setIsLoading) {
	const navigate = useNavigate();

	return (id, newTitle) => {
		if (!newTitle.trim()) return;
		setIsLoading(true);

		axios
			.patch(`${API_URL}/${id}`, { title: newTitle.trim() })
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
			.catch((err) => console.error('Update error:', err))
			.finally(() => {
				setIsLoading(false);
				navigate('/');
			});
	};
}
