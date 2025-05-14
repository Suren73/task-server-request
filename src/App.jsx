import React, { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';

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

	return (
		<div className={styles.container}>
			<div className={styles.menu}>
				<h1 className={styles.title}>Список дел:</h1>
				<TodoForm
					newTodo={newTodo}
					setNewTodo={setNewTodo}
					handleAdd={handleAdd}
					isCreating={isCreating}
				/>
				<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
				{isLoading && <LoadingOverlay />}
				<SortButton
					sortByAlphabet={sortByAlphabet}
					setSortByAlphabet={setSortByAlphabet}
				/>
			</div>
			<TodoList
				todos={todos}
				searchQuery={searchQuery}
				sortByAlphabet={sortByAlphabet}
				editingId={editingId}
				setEditingId={setEditingId}
				inputRef={inputRef}
				editingText={editingText}
				setEditingText={setEditingText}
				handleUpdate={handleUpdate}
				handleDelete={handleDelete}
			/>
		</div>
	);
}

export default App;
