import { useState } from 'react';
import {
	LoadingOverlay,
	SearchBar,
	SortButton,
	TodoForm,
	TodoListPreview,
} from '../../components';
import { useRequestAddTodo, useRequestGetTodos } from '../../hooks';
import styles from './HomePage.module.css';

export default function HomePage() {
	const [newTodo, setNewTodo] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	const [sortByAlphabet, setSortByAlphabet] = useState(false);

	const { todos, setTodos, isLoading, setIsLoading } = useRequestGetTodos();
	const { handleAdd, isCreating } = useRequestAddTodo(
		newTodo,
		setNewTodo,
		setTodos,
		setIsLoading,
	);

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
				<SortButton
					sortByAlphabet={sortByAlphabet}
					setSortByAlphabet={setSortByAlphabet}
				/>
				{isLoading && <LoadingOverlay />}
			</div>
			<TodoListPreview
				todos={todos}
				searchQuery={searchQuery}
				sortByAlphabet={sortByAlphabet}
			/>
		</div>
	);
}
