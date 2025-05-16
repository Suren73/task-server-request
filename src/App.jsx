import React, { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import { AppContext } from './context';
import { LoadingOverlay, SearchBar, SortButton, TodoForm, TodoList } from './components';

import {
	useRequestAddTodo,
	useRequestDeleteTodo,
	useRequestGetTodos,
	useRequestUpdateTodo,
} from './hooks';

function App() {
	const [newTodo, setNewTodo] = useState('');
	const [editingId, setEditingId] = useState(null);
	const [editingText, setEditingText] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	const [sortByAlphabet, setSortByAlphabet] = useState(false);

	const inputRef = useRef(null);

	const { todos, setTodos, isLoading, setIsLoading } = useRequestGetTodos();

	const { handleAdd, isCreating } = useRequestAddTodo(
		newTodo,
		setNewTodo,
		setTodos,
		setIsLoading,
	);
	const handleDelete = useRequestDeleteTodo(setTodos, setIsLoading);
	const handleUpdate = useRequestUpdateTodo(setTodos, setIsLoading, setEditingId);

	useEffect(() => {
		if (editingId !== null && inputRef.current) {
			inputRef.current.focus();
		}
	}, [editingId]);

	const contextValue = {
		todos,
		newTodo,
		setNewTodo,
		isCreating,
		searchQuery,
		setSearchQuery,
		sortByAlphabet,
		setSortByAlphabet,
		editingId,
		setEditingId,
		inputRef,
		editingText,
		setEditingText,
		handleAdd,
		handleUpdate,
		handleDelete,
	};

	return (
		<AppContext value={contextValue}>
			<div className={styles.container}>
				{isLoading && <LoadingOverlay />}
				<div className={styles.menu}>
					<h1 className={styles.title}>Список дел:</h1>
					<TodoForm />
					<SearchBar />
					<SortButton />
				</div>
				<TodoList />
			</div>
		</AppContext>
	);
}

export default App;
