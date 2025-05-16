import React, { useContext } from 'react';
import styles from './SortButton.module.css';
import { AppContext } from '../../context';
//{ sortByAlphabet, setSortByAlphabet }

export const SortButton = () => {
	const { sortByAlphabet, setSortByAlphabet } = useContext(AppContext);

	return (
		<div className={styles.sort}>
			<button
				onClick={() => setSortByAlphabet(!sortByAlphabet)}
				className={`${styles.button} ${sortByAlphabet ? styles.activeSort : ''}`}
			>
				{sortByAlphabet ? 'Отменить сортировку' : 'Сортировать по А-Я'}
			</button>
		</div>
	);
};
