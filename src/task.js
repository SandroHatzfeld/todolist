export default class Task {
	constructor(title, description, priority, dueDate) {
		this.title = title
		this.description = description
		this.priority = priority
		this.dueDate = dueDate	
		this.checked = false
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

}
