export default class Task {
	constructor(title, description, priority) {
		this.title = title
		this.description = description
		this.priority = priority
	}

	/**
	 * @param {Date} date
	 */
	set dueDate(date) {
		this._dueDate = date
	}

	get dueDate() {
		return this._dueDate
	}

	/**
	 * @param {boolean} state
	 */
	set state(state) {
		this.checked = state
	}

	get state() {
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
