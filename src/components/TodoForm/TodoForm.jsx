import React from 'react';
import { createInputHandler } from '../../handlers';
import styles from './TodoForm.module.css';

export const TodoForm = ({ newTodo, setNewTodo, handleAdd, isCreating }) => {
	return (
		<div className={styles.controls}>
			<input
				type="text"
				value={newTodo}
				onChange={createInputHandler(setNewTodo)}
				placeholder="Новая задача"
				className={styles.input}
			/>

			<button onClick={handleAdd} className={styles.button} disabled={isCreating}>
				Добавить
			</button>
		</div>
	);
};
