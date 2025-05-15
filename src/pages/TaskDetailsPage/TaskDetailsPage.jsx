import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../constants';
import {
	useRequestDeleteTodo,
	useRequestGetTodos,
	useRequestUpdateTodo,
} from '../../hooks';
import styles from './TaskDetailsPage.module.css';

export default function TaskDetailsPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [editingText, setEditingText] = useState('');
	const { setTodos, setIsLoading } = useRequestGetTodos();
	const inputRef = useRef(null);

	const handleUpdate = useRequestUpdateTodo(setTodos, setIsLoading);
	const handleDelete = useRequestDeleteTodo(setTodos, setIsLoading);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		axios
			.get(`${API_URL}/${id}`)
			.then((res) => {
				setEditingText(res.data.title);
				if (inputRef.current) {
					inputRef.current.focus();
					inputRef.current.select();
				}
			})
			.catch(() => navigate('/404'))
			.finally(() => setIsLoading(false));

		return () => controller.abort();
	}, [id, navigate, setIsLoading]);

	return (
		<div className={styles.container}>
			<button
				type="button"
				className={styles.backBtn}
				onClick={() => navigate('/')}
			>
				← Назад
			</button>

			<div className={styles.content}>
				<input
					value={editingText}
					onChange={(e) => setEditingText(e.target.value)}
					className={styles.inputEdit}
					ref={inputRef}
				/>
				<div className={styles.actionButtons}>
					<button
						className={styles.saveBtn}
						onClick={() => handleUpdate(id, editingText)}
					>
						Сохранить
					</button>
					<button className={styles.deleteBtn} onClick={() => handleDelete(id)}>
						Удалить
					</button>
				</div>
			</div>
		</div>
	);
}
