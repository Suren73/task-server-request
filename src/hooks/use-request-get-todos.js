import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../constants';

export function useRequestGetTodos() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		axios
			.get(API_URL)
			.then((response) => {
				setTodos(response.data);
			})
			.catch((error) => console.error('Ошибка:', error))
			.finally(() => setIsLoading(false));
	}, []);

	return { todos, setTodos, isLoading, setIsLoading };
}
