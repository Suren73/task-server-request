import React from 'react';
import styles from './LoadingOverlay.module.css';

export const LoadingOverlay = () => {
	return (
		<div className={styles.overlay}>
			<div className={styles.spinner}></div>
			<div className={styles.message}>Пожалуйста, подождите...</div>
		</div>
	);
};
