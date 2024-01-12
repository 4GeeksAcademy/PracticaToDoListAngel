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

	const addTasks = (event) => {
		event.preventDefault();
		if (newTask.trim() !== '') {
			setTask([...task, newTask])
			setNewTask('')
		}
	}

	const deleteTask = (index) => {
		setTask(task.filter((_, i) => i !== index));
	  };

	return (
		<div className="container text-center">
			<h1><i class="far fa-calendar-alt container d-inline"></i>todoList</h1>
			<form onSubmit={addTasks}>
				<input type="text" onChange={handleChanges} value={newTask} placeholder="¿Qué necesito hacer?" />
			</form>
			<ul>
			{task.map((task, i) => (
					<li key={i}>{task}<i class="far fa-trash-alt" onClick={() => deleteTask(i)}></i></li>
				))}
			</ul>
			<div>{task.length}</div>
		</div>
	);
};

export default Home;
