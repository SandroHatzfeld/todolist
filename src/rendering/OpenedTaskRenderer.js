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
				OpenedTaskRenderer.returnValues()
				e.currentTarget.remove()
			}
		})

		const popupFormEl = document.createElement("form")
		popupFormEl.innerHTML = `
			<div class="popup-flex-container">
				<div id="taskCheckbox" class="checkbox ${this.task.checked ? 'checked' : ''}" ></div>
				<h1 class="popup-input-editable" id="taskTitle" contenteditable="true">${this.task.title}</h1>
			</div>
				<select id="taskPriority">
						<option selected>${this.task.priority.name}</option>
	
						${ProjectList.currentProject.priorities.filter((priority) => priority !== this.task.priority).map((priority) => {
							return `<option value="${priority.name}" style="${priority.color}">${priority.name}</option>`
						}).join("")}
					</select>
				${this.task.dueDate ? `<input id="taskDueDate" type="date" value="${this.task.dueDate}">` : ''}
				<div class="popup-input-editable" id="taskDescription" contenteditable="true">${this.task.description ? this.task.description : ''}</div>			
			`

		popupWrapperEl.appendChild(popupFormEl)
		document.querySelector("body").appendChild(popupWrapperEl)

		const taskCheckboxEl = document.querySelector("#taskCheckbox")

		// eventlisterener to toggle the state
		taskCheckboxEl.addEventListener("click", (e) => {
			e.stopPropagation()
			this.task.state = !this.task.state

			taskCheckboxEl.classList.toggle("checked")
		})

	}

	static returnValues() {
		const taskTitleEl = document.querySelector("#taskTitle")
		const taskPriorityEl = document.querySelector("#taskPriority")
		if (this.task.dueDate) {
			const taskDueDateEl = document.querySelector("#taskDueDate")
			this.task.dueDate = taskDueDateEl.value
		}
		const taskDescriptionEl = document.querySelector("#taskDescription")

		this.task.title = taskTitleEl.innerHTML

		// Find the matching priority object
		const priorityObject = ProjectList.currentProject.priorities.find(p => p.name === taskPriorityEl.value)

		this.task.priority = priorityObject 

		this.task.description = taskDescriptionEl.innerHTML
	}
}