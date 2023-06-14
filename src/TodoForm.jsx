export default function TodoForm() {

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className="container" onSubmit={handleSubmit}>
			<input type="text" className="todo-input" />
			<button className="todo-btn">submit</button>
		</form>
	);
}
