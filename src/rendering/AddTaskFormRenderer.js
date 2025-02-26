import Controller from '../controller.js'
import ProjectList from '../projectList.js'
import Task from '../task.js'

export default class AddTaskFormRenderer {
	static priorities = []

	static renderInputForm() {
		const popupWrapperEl = document.createElement("div")
		popupWrapperEl.classList.add("popup-wrapper")

		popupWrapperEl.addEventListener("click", (e) => {
			if(e.currentTarget === e.target) {
				e.currentTarget.remove()
			}
		})

		const popupFormEl = document.createElement("form")
		popupFormEl.innerHTML = `
			<h1>New Task</h1>
			<div class="popup-input-container">
				<label for="newTaskName">Name*</label>
				<input id="newTaskName">
			</div>
			<div class="popup-input-container">
				<label for="newTaskDescription">Description</label>
				<input id="newTaskDescription">
			</div>
			<div class="popup-input-container">
				<label for="newTaskPriority">Priority*</label>
				<select id="newTaskPriority">
					<option disabled selected hidden></option>

					${this.priorities.map((priority) => {
						return `<option value="${priority.name}" style="${priority.color}">${priority.name}</option>`
					}).join("")}
				</select>
			</div>
			<div class="popup-input-container">
				<label for="newTaskDate">Due Date</label>
				<input id="newTaskDate" type="date">
			</div>
		`

		const submitNewTask = document.createElement("input")
		submitNewTask.value = "Add new Task"
		submitNewTask.type = "submit"
		submitNewTask.addEventListener("click", (e) => {
			e.preventDefault()
			if (!popupFormEl.checkValidity()) {
				popupFormEl.reportValidity()
				return
			}
			const newTaskName = document.querySelector("#newTaskName").value
			const newTaskDescription = document.querySelector("#newTaskDescription").value
			const newTaskPriorityName = document.querySelector("#newTaskPriority").value
			const newTaskDate = document.querySelector("#newTaskDate").value

			// Find the matching priority object
			const priorityObject = this.priorities.find(p => p.name === newTaskPriorityName)
			
			const newTask = new Task(newTaskName, newTaskDescription, priorityObject, newTaskDate)
			ProjectList.currentProject.tasks = newTask
			
			Controller.renderToScreen()
			document.querySelector("body").removeChild(popupWrapperEl)
		})

		popupFormEl.appendChild(submitNewTask)

		popupWrapperEl.appendChild(popupFormEl)
		document.querySelector("body").appendChild(popupWrapperEl)
	}
}