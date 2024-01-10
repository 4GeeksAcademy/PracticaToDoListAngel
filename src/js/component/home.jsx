import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [newTask, setNewTask] = useState("")
	const [task, setTask] = useState([])



	function handleChanges(event) {
		setNewTask(event.target.value)
	}

	/*function handleKeyDown(event) {
		if (event.key === 'Enter') {
			setTarea(anterior => anterior.concat([setTarea]))
			setInputValue("")
		}
	}*/

	const addTasks = (e) => {
		e.preventDefault();
		if (newTask.trim() !== '') {
			setTask([...task, newTask])
			setNewTask('')
		}
	}

	return (
		<div className="container text-center">
			<h1>todoList</h1>
			<form onSubmit={addTasks}>
				<input type="text" onChange={handleChanges} value={newTask} placeholder="¿Qué necesito hacer?" />
			</form>
			<ul>
				{task.map((task, i) => (
					<li key={i}>{task}<i className="far fa-trash-alt"></i></li>
				))}
			</ul>
		</div>
	);
};

export default Home;
