export default class Task {
	constructor(title, description, priority) {
		title
		description
		priority
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
	get getPriority() {
		return this.priority
	}
}
