import React, { useContext } from 'react';
import { createInputHandler } from '../../handlers';
import styles from './SearchBar.module.css';
import { AppContext } from '../../context';
// { searchQuery, setSearchQuery }
export const SearchBar = () => {
	const { searchQuery, setSearchQuery } = useContext(AppContext);

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
