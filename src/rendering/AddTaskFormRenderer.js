export default class AddTaskFormRenderer {
	constructor(priorities) {
		priorities
	}
	renderInputForm() {
		const formWrapperEl = document.createElement("div")
		formWrapperEl.classList.add("form-wrapper")

		const formEl = document.createElement("form")
		formEl.innerHTML = `
			<h1>New Task</h1>
			<div class="form-input-container">
				<label for="newTaskName">Name</label>
				<input id="newTaskName">
			</div>
			<div class="form-input-container">
				<label for="newTaskDescription">Description</label>
				<input id="newTaskDescription">
			</div>
			<div class="form-input-container">
				<label for="newTaskPriority">Priority</label>
				<select id="newTaskPriority">
					<option value="NULL" disabled selected hidden></option>
					${this.priorities.map((priority) => {
						return `<option value="${priority.name}" style="${priority.color}">${priority.name}</option>`
					}).join("")}
				</select>
			</div>
			<div class="form-input-container">
				<label for="newTaskDate">Due Date</label>
				<input id="newTaskDate">
			</div>
		`

		const submitNewTask = document.createElement("input")
		submitNewTask.value = "Add new Task"
		submitNewTask.type = "submit"
		submitNewTask.addEventListener("click", (e) => {
			e.preventDefault()
		})

		formEl.appendChild(submitNewTask)

		formWrapperEl.appendChild(formEl)
		document.querySelector("body").appendChild(formWrapperEl)
	}
}