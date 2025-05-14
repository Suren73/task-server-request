export function createHandleCancel(setEditingId) {
	function handleCancel() {
		setEditingId(null);
	}

	return handleCancel;
}
