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

	renderTaskItem() {	
		return `
			<div class="task">
				<div class="checkbox ${this.checked ? "checked" : ""}"></div>
				<div>
					<span class="task-title">${this.title}</span><br>
					${this.dueDate ? `<span class='due-date'>${this.dueDate}</span>` : ""}
				</div>
			</div>
		`
	}

}
