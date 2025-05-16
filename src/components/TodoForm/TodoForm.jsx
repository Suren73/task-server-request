import { useContext } from 'react';
import { AppContext } from '../../context';
import { createInputHandler } from '../../handlers';
import styles from './TodoForm.module.css';
// { newTodo, setNewTodo, handleAdd, isCreating }
export const TodoForm = () => {
	const { newTodo, setNewTodo, handleAdd, isCreating } = useContext(AppContext);

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
