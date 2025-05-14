import React from 'react';
import styles from './SortButton.module.css';

export const SortButton = ({ sortByAlphabet, setSortByAlphabet }) => {
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
