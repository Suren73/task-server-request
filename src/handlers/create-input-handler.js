export function createInputHandler(setState) {
	return function (e) {
		return setState(e.target.value);
	};
}
