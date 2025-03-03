import Task from "./task.js"

export default class Project {
	constructor(title, description, icon) {
		this.title = title
		this.description = description
		this.icon = icon
	}

	#tasks = []

	/**
	 * @param {Task} task
	 */
	set tasks(task) {
		this.#tasks.push(task)
	}

	get tasks() {
		return this.#tasks
	}

	#priorites = []

	set priorities(priority) {
		this.#priorites.push(priority)
	}

	get priorities() {
		return this.#priorites
	}	

	updatePriority = (priority, index) => {
		this.#tasks.filter(task => task.priority.name === this.#priorites[index].name).map(task => task.priority = priority)
		this.#priorites[index] = priority
	}
}