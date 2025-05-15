import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../constants';

export function useRequestAddTodo(newTodo, setNewTodo, setTodos, setIsLoading) {
	const [isCreating, setIsCreating] = useState(false);
	function handleAdd() {
		if (!newTodo.trim()) return;

		setIsCreating(true);
		setIsLoading(true);

		axios
			.post(API_URL, {
				title: newTodo.trim(),
				completed: false,
			})
			.then((response) => {
				setTodos((prevTodo) => [...prevTodo, response.data]);
				setNewTodo('');
				console.log('Задача добавлена, ответ сервера: ', response.data);
			})
			.catch((error) => console.error('Ошибка:', error))
			.finally(() => {
				setIsLoading(false);
				setIsCreating(false);
			});
	}

	return { handleAdd, isCreating };
}
