export default class Task {
	constructor(title, description, priority, dueDate) {
		this.title = title
		this.description = description
		this.priority = priority
		this.dueDate = dueDate
	}

	// /**
	//  * @param {Date} date
	//  */
	// set DueDate(date) {
	// 	this._dueDate = date
	// }

	// get DueDate() {
	// 	return this._dueDate
	// }

	/**
	 * @param {boolean} state
	 */
	set state(state) {
		this.checked = state
	}

	get state() {
		return this.checked
	}

	// /**
	//  * @param {number} priority
	//  */
	// set Priority(priority) {
	// 	this.priority = priority
	// }

	// get Priority() {
	// 	return this.priority
	// }
}
