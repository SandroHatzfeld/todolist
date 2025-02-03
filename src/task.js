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

	renderTaskItem(index) {	
		const taskEl = document.createElement("div")
		taskEl.classList.add("task")
		taskEl.dataset.index = index

		const checkboxEl = document.createElement("div")
		checkboxEl.classList.add("checkbox")
		if(this.checked) checkboxEl.classList.add("checked")
		

		const textwrapperEl = document.createElement("div")
		const titleEl = document.createElement("span")
		titleEl.classList.add("task-title")
		titleEl.innerHTML = this.title
		textwrapperEl.appendChild(titleEl)
		
		if(this.dueDate) {
			const dueDateEl = document.createElement("span")
			dueDateEl.classList.add("due-date")
			dueDateEl.innerHTML = this.dueDate
			textwrapperEl.appendChild(dueDateEl)
		}

		taskEl.appendChild(checkboxEl)
		taskEl.appendChild(textwrapperEl)
		
		return taskEl
	}

	attachTaskClickListener() {
		const tasks = document.querySelectorAll(".task")
		tasks.forEach(task => {
			const checkbox = task.querySelector(".checkbox")

			checkbox.addEventListener("click", (e) => {
				this.setState = !this.getState
			})

			task.addEventListener("click", (e) => {

			})
		})
	}
}
