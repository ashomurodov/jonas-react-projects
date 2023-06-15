import { Component } from "react";

export class TodoForm extends Component {
	render() {
		console.log(this.props);
		return (
			<form className="container">
				<input type="text" className="todo-input" />
				<button className="todo-btn">submit</button>
			</form>
		);
	}
}
