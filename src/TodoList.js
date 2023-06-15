import React from "react";
import { TodoForm } from "./TodoForm";

export class TodoList extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Welcome to home!</h1>
				<TodoForm />
			</div>
		);
	}
}
