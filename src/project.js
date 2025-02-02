import Task from "./task.js"

export default class Project {
	constructor(name, description, icon) {
		this.name = name
		this.description = description
		this.icon = icon
	}

	#tasks = []

	/**
	 * @param {Task} task
	 */
	set addTask(task) {
		this.#tasks.push(task)
	}

	get getTasks() {
		return this.#tasks
	}
}