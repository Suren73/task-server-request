export function createHandleEdit(setEditingId, setEditingText) {
	function handleEdit(id, title) {
		setEditingId(id);
		setEditingText(title);
	}

	return handleEdit;
}
