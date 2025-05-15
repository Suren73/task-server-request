import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TaskDetailsPage from './pages/TaskDetailsPage/TaskDetailsPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/task/:id" element={<TaskDetailsPage />} />
			<Route path="/404" element={<NotFoundPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
