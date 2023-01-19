import React from "react";
import { useState } from "react";


const toDoList = () => {

// Creo los estados para la entrada de valores (inputValue) y para la lista de tareas (taskList)
	const [taskList, setTaskList] = useState([])
	const [inputValue, setInputValue] = useState("")

// Función para manejar la entrada de valores
	const handleInputChange = (e) => {
		if (inputValue !== "") {
				setInputValue(e.target.value)
			} 
		}
	
// Función para manejar la eliminación de elementos de la lista de tareas
	const handleRemoveTask = (index) => {
		const updatedTask = [...taskList];
		updatedTask.splice(index, 1);
		setTaskList(updatedTask);
		console.log(taskList)
	}

// Función para manejar el envío de datos del formulario
	const handleSubmitForm = (e) => {
		e.preventDefault()
		setTaskList([...taskList, inputValue])         //detiene comportamiento predeterminado del formulario
		setInputValue("")
		console.log(inputValue)
	}

	return (
		<>
		<div className="text-center">
			<h1>To-Do List</h1>
			<form className="container" onSubmit={handleSubmitForm}>
				<div className="mb-3">
{/* Input para añadir tareas a la lista */}
					<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add a task and press Enter" 
						onChange={e => setInputValue(e.target.value)}      
						value={inputValue}
						onKeyDown={handleInputChange} />
				</div>
			</form>
{/* Lista donde se van añadiento las tareas */}
			<div className="container">
				<ul className="list-group">
					{taskList.map((task, index) => (
						<li key={index} >
							{task}
	{/* Botón para eliminar tarea */}
							<span>
								<i className="fa fa-trash" onClick={() => handleRemoveTask(index)}></i>
							</span>
						</li>
					))}
				</ul>
			</div>
{/* Info de tareas pendientes */}
			<div className="container"><p>Pending tasks:{taskList.length}</p></div>
		</div>
		</>
	);
}

export default toDoList;
