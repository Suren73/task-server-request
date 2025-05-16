import { useContext } from 'react';
import { AppContext } from '../../context';
import { useDebounce } from '../../hooks';
import { getFilteredTodos, getSortedTodos } from '../../utils';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export const TodoList = () => {
	const {
		todos,
		searchQuery,
		sortByAlphabet,
		editingId,
		setEditingId,
		inputRef,
		editingText,
		setEditingText,
		handleUpdate,
		handleDelete,
	} = useContext(AppContext);
	const debouncedSearchQuery = useDebounce(searchQuery, 500);

	const filteredTodos = getFilteredTodos(todos, debouncedSearchQuery);
	const sortedAndFilteredTodos = getSortedTodos(filteredTodos, sortByAlphabet);

	return (
		<ul className={styles.list}>
			{sortedAndFilteredTodos.map(({ id, title }) => (
				<TodoItem
					key={id}
					id={id}
					title={title}
					editingId={editingId}
					setEditingId={setEditingId}
					inputRef={inputRef}
					editingText={editingText}
					setEditingText={setEditingText}
					handleUpdate={handleUpdate}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	);
};
