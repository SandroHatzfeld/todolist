export default class Task {
	constructor(title, description,priority) {
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
		console.log(`This Task is due on ${this.dueDate}`);
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
}
