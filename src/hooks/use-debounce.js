import { useEffect, useState } from 'react';

export function useDebounce(value, delay) {
	const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedSearchQuery(value);
		}, delay);
		return () => {
			clearTimeout(timerId);
		};
	}, [value, delay]);

	return debouncedSearchQuery;
}
