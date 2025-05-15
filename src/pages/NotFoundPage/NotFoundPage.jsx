import { NavLink } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>404</h1>
				<p className={styles.subtitle}>Страница не найдена</p>
				<p className={styles.text}>
					Запрашиваемая страница не существует или была перемещена
				</p>
				<NavLink to="/" className={styles.link}>
					Вернуться на главную
				</NavLink>
			</div>
		</div>
	);
}
