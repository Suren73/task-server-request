import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ConfirmationModal, LoadingOverlay } from '../../components';
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
	const { setTodos, isLoading, setIsLoading } = useRequestGetTodos();
	const inputRef = useRef(null);
	const [showConfirmModal, setShowConfirmModal] = useState(false);

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

	const handleDeleteConfirmation = () => setShowConfirmModal(true);

	const handleConfirmDelete = () => {
		setShowConfirmModal(false);
		handleDelete(id);
	};

	return (
		<div className={styles.container}>
			<button
				type="button"
				className={styles.backBtn}
				onClick={() => navigate('/')}
			>
				← Назад
			</button>
			{isLoading && <LoadingOverlay />}
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
					<button
						className={styles.deleteBtn}
						onClick={handleDeleteConfirmation}
					>
						Удалить
					</button>
				</div>
			</div>
			{showConfirmModal && (
				<ConfirmationModal
					message="Вы уверены, что хотите удалить эту задачу?"
					onConfirm={handleConfirmDelete}
					onCancel={() => setShowConfirmModal(false)}
				/>
			)}
		</div>
	);
}
