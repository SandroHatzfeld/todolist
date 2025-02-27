import Controller from '../controller.js'
import Project from '../project.js'
import ProjectList from '../projectList.js'

export default class OpenedTaskRenderer {
	static task


	static renderInputForm() {
		const popupWrapperEl = document.createElement("div")
		popupWrapperEl.classList.add("open-task-wrapper")
		popupWrapperEl.classList.add("popup-wrapper")

		popupWrapperEl.addEventListener("click", (e) => {
			if (e.currentTarget === e.target) {
				e.currentTarget.remove()
			}
		})

		const popupFormEl = document.createElement("form")
		popupFormEl.innerHTML = `
			<div class="popup-flex-container">
				<div id="taskCheckbox" class="checkbox ${this.task.checked ? 'checked' : ''}" ></div>
				<h1 class="popup-input-editable" id="taskTitle" contenteditable="true">${this.task.title}</h1>
			</div>
			<div>
				<div class="popup-flex-container" >
					<label for="taskPriority">Priority:</label>
					<select id="taskPriority">
							<option selected>${this.task.priority.name}</option>
							${ProjectList.currentProject.priorities.filter((priority) => priority !== this.task.priority).map((priority) => {
			return `<option value="${priority.name}" style="${priority.color}">${priority.name}</option>`
		}).join("")}
						</select>
					</div>
				<div class="popup-flex-container">
						<label for="taskDueDate">Due Date:</label>
					<input id="taskDueDate" type="date" value="${this.task.dueDate ? this.task.dueDate : ''}">
				</div>
			</div>
			<div class="popup-input-editable" id="taskDescription" contenteditable="true">${this.task.description ? this.task.description : ''}</div>			
		`

		popupWrapperEl.appendChild(popupFormEl)
		document.querySelector("body").appendChild(popupWrapperEl)

		const taskCheckboxEl = document.querySelector("#taskCheckbox")

		// eventlisterener to toggle the state
		taskCheckboxEl.addEventListener("click", (e) => {
			e.stopPropagation()
			this.task.state = !this.task.state

			Controller.updateProjectPanel()
			taskCheckboxEl.classList.toggle("checked")
		})

		const taskTitleEl = document.querySelector("#taskTitle")
		taskTitleEl.addEventListener("input", (e) => {
			this.task.title = e.target.innerHTML
			Controller.updateProjectPanel()
		})

		const taskPriorityEl = document.querySelector("#taskPriority")
		taskPriorityEl.addEventListener("input", (e) => {
			// Find the matching priority object
			const priorityObject = ProjectList.currentProject.priorities.find(p => p.name === e.target.value)

			this.task.priority = priorityObject
			Controller.updateProjectPanel()

		})

		const taskDueDateEl = document.querySelector("#taskDueDate")
		taskDueDateEl.addEventListener("input", (e) => {
			this.task.dueDate = e.target.value
			Controller.updateProjectPanel()
		})


		const taskDescriptionEl = document.querySelector("#taskDescription")
		taskDescriptionEl.addEventListener("input", (e) => {
			this.task.description = e.target.innerHTML
			Controller.updateProjectPanel()
		})

	}
}