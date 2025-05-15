import styles from './ConfirmationModal.module.css';

export const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<p className={styles.modalMessage}>{message}</p>
				<div className={styles.modalButtons}>
					<button className={styles.confirmButton} onClick={onConfirm}>
						Удалить
					</button>
					<button className={styles.cancelButton} onClick={onCancel}>
						Отмена
					</button>
				</div>
			</div>
		</div>
	);
};
