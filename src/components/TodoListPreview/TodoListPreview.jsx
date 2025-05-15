import { NavLink } from 'react-router-dom';
import { useDebounce } from '../../hooks';
import { getFilteredTodos, getSortedTodos } from '../../utils';
import styles from './TodoListPreview.module.css';

export function TodoListPreview({ todos, searchQuery, sortByAlphabet }) {
	const debouncedQuery = useDebounce(searchQuery, 500);

	const filtered = getFilteredTodos(todos, debouncedQuery);
	const sorted = getSortedTodos(filtered, sortByAlphabet);

	return (
		<ul className={styles.list}>
			{sorted.map(({ id, title }) => (
				<li key={id} className={styles.listItem}>
					<NavLink to={`/task/${id}`}>
						<span className={styles.title}>{title}</span>
					</NavLink>
				</li>
			))}
		</ul>
	);
}
