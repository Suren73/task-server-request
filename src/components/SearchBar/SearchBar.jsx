import { createInputHandler } from '../../handlers';
import styles from './SearchBar.module.css';

export const SearchBar = ({ searchQuery, setSearchQuery }) => {
	return (
		<div className={styles.search}>
			<input
				type="text"
				value={searchQuery}
				onChange={createInputHandler(setSearchQuery)}
				placeholder="Поиск задач..."
				className={styles.input}
			/>
		</div>
	);
};
