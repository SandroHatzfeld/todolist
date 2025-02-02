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

	get getPriority() {
		let priorityClass = ""
		switch (this.priority) {
			case 0:
				priorityClass = "no"
				break
			case 1:
				priorityClass = "low"
				break
			case 2:
				priorityClass = "medium"
				break
			case 3:
				priorityClass = "high"
				break
			case 4:
				priorityClass = "urgent"
				break
		}
		return priorityClass + "-priority"
	}
}
