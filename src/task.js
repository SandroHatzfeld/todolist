export default class Task {
	constructor(title, description, priority) {
		this.title = title
		this.description = description
		this.priority = priority
	}

	/**
	 * @param {Date} date
	 */
	set setDueDate(date) {
		this.dueDate = date
	}

	get getDueDate() {
		console.log(`This Task is due on ${this.dueDate}`)
	}

	/**
	 * @param {boolean} state
	 */
	set setState(state) {
		this.checked = state
	}

	get getState() {
		return this.checked
	}

	/**
	 * @param {number} priority
	 */
	set setPriority(priority) {
		this.priority = priority
	}

	// create a task item
	renderTaskItem() {
		const taskEl = document.createElement("div")
		taskEl.classList.add("task")
		// eventlistener for opening the item in a separate view
		taskEl.addEventListener("click", (e) => {


		})

		const checkboxEl = document.createElement("div")
		checkboxEl.classList.add("checkbox")
		if (this.checked) { checkboxEl.classList.add("checked") }
		
		// eventlisterener to toggle the state
		checkboxEl.addEventListener("click", (e) => {
			e.stopPropagation()
			this.checked = !this.checked
			
			checkboxEl.classList.toggle("checked")
		})


		const textwrapperEl = document.createElement("div")
		const titleEl = document.createElement("span")
		titleEl.classList.add("task-title")
		titleEl.innerHTML = this.title
		textwrapperEl.appendChild(titleEl)

		if (this.dueDate) {
			const dueDateEl = document.createElement("span")
			dueDateEl.classList.add("due-date")
			dueDateEl.innerHTML = this.dueDate
			const breakEl = document.createElement("br")
			textwrapperEl.appendChild(breakEl)
			textwrapperEl.appendChild(dueDateEl)
		}

		taskEl.appendChild(checkboxEl)
		taskEl.appendChild(textwrapperEl)

		return taskEl
	}
}
