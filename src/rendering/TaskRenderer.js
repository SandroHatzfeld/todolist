import OpenedTaskRenderer from './OpenedTaskRenderer.js'

export default class TaskRenderer {
	constructor(task) {
		this.task = task
	}

	// render a task item
	renderTaskItem() {
		const taskEl = document.createElement("div")
		taskEl.classList.add("task")
		if (this.task.state) {
			taskEl.classList.add("task-done")
		}

		// eventlistener for opening the item in a separate view
		taskEl.addEventListener("click", (e) => {
			OpenedTaskRenderer.task = this.task
			OpenedTaskRenderer.renderInputForm()
		})

		const checkboxEl = document.createElement("div")
		checkboxEl.classList.add("checkbox")
		if (this.task.checked) { checkboxEl.classList.add("checked") }

		// eventlisterener to toggle the state
		checkboxEl.addEventListener("click", (e) => {
			e.stopPropagation()
			this.task.state = !this.task.state
			taskEl.classList.toggle("task-done")
			
			checkboxEl.classList.toggle("checked")
		})


		const textwrapperEl = document.createElement("div")
		const titleEl = document.createElement("span")
		titleEl.classList.add("task-title")
		titleEl.innerHTML = this.task.title
		textwrapperEl.appendChild(titleEl)

		if (this.task.dueDate) {
			const dueDateEl = document.createElement("p")
			dueDateEl.classList.add("due-date")
			dueDateEl.innerHTML = this.task.dueDate
			textwrapperEl.appendChild(dueDateEl)
		}

		taskEl.appendChild(checkboxEl)
		taskEl.appendChild(textwrapperEl)

		return taskEl
	}
}